"""
Web UI for Video Generation Tool
Gradio-based interface for easy video creation
"""

import gradio as gr
from main import VideoGenerator


generator = VideoGenerator()


def generate_from_text(
    prompt: str,
    backend: str,
    width: int,
    height: int,
    num_frames: int,
    seed: int,
):
    """Generate video from text"""
    try:
        filepath = generator.generate_video_from_text(
            prompt=prompt,
            backend=backend,
            width=width,
            height=height,
            num_frames=num_frames,
            seed=seed,
        )
        return filepath, f"Generated with seed: {seed}"
    except Exception as e:
        return None, f"Error: {str(e)}"


def generate_from_image(
    image,
    prompt: str,
    num_frames: int,
    seed: int,
):
    """Generate video from image"""
    if image is None:
        return None, "Please upload an image"
    
    try:
        import tempfile
        import os
        from PIL import Image
        
        temp_path = os.path.join(tempfile.gettempdir(), "temp_input.png")
        image.save(temp_path)
        
        filepath = generator.generate_video_from_image(
            image_path=temp_path,
            prompt=prompt,
            num_frames=num_frames,
            seed=seed,
        )
        
        os.remove(temp_path)
        return filepath, f"Generated with seed: {seed}"
    except Exception as e:
        return None, f"Error: {str(e)}"


def generate_website_batch(
    prompts_text: str,
    style: str,
):
    """Generate batch of website assets"""
    try:
        prompts = [p.strip() for p in prompts_text.split("\n") if p.strip()]
        
        if not prompts:
            return "Please enter at least one prompt"
        
        files = generator.generate_website_assets(
            prompts=prompts,
            style=style,
        )
        
        result = f"Generated {len(files)} videos:\n\n"
        for f in files:
            result += f"- {f}\n"
        
        return result
    except Exception as e:
        return f"Error: {str(e)}"


def create_ui():
    """Create Gradio UI"""
    
    with gr.Blocks(title="Video Generation Tool", theme=gr.themes.Soft()) as app:
        gr.Markdown("""
        # 🎬 Local Video Generation Tool
        Generate unlimited videos locally using open-source AI models.
        Perfect for creating website assets!
        """)
        
        with gr.Tabs():
            with gr.TabItem("📝 Text to Video"):
                with gr.Row():
                    with gr.Column():
                        text_prompt = gr.Textbox(
                            label="Prompt",
                            placeholder="Describe the video you want to generate...",
                            lines=3,
                        )
                        
                        text_backend = gr.Radio(
                            choices=["cogvideox", "animatediff"],
                            value="cogvideox",
                            label="Backend",
                        )
                        
                        with gr.Row():
                            text_width = gr.Slider(256, 1024, value=480, step=64, label="Width")
                            text_height = gr.Slider(256, 1024, value=480, step=64, label="Height")
                        
                        with gr.Row():
                            text_frames = gr.Slider(16, 97, value=49, step=1, label="Frames")
                            text_seed = gr.Number(value=-1, label="Seed (-1 for random)")
                        
                        text_btn = gr.Button("Generate Video", variant="primary")
                    
                    with gr.Column():
                        text_output = gr.Video(label="Generated Video")
                        text_status = gr.Textbox(label="Status")
                
                text_btn.click(
                    generate_from_text,
                    inputs=[text_prompt, text_backend, text_width, text_height, text_frames, text_seed],
                    outputs=[text_output, text_status],
                )
            
            with gr.TabItem("🖼️ Image to Video"):
                with gr.Row():
                    with gr.Column():
                        img_input = gr.Image(label="Input Image", type="pil")
                        
                        img_prompt = gr.Textbox(
                            label="Optional Prompt",
                            placeholder="Describe the animation...",
                        )
                        
                        with gr.Row():
                            img_frames = gr.Slider(16, 97, value=25, step=1, label="Frames")
                            img_seed = gr.Number(value=-1, label="Seed (-1 for random)")
                        
                        img_btn = gr.Button("Generate Video", variant="primary")
                    
                    with gr.Column():
                        img_output = gr.Video(label="Generated Video")
                        img_status = gr.Textbox(label="Status")
                
                img_btn.click(
                    generate_from_image,
                    inputs=[img_input, img_prompt, img_frames, img_seed],
                    outputs=[img_output, img_status],
                )
            
            with gr.TabItem("🎨 Batch Generator"):
                gr.Markdown("""
                Generate multiple video assets for your website.
                Enter one prompt per line.
                """)
                
                batch_prompts = gr.Textbox(
                    label="Prompts (one per line)",
                    placeholder="Abstract gradient animation\nModern particle effect\nSmooth transition",
                    lines=5,
                )
                
                batch_style = gr.Dropdown(
                    choices=["modern", "minimal", "professional", "creative", "corporate"],
                    value="modern",
                    label="Style",
                )
                
                batch_btn = gr.Button("Generate Batch", variant="primary")
                batch_output = gr.Textbox(label="Results", lines=10)
                
                batch_btn.click(
                    generate_website_batch,
                    inputs=[batch_prompts, batch_style],
                    outputs=[batch_output],
                )
            
            with gr.TabItem("⚙️ Settings"):
                gr.Markdown("### Current Configuration")
                
                with gr.Row():
                    gr.Markdown(f"""
                    **Device:** {generator.device}
                    **Output Directory:** {generator.output_dir}
                    **Default Backend:** {generator.config['backend']}
                    """)
                
                gr.Markdown("""
                ### Available Backends
                
                | Backend | Type | Quality | Speed |
                |---------|------|---------|-------|
                | cogvideox | Text-to-Video | ⭐⭐⭐⭐⭐ | Medium |
                | animatediff | Text-to-Video | ⭐⭐⭐⭐ | Fast |
                | stable_video | Image-to-Video | ⭐⭐⭐⭐⭐ | Fast |
                
                ### Tips for Best Results
                
                - Use detailed, descriptive prompts
                - Specify the style (e.g., "cinematic", "animation", "realistic")
                - For website assets, keep videos short (2-5 seconds)
                - Use seeds to reproduce specific results
                """)
    
    return app


def launch_ui(generator_instance=None):
    """Launch the web UI"""
    global generator
    if generator_instance:
        generator = generator_instance
    
    app = create_ui()
    app.launch(share=False, server_name="0.0.0.0", server_port=7860)


if __name__ == "__main__":
    launch_ui()
