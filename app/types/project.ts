/**
 * Project type definitions
 */

import type { Category } from "~/constants/categories";

export interface Project {
    id: string;
    title: string;
    category: Category;
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

