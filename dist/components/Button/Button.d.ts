import React from "react";
import type { ButtonProps } from "./types";
/**
 * A reusable and customizable Button component with built-in support for:
 * - variants (solid, outline, ghost, etc.)
 * - color themes (primary, success, danger, etc.)
 * - sizes (xs, sm, md, lg, xl)
 * - icons (left and right)
 * - loading and disabled states
 * - pill and block display styles
 */
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default Button;
