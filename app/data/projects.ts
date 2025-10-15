import { getAssetPath } from "../utils/assets";

export interface Project {
    id: string;
    title: string;
    category: "touchdesigner" | "grasshopper" | "university" | "p5js";
    thumbnail: string;
    description: string;
    detailedDescription: string;
    technologies: string[];
    images?: string[];
    videoUrl?: string;
    liveDemo?: string;
    github?: string;
    collaborators?: string[];
}

export const projects: Project[] = [
    // Touch Designer Projects
    {
        id: "td-project-1",
        title: "Touch Designer Project 1",
        category: "touchdesigner",
        thumbnail: getAssetPath("touchdesigner/TDMovieOut.0.mp4"),
        description: "A brief description of your Touch Designer project",
        detailedDescription: "A more detailed description of what this project does, the challenges you faced, and what you learned.",
        technologies: ["TouchDesigner", "Python", "GLSL"],
    },
    {
        id: "td-project-2",
        title: "Touch Designer Project 2",
        category: "touchdesigner",
        thumbnail: getAssetPath("touchdesigner/scifiwireframe.0.mp4"),
        description: "Another Touch Designer project description",
        detailedDescription: "Detailed information about this project.",
        technologies: ["TouchDesigner", "Audio Reactive"],
    },

    // Grasshopper Projects
    {
        id: "gh-project-1",
        title: "Grasshopper Project 1",
        category: "grasshopper",
        thumbnail: getAssetPath("placeholder-thumbnail.jpg"),
        description: "A parametric design project using Grasshopper",
        detailedDescription: "Detailed description of your Grasshopper work.",
        technologies: ["Grasshopper", "Rhino", "Parametric Design"],
    },
    {
        id: "gh-project-2",
        title: "Grasshopper Project 2",
        category: "grasshopper",
        thumbnail: getAssetPath("placeholder-thumbnail.jpg"),
        description: "Another parametric design exploration",
        detailedDescription: "More details about this project.",
        technologies: ["Grasshopper", "3D Modeling"],
    },

    // University Projects
    {
        id: "uni-project-1",
        title: "University Project 1",
        category: "university",
        thumbnail: getAssetPath("placeholder-thumbnail.jpg"),
        description: "A university assignment or research project",
        detailedDescription: "Detailed information about this academic work.",
        technologies: ["Research", "Analysis"],
        collaborators: ["Sam Losi, Conrelius Carl"],
    },
    {
        id: "uni-project-2",
        title: "University Project 2",
        category: "university",
        thumbnail: getAssetPath("placeholder-thumbnail.jpg"),
        images: [getAssetPath("placeholder-thumbnail.jpg"), getAssetPath("placeholder-thumbnail.jpg")],
        description: "Another academic project",
        detailedDescription: "More details about this university work.",
        technologies: ["Academic Research"],
    },

    // P5.js Projects
    {
        id: "p5-project-1",
        title: "P5.js Project 1",
        category: "p5js",
        thumbnail: getAssetPath("placeholder-thumbnail.jpg"),
        description: "An interactive creative coding project",
        detailedDescription: "Detailed description of your P5.js sketch.",
        technologies: ["P5.js", "JavaScript", "Creative Coding"],
        liveDemo: "https://example.com/demo", // Add your live demo URL
    },
    {
        id: "p5-project-2",
        title: "P5.js Project 2",
        category: "p5js",
        thumbnail: getAssetPath("placeholder-thumbnail.jpg"),
        description: "Another creative coding sketch",
        detailedDescription: "More details about this interactive piece.",
        technologies: ["P5.js", "Generative Art"],
    },
];

// Helper function to get projects by category
export function getProjectsByCategory(category: Project["category"]) {
    return projects.filter((project) => project.category === category);
}

// Helper function to get a single project by ID
export function getProjectById(id: string) {
    return projects.find((project) => project.id === id);
}