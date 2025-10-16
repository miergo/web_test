import type { ReactNode } from "react";

export interface SectionProps {
    children: ReactNode;
    id?: string;
    className?: string;
    variant?: "default" | "alternate";
}

export function Section({
    children,
    id,
    className = "",
    variant = "default"
}: SectionProps) {
    const variantClasses = {
        default: "bg-white dark:bg-gray-950",
        alternate: "bg-gray-50 dark:bg-gray-900",
    };

    return (
        <section
            id={id}
            className={`py-20 px-4 md:px-8 ${variantClasses[variant]} ${className}`}
        >
            {children}
        </section>
    );
}

export interface SectionHeaderProps {
    title: string;
    description?: string;
    className?: string;
}

export function SectionHeader({
    title,
    description,
    className = ""
}: SectionHeaderProps) {
    return (
        <div className={`mb-12 ${className}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
            {description && (
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                    {description}
                </p>
            )}
        </div>
    );
}

export interface SectionContainerProps {
    children: ReactNode;
    className?: string;
}

export function SectionContainer({
    children,
    className = ""
}: SectionContainerProps) {
    return (
        <div className={`max-w-7xl mx-auto ${className}`}>
            {children}
        </div>
    );
}

