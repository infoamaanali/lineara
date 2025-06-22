/**
 * Returns padding and font-size styles for each button size.
 */
export const getSizeStyles = (size) => {
    return {
        xs: ["text-xs", "px-2", "py-1", "gap-1"],
        sm: ["text-sm", "px-3", "py-1.5", "gap-1.5"],
        md: ["text-sm", "px-4", "py-2", "gap-2"],
        lg: ["text-base", "px-6", "py-2.5", "gap-2"],
        xl: ["text-lg", "px-8", "py-3", "gap-2.5"],
    }[size];
};
/**
 * Returns border-radius styles based on size or if `pill` is enabled.
 */
export const getRadiusStyles = (size, pill) => {
    if (pill)
        return ["rounded-full"];
    return {
        xs: ["rounded"],
        sm: ["rounded-md"],
        md: ["rounded-md"],
        lg: ["rounded-lg"],
        xl: ["rounded-lg"],
    }[size];
};
/**
 * Returns width-related styles.
 */
export const getWidthStyles = (block) => block ? ["w-full"] : ["w-fit"];
