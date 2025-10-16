export interface ProjectGalleryProps {
    images: string[];
    projectTitle: string;
}

export function ProjectGallery({ images, projectTitle }: ProjectGalleryProps) {
    if (!images || images.length === 0) {
        return null;
    }

    return (
        <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`${projectTitle} - Image ${index + 1}`}
                        className="w-full rounded-lg shadow-lg"
                    />
                ))}
            </div>
        </div>
    );
}

