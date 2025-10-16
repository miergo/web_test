import { getAssetPath } from "~/utils/assets";
import type { Project } from "~/types";
import { CATEGORIES } from "~/constants/categories";

export const universityProjects: Project[] = [
    {
        id: "uni-project-1",
        title: "University Project 1",
        category: CATEGORIES.UNIVERSITY,
        thumbnail: getAssetPath("placeholder-thumbnail.jpg"),
        description: "A university assignment or research project",
        detailedDescription: "Detailed information about this academic work.",
        technologies: ["Research", "Analysis"],
        collaborators: ["Sam Losi, Conrelius Carl"],
    },
    {
        id: "uni-project-2",
        title: "University Project 2",
        category: CATEGORIES.UNIVERSITY,
        thumbnail: getAssetPath("placeholder-thumbnail.jpg"),
        images: [getAssetPath("placeholder-thumbnail.jpg"), getAssetPath("placeholder-thumbnail.jpg")],
        description: "Another academic project",
        detailedDescription: "More details about this university work.",
        technologies: ["Academic Research"],
    },
];

