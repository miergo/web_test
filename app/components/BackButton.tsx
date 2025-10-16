import { Link } from "react-router";
import { Icon } from "./ui/Icon";

export interface BackButtonProps {
    to: string;
    label?: string;
}

export function BackButton({ to, label = "Back to Portfolio" }: BackButtonProps) {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <Link
                to={to}
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
            >
                <Icon name="arrow-left" className="mr-2" />
                {label}
            </Link>
        </div>
    );
}

