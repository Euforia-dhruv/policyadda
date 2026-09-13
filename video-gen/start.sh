#!/bin/bash
# Quick Start Script for Video Generation Tool

echo "🚀 Quick Start: Local Video Generation"
echo "======================================="
echo ""

# Check if venv exists
if [ ! -d "venv" ]; then
    echo "Virtual environment not found. Running installer..."
    bash install.sh
fi

# Activate virtual environment
source venv/bin/activate

echo ""
echo "Choose an option:"
echo "1) Generate a single video from text"
echo "2) Generate video from image"
echo "3) Launch web UI"
echo "4) Generate website assets batch"
echo "5) View help"
echo ""
read -p "Enter your choice (1-5): " choice

case $choice in
    1)
        read -p "Enter your prompt: " prompt
        read -p "Backend (cogvideox/animatediff) [cogvideox]: " backend
        backend=${backend:-cogvideox}
        python main.py --prompt "$prompt" --backend $backend
        ;;
    2)
        read -p "Enter image path: " image
        read -p "Optional prompt: " prompt
        python main.py --image "$image" --prompt "$prompt"
        ;;
    3)
        python main.py --ui
        ;;
    4)
        python main.py --batch
        ;;
    *)
        python main.py --help
        ;;
esac
