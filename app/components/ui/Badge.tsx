import type { ReactNode } from "react";

export interface BadgeProps {
    children: ReactNode;
    variant?: "primary" | "secondary" | "category";
    size?: "sm" | "md" | "lg";
    className?: string;
}

export function Badge({
    children,
    variant = "secondary",
    size = "md",
    className = ""
}: BadgeProps) {
    const baseClasses = "inline-block font-semibold rounded";

    const variantClasses = {
        primary: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
        secondary: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
        category: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    };

    const sizeClasses = {
        sm: "px-2 py-1 text-xs",
        md: "px-3 py-1 text-sm",
        lg: "px-4 py-2 text-base",
    };

    return (
        <span
            className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        >
            {children}
        </span>
    );
}

