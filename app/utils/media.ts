/**
 * Media utility functions for detecting and validating media types
 */

const VIDEO_EXTENSIONS = /\.(mp4|webm|ogg|mov)$/i;
const IMAGE_EXTENSIONS = /\.(jpg|jpeg|png|gif|webp|svg)$/i;

/**
 * Check if a file path is a video file
 */
export function isVideoFile(path: string): boolean {
    return VIDEO_EXTENSIONS.test(path);
}

/**
 * Check if a file path is an image file
 */
export function isImageFile(path: string): boolean {
    return IMAGE_EXTENSIONS.test(path);
}

/**
 * Get media type from file path
 */
export function getMediaType(path: string): "video" | "image" | "unknown" {
    if (isVideoFile(path)) return "video";
    if (isImageFile(path)) return "image";
    return "unknown";
}

/**
 * Check if a path should use a poster image for video
 */
export function shouldUsePoster(videoPath: string, posterPath?: string): string | undefined {
    if (!posterPath) return undefined;
    // Don't use poster if poster is also a video
    if (isVideoFile(posterPath)) return undefined;
    return posterPath;
}

