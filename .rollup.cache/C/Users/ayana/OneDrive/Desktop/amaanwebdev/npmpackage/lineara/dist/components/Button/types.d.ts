import type { ReactNode } from "react";
/**
 * Predefined preset options that apply a fixed configuration to the button.
 */
export type Preset = "Logout" | "Submit";
/**
 * Allowed visual styles for the button.
 * - `solid`: Filled background.
 * - `outline`: Border with transparent background.
 * - `ghost`: Transparent button with hover effect.
 * - `soft`: Subtle background and text.
 * - `white`: White background, often for light themes.
 * - `link`: Styled like a hyperlink.
 */
export type KnownButtonVariants = "solid" | "outline" | "ghost" | "soft" | "white" | "link";
/**
 * Allowed color schemes for the button.
 * These usually map to Tailwind colors or design tokens.
 */
export type KnownButtonColor = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "gray";
/**
 * Size variants for the button.
 * - `xs`, `sm`, `md`, `lg`, `xl`
 */
export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";
/**
 * Utility type to disallow using hex-like strings such as "#123abc"
 * in props like `variant` or `color`. If such a value is passed,
 * the TypeScript compiler will display a helpful error object.
 */
export type InvalidHex<T> = T extends `#${string}` ? {
    /** Error message shown in IntelliSense */
    ERROR: "❌ Hex-like string values (e.g., #123abc) are not allowed.";
    /** Fix suggestion shown in IntelliSense */
    FIX: "Use a known name like 'primary', 'solid', or a numeric value.";
    /** Shows the incorrect value that was passed */
    RECEIVED: T;
} : T;
/**
 * Ensures that only valid button variants are allowed at compile time.
 * If an invalid value like a hex string is passed, it returns a helpful error.
 */
export type ButtonVariant<T = unknown> = T extends KnownButtonVariants ? T : T extends number ? T : InvalidHex<T>;
/**
 * Ensures that only valid button colors are allowed at compile time.
 * If an invalid value like a hex string is passed, it returns a helpful error.
 */
export type ButtonColor<T = unknown> = T extends KnownButtonColor ? T : T extends number ? T : InvalidHex<T>;
/**
 * Button props when using a predefined `preset`.
 * All other customization options are forbidden to avoid conflicts.
 */
interface PresetButtonProps {
    /**
     * One of the supported presets, such as "Logout" or "Submit".
     * When set, the button will use a predefined style and behavior.
     */
    preset: Preset;
    /**
     * Children (content) inside the button.
     */
    children: ReactNode;
    /**
     * Optional callback fired when the button is clicked.
     */
    onClick?: () => void;
    /**
     * Defines the type of button when used in a form.
     * - `"button"` (default): Basic button behavior.
     * - `"submit"`: Submits a form.
     * - `"reset"`: Resets form fields.
     */
    type?: "button" | "submit" | "reset";
    /**
     * Additional Tailwind utility classes for styling.
     */
    className?: string;
    /** ❌ Disallowed when using a preset — avoided for consistency. */
    variant?: never;
    /** ❌ Disallowed when using a preset — avoided for consistency. */
    color?: never;
    /** ❌ Disallowed when using a preset — avoided for consistency. */
    size?: never;
    /** ❌ Disallowed when using a preset — avoided for consistency. */
    pill?: never;
    /** ❌ Disallowed when using a preset — avoided for consistency. */
    block?: never;
    /** ❌ Disallowed when using a preset — avoided for consistency. */
    disabled?: never;
    /** ❌ Disallowed when using a preset — avoided for consistency. */
    loading?: never;
    /** ❌ Disallowed when using a preset — avoided for consistency. */
    active?: never;
    /** ❌ Disallowed when using a preset — avoided for consistency. */
    leftIcon?: never;
    /** ❌ Disallowed when using a preset — avoided for consistency. */
    rightIcon?: never;
}
/**
 * Props for a fully customizable button.
 * All design tokens and variants are available here.
 */
interface CustomButtonProps<TVariant = KnownButtonVariants, TColor = KnownButtonColor> {
    /**
     * Content to be rendered inside the button.
     */
    children: ReactNode;
    /**
     * Button style variant (e.g., `solid`, `outline`, `link`).
     * @default "solid"
     */
    variant?: ButtonVariant<TVariant>;
    /**
     * Thematic color for the button (e.g., `primary`, `danger`, `gray`).
     * @default "primary"
     */
    color?: ButtonColor<TColor>;
    /**
     * Controls the overall size of the button.
     * @default "md"
     */
    size?: ButtonSize;
    /**
     * If true, renders the button with fully rounded edges (pill style).
     * @default false
     */
    pill?: boolean;
    /**
     * If true, the button stretches to fill the width of its parent.
     * @default false
     */
    block?: boolean;
    /**
     * Disables the button and removes interactivity.
     * @default false
     */
    disabled?: boolean;
    /**
     * Displays a loading spinner and disables interaction.
     * @default false
     */
    loading?: boolean;
    /**
     * Applies "active" styles to the button.
     * @default false
     */
    active?: boolean;
    /**
     * Icon or element to render on the left side of the button content.
     */
    leftIcon?: ReactNode;
    /**
     * Icon or element to render on the right side of the button content.
     */
    rightIcon?: ReactNode;
    /**
     * Event handler triggered on click.
     */
    onClick?: () => void;
    /**
     * Specifies the native HTML button type.
     * @default "button"
     */
    type?: "button" | "submit" | "reset";
    /**
     * Additional Tailwind utility classes for custom styling.
     */
    className?: string;
    /** ❌ `preset` should not be used with fully custom buttons. */
    preset?: never;
}
/**
 * Union of props:
 * - Use `preset` mode for opinionated button styles.
 * - Use `custom` mode for full flexibility.
 *
 * Only one mode is allowed per usage.
 */
export type ButtonProps = PresetButtonProps | CustomButtonProps;
export {};
