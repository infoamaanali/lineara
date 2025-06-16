import * as react_jsx_runtime from 'react/jsx-runtime';
import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';
import React from 'react';

declare const buttonVariants: tailwind_variants.TVReturnType<{
    variant: {
        primary: null;
        secondary: null;
        success: null;
        danger: null;
        warning: null;
        info: null;
        light: null;
        dark: null;
        String: StringConstructor;
    };
    styleType: {
        solid: null;
        outline: null;
        dashed: null;
        dotted: null;
        double: null;
    };
    shadow: {
        none: string;
        "2xs": string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
    };
    border: {
        none: string;
        "2xs": string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
    };
    roundness: {
        none: string;
        normal: string;
        full: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
        "4xl": string;
    };
}, undefined, "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none", {
    variant: {
        primary: null;
        secondary: null;
        success: null;
        danger: null;
        warning: null;
        info: null;
        light: null;
        dark: null;
        String: StringConstructor;
    };
    styleType: {
        solid: null;
        outline: null;
        dashed: null;
        dotted: null;
        double: null;
    };
    shadow: {
        none: string;
        "2xs": string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
    };
    border: {
        none: string;
        "2xs": string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
    };
    roundness: {
        none: string;
        normal: string;
        full: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
        "4xl": string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    variant: {
        primary: null;
        secondary: null;
        success: null;
        danger: null;
        warning: null;
        info: null;
        light: null;
        dark: null;
        String: StringConstructor;
    };
    styleType: {
        solid: null;
        outline: null;
        dashed: null;
        dotted: null;
        double: null;
    };
    shadow: {
        none: string;
        "2xs": string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
    };
    border: {
        none: string;
        "2xs": string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
    };
    roundness: {
        none: string;
        normal: string;
        full: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
        "4xl": string;
    };
}, undefined, "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none", unknown, unknown, undefined>>;

type ButtonProps = VariantProps<typeof buttonVariants> & {
    children: React.ReactNode;
    className?: string;
};

declare const Button: ({ variant, styleType, className, children, ...props }: ButtonProps) => react_jsx_runtime.JSX.Element;

export { Button, Button as default };
