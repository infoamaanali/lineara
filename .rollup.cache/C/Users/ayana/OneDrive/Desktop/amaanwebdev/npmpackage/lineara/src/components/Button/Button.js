import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Loader2 } from "lucide-react";
import { getBaseStyles, getVariantStyles } from "./styles";
import { getSizeStyles, getRadiusStyles, getWidthStyles } from "./utils";
/**
 * A customizable Button component with variants, colors, icons, and loading states.
 */
const Button = forwardRef(({ children, variant = "solid", color = "primary", size = "md", pill = false, block = false, disabled = false, loading = false, active = false, leftIcon, rightIcon, onClick, type = "button", className = "", ...props }, ref) => {
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
    return (_jsxs("button", { ref: ref, type: type, className: allStyles, onClick: onClick, disabled: disabled || loading, ...props, children: [loading ? (_jsx(Loader2, { className: 'animate-spin', size: size === "xs" ? 14 : size === "sm" ? 16 : 18 })) : (leftIcon && _jsx("span", { className: 'mr-1', children: leftIcon })), children && _jsx("span", { children: children }), !loading && rightIcon && _jsx("span", { className: 'ml-1', children: rightIcon })] }));
});
Button.displayName = "Button";
export default Button;
//# sourceMappingURL=Button.js.map