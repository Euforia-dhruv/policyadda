"""
Local Video Generation Tool - Higgsfield Alternative
Unlimited video generation for website assets using open-source models
"""

import os
import sys
import yaml
import torch
import argparse
from pathlib import Path
from datetime import datetime
from typing import Optional, Union

from diffusers import (
    StableVideoDiffusionPipeline,
    AnimateDiffPipeline,
    MotionAdapter,
    EulerAncestralDiscreteScheduler,
    DDIMScheduler,
)
from transformers import CogVideoXImage2VideoPipeline, CogVideoXPipeline
from huggingface_hub import snapshot_download


class VideoGenerator:
    def __init__(self, config_path: str = "config.yaml"):
        with open(config_path, "r") as f:
            self.config = yaml.safe_load(f)
        
        self.device = "cuda" if torch.cuda.is_available() else "cpu"
        self.dtype = torch.float16 if self.device == "cuda" else torch.float32
        
        self.output_dir = Path(self.config["output"]["directory"])
        self.output_dir.mkdir(parents=True, exist_ok=True)
        
        self.pipelines = {}
        print(f"Using device: {self.device}")
        print(f"Output directory: {self.output_dir}")

    def load_cogvideox(self):
        """Load CogVideoX pipeline for text-to-video"""
        if "cogvideox" not in self.pipelines:
            print("Loading CogVideoX model...")
            model_id = self.config["cogvideox"]["model"]
            
            pipe = CogVideoXPipeline.from_pretrained(
                model_id,
                torch_dtype=self.dtype,
            )
            
            if self.device == "cuda":
                pipe = pipe.to(self.device)
                pipe.enable_model_cpu_offload()
            
            self.pipelines["cogvideox"] = pipe
            print("CogVideoX loaded successfully!")
        return self.pipelines["cogvideox"]

    def load_stable_video(self):
        """Load Stable Video Diffusion pipeline for image-to-video"""
        if "stable_video" not in self.pipelines:
            print("Loading Stable Video Diffusion model...")
            model_id = self.config["stable_video"]["model"]
            
            pipe = StableVideoDiffusionPipeline.from_pretrained(
                model_id,
                torch_dtype=self.dtype,
                variant="fp16" if self.dtype == torch.float16 else None,
            )
            
            if self.device == "cuda":
                pipe = pipe.to(self.device)
                pipe.enable_model_cpu_offload()
            
            self.pipelines["stable_video"] = pipe
            print("Stable Video Diffusion loaded successfully!")
        return self.pipelines["stable_video"]

    def load_animatediff(self):
        """Load AnimateDiff pipeline for text-to-video"""
        if "animatediff" not in self.pipelines:
            print("Loading AnimateDiff model...")
            
            adapter = MotionAdapter.from_pretrained(
                self.config["animatediff"]["model"],
                torch_dtype=self.dtype,
            )
            
            pipe = AnimateDiffPipeline.from_pretrained(
                "emilianJR/epiCRealism",
                motion_adapter=adapter,
                torch_dtype=self.dtype,
            )
            
            if self.config["animatediff"]["scheduler"] == "euler_ancestral":
                pipe.scheduler = EulerAncestralDiscreteScheduler.from_config(
                    pipe.scheduler.config
                )
            else:
                pipe.scheduler = DDIMScheduler.from_config(
                    pipe.scheduler.config
                )
            
            if self.device == "cuda":
                pipe = pipe.to(self.device)
                pipe.enable_model_cpu_offload()
            
            self.pipelines["animatediff"] = pipe
            print("AnimateDiff loaded successfully!")
        return self.pipelines["animatediff"]

    def generate_video_from_text(
        self,
        prompt: str,
        backend: Optional[str] = None,
        width: int = 480,
        height: int = 480,
        num_frames: int = 49,
        seed: int = -1,
        output_name: Optional[str] = None,
    ) -> str:
        """Generate video from text prompt"""
        backend = backend or self.config["backend"]
        
        if seed == -1:
            seed = torch.randint(0, 2**32, (1,)).item()
        
        generator = torch.Generator(device=self.device).manual_seed(seed)
        
        if backend == "cogvideox":
            pipe = self.load_cogvideox()
            video_frames = pipe(
                prompt=prompt,
                num_frames=num_frames,
                width=width,
                height=height,
                generator=generator,
                num_inference_steps=50,
                guidance_scale=6.0,
            ).frames[0]
        
        elif backend == "animatediff":
            pipe = self.load_animatediff()
            video_frames = pipe(
                prompt=prompt,
                width=width,
                height=height,
                num_frames=num_frames,
                generator=generator,
                num_inference_steps=self.config["animatediff"]["num_inference_steps"],
                guidance_scale=self.config["animatediff"]["guidance_scale"],
            ).frames[0]
        
        else:
            raise ValueError(f"Backend '{backend}' does not support text-to-video. Use 'cogvideox' or 'animatediff'.")
        
        return self._save_video(video_frames, prompt, seed, output_name, backend)

    def generate_video_from_image(
        self,
        image_path: str,
        prompt: str = "",
        backend: str = "stable_video",
        num_frames: int = 25,
        seed: int = -1,
        output_name: Optional[str] = None,
    ) -> str:
        """Generate video from input image"""
        from PIL import Image
        
        pipe = self.load_stable_video()
        
        if seed == -1:
            seed = torch.randint(0, 2**32, (1,)).item()
        
        generator = torch.Generator(device=self.device).manual_seed(seed)
        image = Image.open(image_path).convert("RGB")
        
        video_frames = pipe(
            image,
            num_frames=num_frames,
            motion_bucket_id=self.config["stable_video"]["motion_bucket_id"],
            noise_aug_strength=self.config["stable_video"]["noise_aug_strength"],
            generator=generator,
        ).frames[0]
        
        return self._save_video(video_frames, prompt or "image_to_video", seed, output_name, backend)

    def _save_video(
        self,
        video_frames: list,
        prompt: str,
        seed: int,
        output_name: Optional[str],
        backend: str,
    ) -> str:
        """Save generated video frames to file"""
        import imageio
        from datetime import datetime
        
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        safe_prompt = "".join(c for c in prompt[:30] if c.isalnum() or c in " _-").strip()
        safe_prompt = safe_prompt.replace(" ", "_")
        
        if output_name:
            filename = f"{output_name}.mp4"
        else:
            filename = f"{backend}_{safe_prompt}_{timestamp}_seed{seed}.mp4"
        
        output_path = self.output_dir / filename
        
        fps = self.config["output"]["fps"]
        writer = imageio.get_writer(
            str(output_path),
            fps=fps,
            codec="libx264",
            quality=8,
        )
        
        for frame in video_frames:
            writer.append_data(frame)
        
        writer.close()
        
        print(f"\nVideo saved: {output_path}")
        print(f"Seed used: {seed}")
        print(f"Backend: {backend}")
        
        return str(output_path)

    def generate_website_assets(
        self,
        prompts: list[str],
        style: str = "modern",
        dimensions: list[tuple[int, int]] = None,
    ) -> list[str]:
        """Generate multiple video assets for website use"""
        if dimensions is None:
            dimensions = [
                (480, 480),   # Square - social media
                (640, 360),   # Landscape - hero banner
                (360, 640),   # Portrait - mobile
            ]
        
        generated_files = []
        
        for i, prompt in enumerate(prompts):
            print(f"\nGenerating video {i+1}/{len(prompts)}: {prompt}")
            
            for width, height in dimensions:
                style_prompt = f"{prompt}, {style} style, professional, high quality"
                
                filepath = self.generate_video_from_text(
                    prompt=style_prompt,
                    width=width,
                    height=height,
                    num_frames=49,
                    output_name=f"asset_{i+1}_{width}x{height}",
                )
                generated_files.append(filepath)
        
        return generated_files


