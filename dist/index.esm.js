import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef, createElement } from 'react';

/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
};

/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Icon = forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);

/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const createLucideIcon = (iconName, iconNode) => {
  const Component = forwardRef(
    ({ className, ...props }, ref) => createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};

/**
 * @license lucide-react v0.517.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
const LoaderCircle = createLucideIcon("loader-circle", __iconNode);

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
const getBaseStyles = () => [
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
const getVariantStyles = (variant, color, active) => {
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

/**
 * Returns padding and font-size styles for each button size.
 */
const getSizeStyles = (size) => {
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
const getRadiusStyles = (size, pill) => {
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
const getWidthStyles = (block) => block ? ["w-full"] : ["w-fit"];

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
    return (jsxs("button", { ref: ref, type: type, className: allStyles, onClick: onClick, disabled: disabled || loading, ...props, children: [loading ? (
            // Render spinner when loading
            jsx(LoaderCircle, { className: "animate-spin", size: size === "xs" ? 14 : size === "sm" ? 16 : 18 })) : (
            // Render left icon (if provided)
            leftIcon && jsx("span", { className: "mr-1", children: leftIcon })), children && jsx("span", { children: children }), !loading && rightIcon && jsx("span", { className: "ml-1", children: rightIcon })] }));
});
Button.displayName = "Button";

// src/index.ts

export { Button, Button as default };
//# sourceMappingURL=index.esm.js.map
