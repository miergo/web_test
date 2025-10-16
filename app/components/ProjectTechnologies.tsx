import { Badge } from "./ui/Badge";

export interface ProjectTechnologiesProps {
    technologies: string[];
}

export function ProjectTechnologies({ technologies }: ProjectTechnologiesProps) {
    return (
        <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" size="lg">
                        {tech}
                    </Badge>
                ))}
            </div>
        </div>
    );
}

