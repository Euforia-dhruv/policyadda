# 🎬 Local Video Generation Tool

A Higgsfield-like local video generation tool with unlimited usage. Generate videos for website assets using open-source AI models from GitHub.

## Features

- **Unlimited Generation**: No API limits, run as many times as you want
- **Multiple Backends**: 
  - **CogVideoX**: High-quality text-to-video (recommended)
  - **AnimateDiff**: Fast text-to-video animation
  - **Stable Video Diffusion**: Image-to-video
- **Web UI**: Easy-to-use Gradio interface
- **Batch Generation**: Create multiple assets at once
- **Responsive Variants**: Auto-generate different sizes for websites

## Requirements

- Python 3.10+
- NVIDIA GPU with 8GB+ VRAM (recommended)
- 16GB+ RAM
- 50GB+ disk space for models

## Installation

```bash
# Clone or download this folder
cd video-gen

# Run installer
bash install.sh

# Activate environment
source venv/bin/activate
```

## Usage

### Command Line

```bash
# Generate video from text
python main.py --prompt "A beautiful sunset over mountains"

# Generate from image
python main.py --image photo.jpg --prompt "Animate this scene"

# Launch web UI
python main.py --ui

# Generate website assets batch
python main.py --batch
```

### Web UI

```bash
python main.py --ui
```

Then open http://localhost:7860 in your browser.

### Options

```
--prompt, -p     Text prompt for video generation
--image, -i      Input image for image-to-video
--backend, -b    Backend: cogvideox, stable_video, animatediff
--width, -W      Video width (default: 480)
--height, -H     Video height (default: 480)
--frames, -f     Number of frames (default: 49)
--seed, -s       Random seed (-1 for random)
--output, -o     Output filename
--config, -c     Config file path
--batch          Generate website assets batch
--ui             Launch web interface
```

## Configuration

Edit `config.yaml` to customize:

```yaml
backend: cogvideox  # Default backend

output:
  directory: ./output
  format: mp4
  fps: 8

generation:
  width: 480
  height: 480
  num_frames: 49
```

## Website Asset Generation

Use the batch mode to generate multiple assets:

```python
from main import VideoGenerator

gen = VideoGenerator()

prompts = [
    "Abstract flowing gradient animation",
    "Modern geometric pattern transition",
    "Dynamic particle effect background",
]

files = gen.generate_website_assets(
    prompts=prompts,
    style="modern",
    dimensions=[(480, 480), (640, 360)],
)
```

## GPU Requirements

| Backend | Minimum VRAM | Recommended VRAM |
|---------|--------------|------------------|
| CogVideoX | 8GB | 16GB+ |
| AnimateDiff | 6GB | 12GB+ |
| Stable Video | 6GB | 12GB+ |

## Tips

1. **Use detailed prompts**: "A cinematic sunset over mountains with golden light"
2. **Specify style**: Add "cinematic", "animation", "realistic" to prompts
3. **Use seeds**: Save seeds to reproduce good results
4. **Start small**: Begin with 320x320 or 480x480 for faster testing

## Troubleshooting

### Out of Memory
- Reduce resolution: `--width 320 --height 320`
- Reduce frames: `--frames 16`
- Use CPU offloading (automatically enabled)

### Slow Generation
- Use a GPU with more VRAM
- Reduce number of frames
- Use AnimateDiff backend (faster)

### Model Download Issues
- Check internet connection
- Models are cached in `~/.cache/huggingface/`
- Use `huggingface-cli login` for gated models

## Model Sources

- [CogVideoX](https://github.com/THUDM/CogVideo) - Tsinghua University
- [AnimateDiff](https://github.com/guoyww/AnimateDiff) - Community
- [Stable Video Diffusion](https://github.com/Stability-AI/generative-models) - Stability AI

## License

This tool uses open-source models. Check each model's license for usage terms.
