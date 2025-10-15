#!/usr/bin/env python3
"""
Video Compression Script
Compresses videos to under 100MB while maintaining quality using ffmpeg.
Uses two-pass encoding for optimal quality at target bitrate.

Requirements:
    pip install imageio-ffmpeg
"""

import subprocess
import sys
import os
import json
import re
from pathlib import Path

# Try to use imageio-ffmpeg which bundles ffmpeg binaries
try:
    import imageio_ffmpeg
    FFMPEG_PATH = imageio_ffmpeg.get_ffmpeg_exe()
    FFPROBE_PATH = FFMPEG_PATH.replace('ffmpeg', 'ffprobe')
except ImportError:
    # Fall back to system ffmpeg
    FFMPEG_PATH = 'ffmpeg'
    FFPROBE_PATH = 'ffprobe'



def get_video_duration(input_file):
    """Get video duration in seconds using ffprobe or ffmpeg."""
    # Try ffprobe first (more accurate)
    cmd_probe = [
        FFPROBE_PATH,
        '-v', 'error',
        '-show_entries', 'format=duration',
        '-of', 'json',
        input_file
    ]
    
    try:
        result = subprocess.run(cmd_probe, capture_output=True, text=True, check=True)
        data = json.loads(result.stdout)
        duration = float(data['format']['duration'])
        return duration
    except (subprocess.CalledProcessError, FileNotFoundError):
        # Fall back to ffmpeg
        cmd_ffmpeg = [
            FFMPEG_PATH,
            '-i', input_file,
            '-f', 'null',
            '-'
        ]
        try:
            result = subprocess.run(cmd_ffmpeg, capture_output=True, text=True)
            # Parse duration from stderr
            match = re.search(r'Duration: (\d{2}):(\d{2}):(\d{2}\.\d{2})', result.stderr)
            if match:
                hours, minutes, seconds = match.groups()
                duration = int(hours) * 3600 + int(minutes) * 60 + float(seconds)
                return duration
            else:
                raise ValueError("Could not parse duration from ffmpeg output")
        except Exception as e:
            print(f"Error getting video duration: {e}")
            sys.exit(1)


def calculate_target_bitrate(duration, target_size_mb=100):
    """
    Calculate target bitrate to achieve desired file size.
    
    Args:
        duration: Video duration in seconds
        target_size_mb: Target file size in MB (default: 100)
    
    Returns:
        Target video bitrate in kbps
    """
    # Convert MB to bits
    target_size_bits = target_size_mb * 8 * 1024 * 1024
    
    # Reserve space for audio (128 kbps)
    audio_bitrate_kbps = 128
    audio_size_bits = audio_bitrate_kbps * 1024 * duration
    
    # Calculate video bitrate
    video_size_bits = target_size_bits - audio_size_bits
    video_bitrate_kbps = int(video_size_bits / duration / 1024)
    
    # Add 5% safety margin to stay under target
    video_bitrate_kbps = int(video_bitrate_kbps * 0.95)
    
    return max(video_bitrate_kbps, 500)  # Minimum 500 kbps


def compress_video(input_file, output_file=None, target_size_mb=100):
    """
    Compress video using two-pass encoding.
    
    Args:
        input_file: Path to input video file
        output_file: Path to output file (optional)
        target_size_mb: Target file size in MB (default: 100)
    """
    input_path = Path(input_file)
    
    if not input_path.exists():
        print(f"Error: Input file '{input_file}' not found!")
        sys.exit(1)
    
    # Generate output filename if not provided
    if output_file is None:
        # Convert GIFs to MP4 for better compression
        if input_path.suffix.lower() == '.gif':
            output_file = input_path.stem + '_compressed.mp4'
        else:
            output_file = input_path.stem + '_compressed' + input_path.suffix
    
    output_path = Path(output_file)
    
    print(f"Analyzing video: {input_file}")
    duration = get_video_duration(str(input_path))
    print(f"Duration: {duration:.2f} seconds ({duration/60:.2f} minutes)")
    
    # Calculate target bitrate
    video_bitrate = calculate_target_bitrate(duration, target_size_mb)
    print(f"Target video bitrate: {video_bitrate} kbps")
    print(f"Target file size: ~{target_size_mb} MB")
    
    # Two-pass encoding for better quality
    log_file = "ffmpeg2pass"
    
    # First pass
    print("\n[1/2] Running first pass...")
    cmd_pass1 = [
        FFMPEG_PATH,
        '-i', str(input_path),
        '-c:v', 'libx264',
        '-preset', 'slow',  # Slower preset = better quality
        '-b:v', f'{video_bitrate}k',
        '-pass', '1',
        '-passlogfile', log_file,
        '-an',  # No audio in first pass
        '-f', 'null',
        '-y',
        'NUL' if sys.platform == 'win32' else '/dev/null'
    ]
    
    try:
        subprocess.run(cmd_pass1, check=True)
    except subprocess.CalledProcessError as e:
        print(f"Error during first pass: {e}")
        cleanup_pass_files(log_file)
        sys.exit(1)
    
    # Second pass
    print("[2/2] Running second pass...")
    cmd_pass2 = [
        FFMPEG_PATH,
        '-i', str(input_path),
        '-c:v', 'libx264',
        '-preset', 'slow',
        '-b:v', f'{video_bitrate}k',
        '-pass', '2',
        '-passlogfile', log_file,
        '-c:a', 'aac',
        '-b:a', '128k',
        '-movflags', '+faststart',  # Optimize for web streaming
        '-y',
        str(output_path)
    ]
    
    try:
        subprocess.run(cmd_pass2, check=True)
        print(f"\n✓ Compression complete!")
        print(f"Output file: {output_path}")
        
        # Display file sizes
        input_size = input_path.stat().st_size / (1024 * 1024)
        output_size = output_path.stat().st_size / (1024 * 1024)
        compression_ratio = (1 - output_size / input_size) * 100
        
        print(f"\nOriginal size: {input_size:.2f} MB")
        print(f"Compressed size: {output_size:.2f} MB")
        print(f"Compression: {compression_ratio:.1f}%")
        
    except subprocess.CalledProcessError as e:
        print(f"Error during second pass: {e}")
        sys.exit(1)
    finally:
        cleanup_pass_files(log_file)


