import { Link } from "react-router";
import { Button } from "./ui/Button";

export interface NotFoundProps {
    title?: string;
    message?: string;
    linkTo?: string;
    linkLabel?: string;
}

export function NotFound({
    title = "Project Not Found",
    message = "The project you're looking for doesn't exist.",
    linkTo = "/",
    linkLabel = "Back to Portfolio"
}: NotFoundProps) {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">{title}</h1>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                    {message}
                </p>
                <Link to={linkTo}>
                    <Button variant="primary">
                        {linkLabel}
                    </Button>
                </Link>
            </div>
        </div>
    );
}

