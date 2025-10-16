import { getAssetPath } from "~/utils/assets";
import type { Project } from "~/types";
import { CATEGORIES } from "~/constants/categories";

export const p5jsProjects: Project[] = [
    {
        id: "p5-project-1",
        title: "P5.js Project 1",
        category: CATEGORIES.P5JS,
        thumbnail: getAssetPath("placeholder-thumbnail.jpg"),
        description: "An interactive creative coding project",
        detailedDescription: "Detailed description of your P5.js sketch.",
        technologies: ["P5.js", "JavaScript", "Creative Coding"],
        liveDemo: "https://example.com/demo", // Add your live demo URL
    },
    {
        id: "p5-project-2",
        title: "P5.js Project 2",
        category: CATEGORIES.P5JS,
        thumbnail: getAssetPath("placeholder-thumbnail.jpg"),
        description: "Another creative coding sketch",
        detailedDescription: "More details about this interactive piece.",
        technologies: ["P5.js", "Generative Art"],
    },
];