def main():
    parser = argparse.ArgumentParser(description="Local Video Generation Tool")
    parser.add_argument("--prompt", "-p", type=str, help="Text prompt for video generation")
    parser.add_argument("--image", "-i", type=str, help="Input image for image-to-video")
    parser.add_argument("--backend", "-b", type=str, choices=["cogvideox", "stable_video", "animatediff"])
    parser.add_argument("--width", "-W", type=int, default=480)
    parser.add_argument("--height", "-H", type=int, default=480)
    parser.add_argument("--frames", "-f", type=int, default=49)
    parser.add_argument("--seed", "-s", type=int, default=-1)
    parser.add_argument("--output", "-o", type=str, help="Output filename")
    parser.add_argument("--config", "-c", type=str, default="config.yaml")
    parser.add_argument("--batch", action="store_true", help="Generate website assets batch")
    parser.add_argument("--ui", action="store_true", help="Launch web UI")
    
    args = parser.parse_args()
    
    generator = VideoGenerator(args.config)
    
    if args.ui:
        from ui import launch_ui
        launch_ui(generator)
        return
    
    if args.batch:
        prompts = [
            "Abstract flowing gradient animation",
            "Modern geometric pattern transition",
            "Dynamic particle effect background",
            "Smooth gradient shift animation",
            "Professional business presentation transition",
        ]
        files = generator.generate_website_assets(prompts)
        print(f"\nGenerated {len(files)} assets!")
        return
    
    if args.image:
        filepath = generator.generate_video_from_image(
            image_path=args.image,
            prompt=args.prompt or "",
            backend=args.backend or "stable_video",
            num_frames=args.frames,
            seed=args.seed,
            output_name=args.output,
        )
    elif args.prompt:
        filepath = generator.generate_video_from_text(
            prompt=args.prompt,
            backend=args.backend,
            width=args.width,
            height=args.height,
            num_frames=args.frames,
            seed=args.seed,
            output_name=args.output,
        )
    else:
        parser.print_help()
        print("\nExample usage:")
        print('  python main.py --prompt "A beautiful sunset over mountains"')
        print('  python main.py --image photo.jpg --prompt "Animate this scene"')
        print('  python main.py --ui  # Launch web interface')
        print('  python main.py --batch  # Generate website assets')
        return
    
    print(f"\nDone! Video saved to: {filepath}")


if __name__ == "__main__":
    main()
