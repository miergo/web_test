import { Link } from "react-router";
import type { Project } from "../data/projects";

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    // Check if thumbnail is a video file
    const isVideo = project.thumbnail.match(/\.(mp4|webm|ogg)$/i);

    return (
        <Link
            to={`/project/${project.id}`}
            className="group block bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
        >
            {/* Thumbnail */}
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 overflow-hidden">
                {isVideo ? (
                    <video
                        src={project.thumbnail}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                ) : (
                    <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                )}
            </div>

            {/* Content */}
            <div className="p-4">
                {/* Category badge */}
                <div className="mb-2">
                    <span className="inline-block px-2 py-1 text-xs font-semibold rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        {project.category.toUpperCase()}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                        <span
                            key={tech}
                            className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
}

