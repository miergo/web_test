import { useParams } from "react-router";
import { getProjectById } from "~/data/projects";
import { NotFound } from "~/components/NotFound";
import { BackButton } from "~/components/BackButton";
import { MediaDisplay } from "~/components/ui/MediaDisplay";
import { ProjectHeader } from "~/components/ProjectHeader";
import { ProjectTechnologies } from "~/components/ProjectTechnologies";
import { ProjectGallery } from "~/components/ProjectGallery";
import { ProjectLinks } from "~/components/ProjectLinks";
import { shouldUsePoster } from "~/utils/media";

export function meta({ params }: { params: { id: string } }) {
    const project = getProjectById(params.id);
    return [
        {
            title: project ? `${project.title} - Your Name` : "Project Not Found"
        },
        { name: "description", content: project?.description || "Project details" },
    ];
}

export default function ProjectDetail() {
    const params = useParams();
    const project = getProjectById(params.id || "");

    if (!project) {
        return <NotFound />;
    }

    // Determine which media to show in hero section
    const heroMedia = project.videoUrl || project.thumbnail;
    const isHeroVideo = !!project.videoUrl;

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <BackButton to="/" />

            {/* Hero Media Section */}
            <div className="w-full bg-gray-200 dark:bg-gray-800">
                <div className="max-w-6xl mx-auto">
                    <MediaDisplay
                        src={heroMedia}
                        alt={project.title}
                        autoPlay={!isHeroVideo}
                        loop={!isHeroVideo}
                        muted={!isHeroVideo}
                        controls={isHeroVideo}
                        poster={shouldUsePoster(heroMedia, project.thumbnail)}
                    />
                </div>
            </div>

            {/* Project Details */}
            <div className="max-w-4xl mx-auto px-4 py-16">
                <ProjectHeader project={project} />

                <ProjectTechnologies technologies={project.technologies} />

                {/* Detailed Description */}
                <div className="prose dark:prose-invert max-w-none mb-12">
                    <h2 className="text-2xl font-semibold mb-4">About This Project</h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {project.detailedDescription}
                    </p>
                </div>

                <ProjectGallery images={project.images || []} projectTitle={project.title} />

                <ProjectLinks liveDemo={project.liveDemo} github={project.github} />
            </div>
        </div>
    );
}

