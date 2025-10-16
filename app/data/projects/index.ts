/**
 * Project data organized by category
 */

import type { Project } from "~/types";
import type { Category } from "~/constants/categories";
import { touchDesignerProjects } from "./touchdesigner";
import { grasshopperProjects } from "./grasshopper";
import { universityProjects } from "./university";
import { p5jsProjects } from "./p5js";

/**
 * All projects combined
 */
export const allProjects: Project[] = [
    ...touchDesignerProjects,
    ...grasshopperProjects,
    ...universityProjects,
    ...p5jsProjects,
];

/**
 * Get all projects for a specific category
 */
export function getProjectsByCategory(category: Category): Project[] {
    return allProjects.filter((project) => project.category === category);
}

/**
 * Get a single project by its ID
 */
export function getProjectById(id: string): Project | undefined {
    return allProjects.find((project) => project.id === id);
}

/**
 * Get all projects
 */
export function getAllProjects(): Project[] {
    return allProjects;
}

// Re-export category-specific projects for direct access if needed
export { touchDesignerProjects } from "./touchdesigner";
export { grasshopperProjects } from "./grasshopper";
export { universityProjects } from "./university";
export { p5jsProjects } from "./p5js";

