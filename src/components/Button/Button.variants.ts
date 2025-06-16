// src/components/Button/button.variants.ts
import { tv } from "tailwind-variants";
import { compoundVariants } from "./CompoundVariants";

const pc = "bg-blue-500 hover:bg-blue-600";

export const buttonVariants = tv({
  base: "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  variants: {
    variant: {
      primary: null,
      secondary: null,
      success: null,
      danger: null,
      warning: null,
      info: null,
      light: null,
      dark: null,
      String,
    },
    styleType: {
      solid: null,
      outline: null,
      dashed: null,
      dotted: null,
      double: null,
    },
    shadow: {
      none: "shadow-none",
      "2xs": "shadow-2xs",
      xs: "shadow-xs",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
      xl: "shadow-xl",
      "2xl": "shadow-2xl",
    },
    border: {
      none: "border-none",
      "2xs": "border-[1px]",
      xs: "border-2",
      sm: "border-4",
      md: "border-8",
      lg: "border-[12px]",
      xl: "border-[16px]",
      "2xl": "border-[20px]",
    },
    roundness: {
      none: "rounded-none",
      normal: "normal",
      full: "rounded-full",
      xs: "rounded-xs",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      "3xl": "rounded-3xl",
      "4xl": "rounded-4xl",
    },
  },
  defaultVariants: {
    variant: "primary",
    styleType: "solid",
    shadow: "md",
    border: "none",
  },
  compoundVariants: [compoundVariants as any],
});
