import type { ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

interface BaseButtonProps {
    children: ReactNode;
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
    className?: string;
}

type ButtonAsButton = BaseButtonProps &
    ButtonHTMLAttributes<HTMLButtonElement> & {
        as?: "button";
    };

type ButtonAsLink = BaseButtonProps &
    AnchorHTMLAttributes<HTMLAnchorElement> & {
        as: "a";
        href: string;
    };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
    children,
    variant = "primary",
    size = "md",
    className = "",
    as = "button",
    ...props
}: ButtonProps) {
    const baseClasses = "inline-flex items-center justify-center rounded-lg font-medium transition-colors";

    const variantClasses = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400",
        ghost: "text-blue-600 dark:text-blue-400 hover:underline",
    };

    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    if (as === "a") {
        const { as: _, ...linkProps } = props as ButtonAsLink;
        return (
            <a className={classes} {...linkProps}>
                {children}
            </a>
        );
    }

    const { as: _, ...buttonProps } = props as ButtonAsButton;
    return (
        <button className={classes} {...buttonProps}>
            {children}
        </button>
    );
}

