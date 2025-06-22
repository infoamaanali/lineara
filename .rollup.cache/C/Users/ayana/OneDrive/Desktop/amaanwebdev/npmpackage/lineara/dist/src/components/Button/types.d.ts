import type { ReactNode } from "react";
/**
 * Predefined button variant styles.
 */
export type KnownButtonVariants = "solid" | "outline" | "ghost" | "soft" | "white" | "link";
/**
 * Predefined color schemes.
 */
export type KnownButtonColor = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "gray";
/**
 * Size options for buttons.
 */
export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";
/**
 * Disallows direct hex code strings like "#123456" for variant or color.
 */
export type InvalidHex<T> = T extends `#${string}` ? {
    ERROR: "❌ Hex-like string values (e.g., #123abc) are not allowed.";
    FIX: "Use a known name like 'solid' or a number.";
    RECEIVED: T;
} : T;
/**
 * Type-safe button variant with compile-time validation.
 */
export type ButtonVariant<T = unknown> = T extends KnownButtonVariants ? T : T extends number ? T : InvalidHex<T>;
/**
 * Type-safe button color with compile-time validation.
 */
export type ButtonColor<T = unknown> = T extends KnownButtonColor ? T : T extends number ? T : InvalidHex<T>;
/**
 * Props accepted by the Button component.
 */
export interface ButtonProps<TVariant = KnownButtonVariants, TColor = KnownButtonColor> {
    children: ReactNode;
    variant?: ButtonVariant<TVariant>;
    color?: ButtonColor<TColor>;
    size?: ButtonSize;
    pill?: boolean;
    block?: boolean;
    disabled?: boolean;
    loading?: boolean;
    active?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    className?: string;
}
