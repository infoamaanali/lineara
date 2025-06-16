import { tv } from "tailwind-variants";
export const button = tv({
    base: "inline-flex items-center justify-center rounded",
    variants: {
        variant: {
            primary: String,
            secondary: String,
            success: String,
            danger: String,
            warning: String,
            info: String,
            light: String,
            dark: String,
            link: String,
        },
        styleType: {
            solid: String,
            outline: String,
            double: String,
            dashed: String,
            dottend: String,
            none: String,
        },
        theme: {
            light: String,
            dark: String,
        },
        roundness: {
            normal: String,
            xs: String,
            sm: String,
            md: String,
            lg: String,
            xl: String,
            xxl: String,
            xxxl: String,
            xxxx: String,
            none: String,
            full: String,
        },
    },
    defaultVariants: {
        variant: `primary`,
        type: `solid`,
        theme: "light",
        roundness: `normal`,
    },
    compoundVariants: [
        {
            variant: `primary`,
            type: `solid`,
            theme: `light`,
            roundness: `normal`,
            class: `bg-blue-500 rounded hover:bg-blue-600`
        }
    ]
});
//# sourceMappingURL=Button.js.map