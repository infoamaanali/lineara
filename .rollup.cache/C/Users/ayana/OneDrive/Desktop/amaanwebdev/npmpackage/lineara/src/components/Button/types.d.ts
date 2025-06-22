import type { ReactNode } from "react";
export type KnownButtonVariants = "solid" | "outline" | "ghost" | "soft" | "white" | "link";
export type KnownButtonColor = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "gray";
export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";
export type InvalidHex<T> = T extends `#${string}` ? {
    ERROR: "❌ Hex-like string values (e.g., #123abc) are not allowed for variant or color.";
    FIX: "Use a valid number (e.g., 123) or a known string value like 'solid' or 'primary'.";
    RECEIVED: T;
} : T;
export type ButtonVariant<T = unknown> = T extends KnownButtonVariants ? T : T extends number ? T : InvalidHex<T>;
export type ButtonColor<T = unknown> = T extends KnownButtonColor ? T : T extends number ? T : InvalidHex<T>;
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
