/**
 * Appends class only if `active` is true.
 * @param cls - The class to conditionally apply.
 * @param isActive - Whether the button is in active state.
 * @returns The class if active, otherwise an empty string.
 */
const activeClass = (cls, isActive) => (isActive ? cls : "");
/**
 * Base utility classes applied to all button variants.
 * @returns An array of Tailwind CSS classes.
 */
export const getBaseStyles = () => [
    "inline-flex",
    "items-center",
    "justify-center",
    "font-medium",
    "transition-all",
    "duration-200",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-offset-2",
    "select-none",
    "cursor-pointer",
];
/**
 * Returns Tailwind utility classes for a given button variant, color, and active state.
 * @param variant - The button style variant (e.g., solid, outline, ghost).
 * @param color - The button color scheme (e.g., primary, success, danger).
 * @param active - Optional boolean to enable active state styling.
 * @returns An array of Tailwind CSS classes for the given configuration.
 */
export const getVariantStyles = (variant, color, active) => {
    const variants = {
        solid: {
            primary: [
                "bg-blue-600",
                "text-white",
                "hover:bg-blue-700",
                "focus:ring-blue-500",
                activeClass("bg-blue-800", active),
            ],
            secondary: [
                "bg-gray-600",
                "text-white",
                "hover:bg-gray-700",
                "focus:ring-gray-500",
                activeClass("bg-gray-800", active),
            ],
            success: [
                "bg-green-600",
                "text-white",
                "hover:bg-green-700",
                "focus:ring-green-500",
                activeClass("bg-green-800", active),
            ],
            danger: [
                "bg-red-600",
                "text-white",
                "hover:bg-red-700",
                "focus:ring-red-500",
                activeClass("bg-red-800", active),
            ],
            warning: [
                "bg-yellow-500",
                "text-white",
                "hover:bg-yellow-600",
                "focus:ring-yellow-400",
                activeClass("bg-yellow-700", active),
            ],
            info: [
                "bg-cyan-600",
                "text-white",
                "hover:bg-cyan-700",
                "focus:ring-cyan-500",
                activeClass("bg-cyan-800", active),
            ],
            gray: [
                "bg-gray-500",
                "text-white",
                "hover:bg-gray-600",
                "focus:ring-gray-400",
                activeClass("bg-gray-700", active),
            ],
        },
        outline: {
            primary: [
                "border",
                "border-white/20",
                "text-zinc-400",
                "bg-transparent",
                "hover:border-blue-600",
                "hover:text-blue-500",
                "focus:ring-blue-500",
                activeClass("bg-blue-100", active),
            ],
            secondary: [
                "border-2",
                "border-gray-600",
                "text-gray-600",
                "bg-transparent",
                "hover:bg-gray-50",
                "focus:ring-gray-500",
                activeClass("bg-gray-100", active),
            ],
            success: [
                "border-2",
                "border-green-600",
                "text-green-600",
                "bg-transparent",
                "hover:bg-green-50",
                "focus:ring-green-500",
                activeClass("bg-green-100", active),
            ],
            danger: [
                "border-2",
                "border-red-600",
                "text-red-600",
                "bg-transparent",
                "hover:bg-red-50",
                "focus:ring-red-500",
                activeClass("bg-red-100", active),
            ],
            warning: [
                "border-2",
                "border-yellow-500",
                "text-yellow-600",
                "bg-transparent",
                "hover:bg-yellow-50",
                "focus:ring-yellow-400",
                activeClass("bg-yellow-100", active),
            ],
            info: [
                "border-2",
                "border-cyan-600",
                "text-cyan-600",
                "bg-transparent",
                "hover:bg-cyan-50",
                "focus:ring-cyan-500",
                activeClass("bg-cyan-100", active),
            ],
            gray: [
                "border-2",
                "border-gray-500",
                "text-gray-600",
                "bg-transparent",
                "hover:bg-gray-50",
                "focus:ring-gray-400",
                activeClass("bg-gray-100", active),
            ],
        },
        ghost: {
            primary: [
                "text-blue-600",
                "bg-transparent",
                "hover:bg-blue-50",
                "focus:ring-blue-500",
                activeClass("bg-blue-100", active),
            ],
            secondary: [
                "text-gray-600",
                "bg-transparent",
                "hover:bg-gray-50",
                "focus:ring-gray-500",
                activeClass("bg-gray-100", active),
            ],
            success: [
                "text-green-600",
                "bg-transparent",
                "hover:bg-green-50",
                "focus:ring-green-500",
                activeClass("bg-green-100", active),
            ],
            danger: [
                "text-red-600",
                "bg-transparent",
                "hover:bg-red-50",
                "focus:ring-red-500",
                activeClass("bg-red-100", active),
            ],
            warning: [
                "text-yellow-600",
                "bg-transparent",
                "hover:bg-yellow-50",
                "focus:ring-yellow-400",
                activeClass("bg-yellow-100", active),
            ],
            info: [
                "text-cyan-600",
                "bg-transparent",
                "hover:bg-cyan-50",
                "focus:ring-cyan-500",
                activeClass("bg-cyan-100", active),
            ],
            gray: [
                "text-gray-600",
                "bg-transparent",
                "hover:bg-gray-50",
                "focus:ring-gray-400",
                activeClass("bg-gray-100", active),
            ],
        },
        soft: {
            primary: [
                "bg-blue-100",
                "text-blue-700",
                "hover:bg-blue-200",
                "focus:ring-blue-500",
                activeClass("bg-blue-300", active),
            ],
            secondary: [
                "bg-gray-100",
                "text-gray-700",
                "hover:bg-gray-200",
                "focus:ring-gray-500",
                activeClass("bg-gray-300", active),
            ],
            success: [
                "bg-green-100",
                "text-green-700",
                "hover:bg-green-200",
                "focus:ring-green-500",
                activeClass("bg-green-300", active),
            ],
            danger: [
                "bg-red-100",
                "text-red-700",
                "hover:bg-red-200",
                "focus:ring-red-500",
                activeClass("bg-red-300", active),
            ],
            warning: [
                "bg-yellow-100",
                "text-yellow-700",
                "hover:bg-yellow-200",
                "focus:ring-yellow-400",
                activeClass("bg-yellow-300", active),
            ],
            info: [
                "bg-cyan-100",
                "text-cyan-700",
                "hover:bg-cyan-200",
                "focus:ring-cyan-500",
                activeClass("bg-cyan-300", active),
            ],
            gray: [
                "bg-gray-100",
                "text-gray-700",
                "hover:bg-gray-200",
                "focus:ring-gray-400",
                activeClass("bg-gray-300", active),
            ],
        },
        white: {
            primary: [
                "bg-white",
                "text-blue-600",
                "border",
                "border-gray-300",
                "hover:bg-gray-50",
                "focus:ring-blue-500",
                activeClass("bg-gray-100", active),
            ],
            secondary: [
                "bg-white",
                "text-gray-600",
                "border",
                "border-gray-300",
                "hover:bg-gray-50",
                "focus:ring-gray-500",
                activeClass("bg-gray-100", active),
            ],
            success: [
                "bg-white",
                "text-green-600",
                "border",
                "border-gray-300",
                "hover:bg-gray-50",
                "focus:ring-green-500",
                activeClass("bg-gray-100", active),
            ],
            danger: [
                "bg-white",
                "text-red-600",
                "border",
                "border-gray-300",
                "hover:bg-gray-50",
                "focus:ring-red-500",
                activeClass("bg-gray-100", active),
            ],
            warning: [
                "bg-white",
                "text-yellow-600",
                "border",
                "border-gray-300",
                "hover:bg-gray-50",
                "focus:ring-yellow-400",
                activeClass("bg-gray-100", active),
            ],
            info: [
                "bg-white",
                "text-cyan-600",
                "border",
                "border-gray-300",
                "hover:bg-gray-50",
                "focus:ring-cyan-500",
                activeClass("bg-gray-100", active),
            ],
            gray: [
                "bg-white",
                "text-gray-600",
                "border",
                "border-gray-300",
                "hover:bg-gray-50",
                "focus:ring-gray-400",
                activeClass("bg-gray-100", active),
            ],
        },
        link: {
            primary: [
                "text-blue-600",
                "hover:text-blue-700",
                "hover:underline",
                "focus:ring-blue-500",
                activeClass("text-blue-800", active),
            ],
            secondary: [
                "text-gray-600",
                "hover:text-gray-700",
                "hover:underline",
                "focus:ring-gray-500",
                activeClass("text-gray-800", active),
            ],
            success: [
                "text-green-600",
                "hover:text-green-700",
                "hover:underline",
                "focus:ring-green-500",
                activeClass("text-green-800", active),
            ],
            danger: [
                "text-red-600",
                "hover:text-red-700",
                "hover:underline",
                "focus:ring-red-500",
                activeClass("text-red-800", active),
            ],
            warning: [
                "text-yellow-600",
                "hover:text-yellow-700",
                "hover:underline",
                "focus:ring-yellow-400",
                activeClass("text-yellow-800", active),
            ],
            info: [
                "text-cyan-600",
                "hover:text-cyan-700",
                "hover:underline",
                "focus:ring-cyan-500",
                activeClass("text-cyan-800", active),
            ],
            gray: [
                "text-gray-600",
                "hover:text-gray-700",
                "hover:underline",
                "focus:ring-gray-400",
                activeClass("text-gray-800", active),
            ],
        },
    };
    return variants[variant][color];
};
//# sourceMappingURL=styles.js.map