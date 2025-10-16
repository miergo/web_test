import { isVideoFile } from "~/utils/media";

export interface MediaDisplayProps {
    src: string;
    alt: string;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    controls?: boolean;
    poster?: string;
    className?: string;
    aspectRatio?: "video" | "square" | "wide" | "portrait";
}

export function MediaDisplay({
    src,
    alt,
    autoPlay = false,
    loop = false,
    muted = false,
    controls = false,
    poster,
    className = "",
    aspectRatio = "video"
}: MediaDisplayProps) {
    const isVideo = isVideoFile(src);

    const aspectClasses = {
        video: "aspect-video",
        square: "aspect-square",
        wide: "aspect-[21/9]",
        portrait: "aspect-[9/16]",
    };

    const containerClass = `${aspectClasses[aspectRatio]} ${className}`;

    if (isVideo) {
        return (
            <div className={containerClass}>
                <video
                    src={src}
                    autoPlay={autoPlay}
                    loop={loop}
                    muted={muted}
                    controls={controls}
                    playsInline
                    poster={poster}
                    className="w-full h-full object-cover"
                >
                    Your browser does not support the video tag.
                </video>
            </div>
        );
    }

    return (
        <div className={containerClass}>
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
            />
        </div>
    );
}

