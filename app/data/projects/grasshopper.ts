import { getAssetPath } from "~/utils/assets";
import type { Project } from "~/types";
import { CATEGORIES } from "~/constants/categories";

export const grasshopperProjects: Project[] = [
    {
        id: "gh-project-1",
        title: "Grasshopper Project 1",
        category: CATEGORIES.GRASSHOPPER,
        thumbnail: getAssetPath("placeholder-thumbnail.jpg"),
        description: "A parametric design project using Grasshopper",
        detailedDescription: "Detailed description of your Grasshopper work.",
        technologies: ["Grasshopper", "Rhino", "Parametric Design"],
    },
    {
        id: "gh-project-2",
        title: "Grasshopper Project 2",
        category: CATEGORIES.GRASSHOPPER,
        thumbnail: getAssetPath("placeholder-thumbnail.jpg"),
        description: "Another parametric design exploration",
        detailedDescription: "More details about this project.",
        technologies: ["Grasshopper", "3D Modeling"],
    },
];

