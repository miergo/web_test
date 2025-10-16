import { Link } from "react-router";
import { Badge } from "./ui/Badge";
import { MediaDisplay } from "./ui/MediaDisplay";
import type { Project } from "~/types";

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Link
            to={`/project/${project.id}`}
            className="group block bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
        >
            {/* Thumbnail */}
            <div className="bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <MediaDisplay
                    src={project.thumbnail}
                    alt={project.title}
                    autoPlay
                    loop
                    muted
                    className="group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Content */}
            <div className="p-4">
                {/* Category badge */}
                <div className="mb-2">
                    <Badge variant="category" size="sm">
                        {project.category.toUpperCase()}
                    </Badge>
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
                    {project.technologies.slice(0, 3).map((tech: string) => (
                        <Badge key={tech} variant="secondary" size="sm">
                            {tech}
                        </Badge>
                    ))}
                </div>
            </div>
        </Link>
    );
}

