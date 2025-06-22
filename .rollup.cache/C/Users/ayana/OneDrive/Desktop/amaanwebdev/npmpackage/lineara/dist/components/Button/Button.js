import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Loader2 } from "lucide-react";
import { getBaseStyles, getVariantStyles } from "./styles";
import { getSizeStyles, getRadiusStyles, getWidthStyles } from "./utils";
/**
 * A reusable and customizable Button component with built-in support for:
 * - variants (solid, outline, ghost, etc.)
 * - color themes (primary, success, danger, etc.)
 * - sizes (xs, sm, md, lg, xl)
 * - icons (left and right)
 * - loading and disabled states
 * - pill and block display styles
 */
const Button = forwardRef(({ 
/**
 * Content rendered inside the button (usually text or an element).
 */
children = "Lineara's Button", 
/**
 * Visual style of the button (e.g., solid, outline, ghost).
 * @default "solid"
 */
variant = "solid", 
/**
 * Color theme for the button. Only predefined color values are allowed.
 * @default "primary"
 */
color = "primary", 
/**
 * Size of the button (xs, sm, md, lg, xl).
 * @default "md"
 */
size = "md", 
/**
 * If true, renders the button with fully rounded edges.
 * @default false
 */
pill = false, 
/**
 * If true, the button expands to the full width of its container.
 * @default false
 */
block = false, 
/**
 * If true, the button will be disabled and non-interactive.
 * @default false
 */
disabled = false, 
/**
 * If true, shows a loading spinner and disables interaction.
 * @default false
 */
loading = false, 
/**
 * If true, applies "active" styling to the button.
 * @default false
 */
active = false, 
/**
 * Optional icon or element shown before the button content.
 */
leftIcon, 
/**
 * Optional icon or element shown after the button content.
 */
rightIcon, 
/**
 * Callback triggered when the button is clicked.
 */
onClick, 
/**
 * Native button type — useful in form contexts.
 * @default "button"
 */
type = "button", 
/**
 * Additional custom Tailwind utility classes.
 */
className = "", 
/**
 * Additional HTML button attributes.
 */
...props }, ref) => {
    // Compose all utility classes into a single class string
    const allStyles = [
        ...getBaseStyles(),
        ...getSizeStyles(size),
        ...getRadiusStyles(size, pill),
        ...getWidthStyles(block),
        ...getVariantStyles(variant, color, active),
        ...(disabled
            ? ["opacity-50", "cursor-not-allowed", "pointer-events-none"]
            : []),
        ...(loading ? ["cursor-wait"] : []),
        className,
    ]
        .filter(Boolean)
        .join(" ");
    return (_jsxs("button", { ref: ref, type: type, className: allStyles, onClick: onClick, disabled: disabled || loading, ...props, children: [loading ? (
            // Render spinner when loading
            _jsx(Loader2, { className: "animate-spin", size: size === "xs" ? 14 : size === "sm" ? 16 : 18 })) : (
            // Render left icon (if provided)
            leftIcon && _jsx("span", { className: "mr-1", children: leftIcon })), children && _jsx("span", { children: children }), !loading && rightIcon && _jsx("span", { className: "ml-1", children: rightIcon })] }));
});
Button.displayName = "Button";
export default Button;
//# sourceMappingURL=Button.js.map