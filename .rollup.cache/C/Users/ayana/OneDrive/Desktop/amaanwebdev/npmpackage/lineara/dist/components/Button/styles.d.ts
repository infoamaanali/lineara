import type { KnownButtonColor, KnownButtonVariants } from "./types";
/**
 * Base utility classes applied to all button variants.
 * @returns An array of Tailwind CSS classes.
 */
export declare const getBaseStyles: () => string[];
/**
 * Returns Tailwind utility classes for a given button variant, color, and active state.
 * @param variant - The button style variant (e.g., solid, outline, ghost).
 * @param color - The button color scheme (e.g., primary, success, danger).
 * @param active - Optional boolean to enable active state styling.
 * @returns An array of Tailwind CSS classes for the given configuration.
 */
export declare const getVariantStyles: (variant: KnownButtonVariants, color: KnownButtonColor, active?: boolean) => string[];
