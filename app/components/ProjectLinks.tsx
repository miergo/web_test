import { Button } from "./ui/Button";

export interface ProjectLinksProps {
    liveDemo?: string;
    github?: string;
}

export function ProjectLinks({ liveDemo, github }: ProjectLinksProps) {
    if (!liveDemo && !github) {
        return null;
    }

    return (
        <div className="flex flex-wrap gap-4 pt-8 border-t border-gray-200 dark:border-gray-800">
            {liveDemo && (
                <Button
                    as="a"
                    href={liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                >
                    View Live Demo
                </Button>
            )}
            {github && (
                <Button
                    as="a"
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                >
                    View on GitHub
                </Button>
            )}
        </div>
    );
}

