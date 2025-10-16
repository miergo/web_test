import { ProjectCard } from "~/components/ProjectCard";
import { HeroSection } from "~/components/HeroSection";
import { ContactSection } from "~/components/ContactSection";
import { PortfolioSection } from "~/components/PortfolioSection";
import { getProjectsByCategory } from "~/data/projects";
import { ORDERED_CATEGORIES, CATEGORY_METADATA } from "~/constants/categories";

export function meta() {
  return [
    { title: "Ari - Portfolio" },
    {
      name: "description",
      content: "Creative developer and designer portfolio showcasing Touch Designer, Grasshopper, University Projects, and P5.js work."
    },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />

      {ORDERED_CATEGORIES.map((category, index) => {
        const metadata = CATEGORY_METADATA[category];
        const projects = getProjectsByCategory(category);

        return (
          <PortfolioSection
            key={category}
            id={category}
            title={metadata.title}
            description={metadata.description}
            variant={index % 2 === 0 ? "default" : "alternate"}
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </PortfolioSection>
        );
      })}

      <ContactSection />
    </div>
  );
}
