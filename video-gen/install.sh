#!/bin/bash
# Installation script for Local Video Generation Tool

set -e

echo "🎬 Local Video Generation Tool - Installer"
echo "=========================================="
echo ""

# Check Python version
python_version=$(python3 --version 2>&1 | awk '{print $2}')
echo "Python version: $python_version"

# Check for CUDA
if command -v nvidia-smi &> /dev/null; then
    echo "CUDA detected!"
    nvidia-smi --query-gpu=name,memory.total --format=csv,noheader
else
    echo "⚠️  No CUDA detected. CPU mode will be used (slow)."
fi

echo ""

# Create virtual environment
echo "Creating virtual environment..."
python3 -m venv venv
source venv/bin/activate

# Upgrade pip
pip install --upgrade pip

# Install PyTorch with CUDA support
echo ""
echo "Installing PyTorch..."
if command -v nvidia-smi &> /dev/null; then
    pip install torch torchvision --index-url https://download.pytorch.org/whl/cu121
else
    pip install torch torchvision
fi

# Install requirements
echo ""
echo "Installing dependencies..."
pip install -r requirements.txt

# Create output directory
mkdir -p output

echo ""
echo "✅ Installation complete!"
echo ""
echo "To use the tool:"
echo "  1. Activate the virtual environment: source venv/bin/activate"
echo "  2. Generate a video: python main.py --prompt 'A beautiful sunset'"
echo "  3. Or launch the web UI: python main.py --ui"
echo ""
echo "For more options: python main.py --help"