def cleanup_pass_files(log_file):
    """Clean up temporary pass log files."""
    for file in Path('.').glob(f'{log_file}*'):
        try:
            file.unlink()
        except:
            pass


def main():
    if len(sys.argv) < 2:
        print("Usage: python compress_video.py <input_file> [output_file] [target_size_mb]")
        print("\nExamples:")
        print("  python compress_video.py video.mp4")
        print("  python compress_video.py video.mp4 compressed.mp4")
        print("  python compress_video.py video.mp4 compressed.mp4 50")
        sys.exit(1)
    
    input_file = sys.argv[1]
    output_file = sys.argv[2] if len(sys.argv) > 2 else None
    target_size_mb = int(sys.argv[3]) if len(sys.argv) > 3 else 100
    
    # Check if ffmpeg is available
    try:
        subprocess.run([FFMPEG_PATH, '-version'], 
                      capture_output=True, check=True)
    except (subprocess.CalledProcessError, FileNotFoundError):
        print("Error: ffmpeg is not installed!")
        print("\nPlease install via pip:")
        print("  pip install imageio-ffmpeg")
        print("\nOr install system ffmpeg from: https://ffmpeg.org/download.html")
        sys.exit(1)
    
    compress_video(input_file, output_file, target_size_mb)


if __name__ == '__main__':
    # Check if ffmpeg is available first
    try:
        subprocess.run([FFMPEG_PATH, '-version'], 
                      capture_output=True, check=True)
    except (subprocess.CalledProcessError, FileNotFoundError):
        print("Error: ffmpeg is not installed!")
        print("\nPlease install via pip:")
        print("  pip install imageio-ffmpeg")
        print("\nOr install system ffmpeg from: https://ffmpeg.org/download.html")
        sys.exit(1)
    
    # Automatically compress all videos in public/touchdesigner directory,
    # replacing the original file with the compressed version
    
    video_dir = Path("public/touchdesigner")
    if not video_dir.exists() or not video_dir.is_dir():
        print(f"Directory {video_dir} does not exist.")
        sys.exit(1)

    for video_file in video_dir.glob("*"):
        # only process video files (common extensions)
        if video_file.suffix.lower() not in [".mp4", ".mov", ".avi", ".mkv", ".webm", ".gif"]:
            continue
        
        # Check file size - skip if less than 100MB
        file_size_mb = video_file.stat().st_size / (1024 * 1024)
        if file_size_mb < 100:
            print(f"\nSkipping {video_file.name} ({file_size_mb:.2f} MB) - already under 100MB")
            continue
        
        print(f"\nFile {video_file.name} is {file_size_mb:.2f} MB - needs compression")
        
        # Convert GIFs to MP4 for better compression
        if video_file.suffix.lower() in ['.gif', '.mov', '.avi', '.mkv', '.webm']:
            output_temp = video_file.parent / f"{video_file.stem}_tempcompressed.mp4"
            final_output = video_file.parent / f"{video_file.stem}.mp4"
        else:
            output_temp = video_file.parent / (video_file.stem + "_tempcompressed" + video_file.suffix)
            final_output = video_file
        
        print(f"Compressing: {video_file} -> {output_temp}")
        if video_file.suffix.lower() in ['.gif', '.mov', '.avi', '.mkv', '.webm']:
            print(f"Note: Converting GIF to MP4 for better compression")
        
        try:
            compress_video(str(video_file), str(output_temp), 100)
            
            # Replace original file with compressed version
            if video_file.suffix.lower() == '.gif':
                # Delete the original GIF and rename MP4
                video_file.unlink()
                output_temp.rename(final_output)
                print(f"Converted {video_file.name} to {final_output.name}")
            else:
                output_temp.replace(video_file)
                print(f"Replaced {video_file} with compressed version.")
        except Exception as e:
            print(f"Failed to compress {video_file}: {e}")
            if output_temp.exists():
                output_temp.unlink()

