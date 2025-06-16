import { __rest } from "tslib";
import React from 'react';
import { tv } from 'tailwind-variants';
/**
 * Define your color palette as a const so keys are literal types
 */
export const colorVariants = {
    primary: '#2563EB',
    secondary: '#6B7280',
    success: '#16A34A',
    danger: '#DC2626',
    warning: '#D97706',
    info: '#0284C7',
    light: '#F3F4F6',
    dark: '#111827',
};
/**
 * Corner roundness utilities
 */
export const roundnessMap = {
    none: 'rounded-none',
    xs: 'rounded-xs',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
};
/**
 * Build the tv() config with strongly-typed variants
 */
const button = tv({
    base: 'inline-flex items-center justify-center font-medium focus:outline-none transition-all',
    variants: {
        variant: {
            normal: '',
            outline: 'border bg-transparent',
            dashed: 'border border-dashed bg-transparent',
            dotted: 'border border-dotted bg-transparent',
            double: 'border-2 bg-transparent',
        },
        color: Object.fromEntries(Object.keys(colorVariants).map((key) => [key, ''])),
        size: {
            xs: 'text-xs py-1 px-2',
            sm: 'text-sm py-1.5 px-3',
            md: 'text-base py-2 px-4',
            lg: 'text-lg py-2.5 px-5',
            xl: 'text-xl py-3 px-6',
            xxl: 'text-2xl py-4 px-8',
        },
        roundness: roundnessMap,
        fullWidth: {
            true: 'w-full',
            false: 'w-auto',
        },
        disabled: {
            true: 'opacity-50 cursor-not-allowed',
            false: '',
        },
    },
    compoundVariants: [
        // normal variant: background + text color
        ...Object.entries(colorVariants).map(([key, hex]) => ({
            variant: 'normal',
            color: key,
            class: [`bg-[${hex}]`, key === 'light' ? 'text-[${colorVariants.dark}]' : 'text-[${colorVariants.light}]'].join(' '),
        })),
        // outline/dashed/dotted/double: border + text
        ...Object.entries(colorVariants).flatMap(([key, hex]) => ['outline', 'dashed', 'dotted', 'double'].map((variant) => ({
            variant: variant,
            color: key,
            class: [`border-[${hex}]`, `text-[${hex}]`].join(' '),
        }))),
    ],
    defaultVariants: {
        variant: 'normal',
        color: 'primary',
        size: 'md',
        roundness: 'md',
        fullWidth: false,
        disabled: false,
    },
});
const Button = (_a) => {
    var { variant, color, size, roundness, fullWidth, disabled, className, children } = _a, props = __rest(_a, ["variant", "color", "size", "roundness", "fullWidth", "disabled", "className", "children"]);
    return (<button className={button({ variant, color, size, roundness, fullWidth, disabled, className })} disabled={disabled} {...props}>
    {children}
  </button>);
};
export default Button;
//# sourceMappingURL=Button.jsx.map