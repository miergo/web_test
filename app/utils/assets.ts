/**
 * Helper function to get the correct asset path with the base URL
 * This handles the base path configuration in vite.config.ts
 */
export function getAssetPath(path: string): string {
    // Remove leading slash if present to avoid double slashes
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    // In production or dev, BASE_URL is set from vite.config.ts
    return `${import.meta.env.BASE_URL}${cleanPath}`;
}

