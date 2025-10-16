import type { ReactNode } from "react";
import { Section, SectionContainer, SectionHeader } from "./ui/Section";

export interface PortfolioSectionProps {
    id: string;
    title: string;
    description: string;
    children: ReactNode;
    variant?: "default" | "alternate";
}

export function PortfolioSection({
    id,
    title,
    description,
    children,
    variant = "default"
}: PortfolioSectionProps) {
    return (
        <Section id={id} variant={variant}>
            <SectionContainer>
                <SectionHeader title={title} description={description} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {children}
                </div>
            </SectionContainer>
        </Section>
    );
}

