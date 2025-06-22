import type { ButtonSize } from "./types";
/**
 * Returns padding and font-size styles for each button size.
 */
export declare const getSizeStyles: (size: ButtonSize) => string[];
/**
 * Returns border-radius styles based on size or if `pill` is enabled.
 */
export declare const getRadiusStyles: (size: ButtonSize, pill: boolean) => string[];
/**
 * Returns width-related styles.
 */
export declare const getWidthStyles: (block: boolean) => string[];
