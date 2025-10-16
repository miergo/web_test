import { Badge } from "./ui/Badge";
import type { Project } from "~/types";

export interface ProjectHeaderProps {
    project: Project;
}

export function ProjectHeader({ project }: ProjectHeaderProps) {
    return (
        <div>
            {/* Category Badge */}
            <div className="mb-10">
                <Badge variant="category">
                    {project.category.toUpperCase()}
                </Badge>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {project.title}
            </h1>

            {/* Description with Collaborators */}
            <div className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                {project.collaborators && project.collaborators.length > 0 && (
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold mb-3">Collaborators</h2>
                        <div className="flex flex-wrap gap-3">
                            {project.collaborators.map((collaborator) => (
                                <Badge
                                    key={collaborator}
                                    variant="primary"
                                    size="lg"
                                >
                                    {collaborator}
                                </Badge>
                            ))}
                        </div>
                    </div>
                )}
                <p>{project.description}</p>
            </div>
        </div>
    );
}

