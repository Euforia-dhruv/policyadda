"""
Utility functions for video processing and asset generation
"""

import os
from pathlib import Path
from typing import Optional


def get_optimal_settings(backend: str, gpu_memory: int) -> dict:
    """Get optimal generation settings based on GPU memory"""
    
    if gpu_memory >= 24:  # RTX 3090, 4090
        return {
            "cogvideox": {"width": 720, "height": 480, "frames": 49},
            "animatediff": {"width": 512, "height": 512, "frames": 49},
            "stable_video": {"frames": 25},
        }.get(backend, {"width": 480, "height": 480, "frames": 49})
    
    elif gpu_memory >= 12:  # RTX 3060, 4070
        return {
            "cogvideox": {"width": 480, "height": 480, "frames": 49},
            "animatediff": {"width": 480, "height": 480, "frames": 32},
            "stable_video": {"frames": 14},
        }.get(backend, {"width": 480, "height": 480, "frames": 32})
    
    else:  # Less than 12GB
        return {
            "cogvideox": {"width": 320, "height": 320, "frames": 25},
            "animatediff": {"width": 384, "height": 384, "frames": 16},
            "stable_video": {"frames": 8},
        }.get(backend, {"width": 320, "height": 320, "frames": 16})


def create_website_asset_variants(
    video_path: str,
    output_dir: str,
    sizes: Optional[list] = None,
) -> list[str]:
    """Create multiple size variants of a video for responsive websites"""
    import cv2
    
    if sizes is None:
        sizes = [
            (1920, 1080),  # Desktop hero
            (1280, 720),   # Tablet
            (640, 360),    # Mobile
            (480, 480),    # Social square
        ]
    
    cap = cv2.VideoCapture(video_path)
    fps = cap.get(cv2.CAP_PROP_FPS)
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    
    # Read all frames
    frames = []
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        frames.append(frame)
    cap.release()
    
    variants = []
    video_name = Path(video_path).stem
    
    for width, height in sizes:
        output_path = Path(output_dir) / f"{video_name}_{width}x{height}.mp4"
        
        fourcc = cv2.VideoWriter_fourcc(*"mp4v")
        writer = cv2.VideoWriter(str(output_path), fourcc, fps, (width, height))
        
        for frame in frames:
            resized = cv2.resize(frame, (width, height))
            writer.write(resized)
        
        writer.release()
        variants.append(str(output_path))
    
    return variants


def generate_video_thumbnail(video_path: str, output_path: Optional[str] = None) -> str:
    """Generate thumbnail from video"""
    import cv2
    
    if output_path is None:
        output_path = str(Path(video_path).with_suffix(".jpg"))
    
    cap = cv2.VideoCapture(video_path)
    cap.set(cv2.CAP_PROP_POS_FRAMES, 0)
    ret, frame = cap.read()
    cap.release()
    
    if ret:
        cv2.imwrite(output_path, frame)
    
    return output_path


def get_video_info(video_path: str) -> dict:
    """Get video metadata"""
    import cv2
    
    cap = cv2.VideoCapture(video_path)
    
    info = {
        "width": int(cap.get(cv2.CAP_PROP_FRAME_WIDTH)),
        "height": int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT)),
        "fps": cap.get(cv2.CAP_PROP_FPS),
        "total_frames": int(cap.get(cv2.CAP_PROP_FRAME_COUNT)),
        "duration_seconds": cap.get(cv2.CAP_PROP_FRAME_COUNT) / cap.get(cv2.CAP_PROP_FPS),
        "file_size_mb": os.path.getsize(video_path) / (1024 * 1024),
    }
    
    cap.release()
    return info
