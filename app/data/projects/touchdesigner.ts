import { getAssetPath } from "~/utils/assets";
import type { Project } from "~/types";
import { CATEGORIES } from "~/constants/categories";

export const touchDesignerProjects: Project[] = [
    {
        id: "td-project-0",
        title: "Audio Reactive Mandal",
        category: CATEGORIES.TOUCHDESIGNER,
        thumbnail: getAssetPath(""), //add video
        description: "A mandal that reacts to audio",
        detailedDescription: "A more detailed description of what this project does, the challenges you faced, and what you learned.",
        technologies: ["TouchDesigner", "Audio Reactive"],
    },
    {
        id: "td-project-1",
        title: "Yayo Kusama",
        category: CATEGORIES.TOUCHDESIGNER,
        thumbnail: getAssetPath("videos/touchdesigner/TDMovieOut.0.mp4"),
        description: "It is my take on the Yayo Kusama installation, and to bring her art work to life at comfort of my home.",
        detailedDescription: "A more detailed description of what this project does, the challenges you faced, and what you learned.",
        technologies: ["TouchDesigner", "GLSL"],
    },
    {
        id: "td-project-2",
        title: "SciFi Wireframe",
        category: CATEGORIES.TOUCHDESIGNER,
        thumbnail: getAssetPath("videos/touchdesigner/scifiwireframe.0.mp4"),
        description: "A process to turn any logo into a sci-fi wireframe",
        detailedDescription: "A process to turn any logo into a sci-fi wireframe.",
        technologies: ["TouchDesigner", "GLSL"],
    },
];

