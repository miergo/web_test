/**
 * Project categories and their metadata
 */

export const CATEGORIES = {
    TOUCHDESIGNER: "touchdesigner",
    GRASSHOPPER: "grasshopper",
    UNIVERSITY: "university",
    P5JS: "p5js",
} as const;

export type Category = typeof CATEGORIES[keyof typeof CATEGORIES];

export interface CategoryMetadata {
    id: Category;
    title: string;
    description: string;
}

export const CATEGORY_METADATA: Record<Category, CategoryMetadata> = {
    [CATEGORIES.TOUCHDESIGNER]: {
        id: CATEGORIES.TOUCHDESIGNER,
        title: "Touch Designer",
        description: "Real-time interactive installations and audiovisual experiences",
    },
    [CATEGORIES.GRASSHOPPER]: {
        id: CATEGORIES.GRASSHOPPER,
        title: "Grasshopper",
        description: "Parametric design and computational architecture projects",
    },
    [CATEGORIES.UNIVERSITY]: {
        id: CATEGORIES.UNIVERSITY,
        title: "University Projects",
        description: "Academic research and coursework explorations",
    },
    [CATEGORIES.P5JS]: {
        id: CATEGORIES.P5JS,
        title: "P5.js",
        description: "Creative coding sketches and interactive web experiences",
    },
};

export const ORDERED_CATEGORIES: Category[] = [
    CATEGORIES.TOUCHDESIGNER,
    CATEGORIES.GRASSHOPPER,
    CATEGORIES.UNIVERSITY,
    CATEGORIES.P5JS,
];

