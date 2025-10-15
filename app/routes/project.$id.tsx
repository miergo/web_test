import { useParams, Link } from "react-router";
import { getProjectById } from "../data/projects";

export function meta({ params }: { params: { id: string } }) {
    const project = getProjectById(params.id);
    return [
        {
            title: project ? `${project.title} - Arindam Katoch` : "Project Not Found"
        },
        { name: "description", content: project?.description || "Project details" },
    ];
}

export default function ProjectDetail() {
    const params = useParams();
    const project = getProjectById(params.id || "");

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center px-4">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                        The project you're looking for doesn't exist.
                    </p>
                    <Link
                        to="/"
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-block"
                    >
                        Back to Portfolio
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            {/* Back Button */}
            <div className="max-w-6xl mx-auto px-4 py-8">
                <Link
                    to="/"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
                >
                    <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                    Back to Portfolio
                </Link>
            </div>

            {/* Hero Image/Video Section */}
            <div className="w-full bg-gray-200 dark:bg-gray-800">
                <div className="max-w-6xl mx-auto">
                    {project.videoUrl ? (
                        <div className="aspect-video">
                            <video
                                src={project.videoUrl}
                                controls
                                className="w-full h-full object-cover"
                                poster={project.thumbnail.match(/\.(mp4|webm|ogg|mov)$/i) ? undefined : project.thumbnail}
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    ) : project.thumbnail.match(/\.(mp4|webm|ogg|mov)$/i) ? (
                        <div className="aspect-video">
                            <video
                                src={project.thumbnail}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    ) : (
                        <div className="aspect-video">
                            <img
                                src={project.thumbnail}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}
                </div>
            </div>

            {/* Project Details */}
            <div className="max-w-4xl mx-auto px-4 py-16">
                {/* Category Badge */}
                <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-sm font-semibold rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        {project.category.toUpperCase()}
                    </span>
                </div>


                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>

                {/* Description */}
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                    {/* Collaborators - Add after technologies section */}
                    {project.collaborators && project.collaborators.length > 0 && (
                        <div className="mb-12">
                            <h2 className=" text-lg font-semibold mb-1">Collaborators</h2>
                            <div className="flex flex-wrap gap-3">
                                {project.collaborators.map((collaborator) => (
                                    <span
                                        key={collaborator}
                                        className="text-base px-2 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-lg "
                                    >
                                        {collaborator}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-12">
                    <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>

                    <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Detailed Description */}
                <div className="prose dark:prose-invert max-w-none mb-12">
                    <h2 className="text-2xl font-semibold mb-4">About This Project</h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {project.detailedDescription}
                    </p>
                </div>

                {/* Additional Images */}
                {project.images && project.images.length > 0 && (
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold mb-6">Gallery</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {project.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`${project.title} - Image ${index + 1} `}
                                    className="w-full rounded-lg shadow-lg"
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Links Section */}
                <div className="flex flex-wrap gap-4 pt-8 border-t border-gray-200 dark:border-gray-800">
                    {project.liveDemo && (
                        <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            View Live Demo
                        </a>
                    )}
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:border-blue-600 dark:hover:border-blue-400 transition-colors"
                        >
                            View on GitHub
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

