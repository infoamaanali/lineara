// src/components/Button/button.types.ts
import type { VariantProps } from "tailwind-variants";
import type React from "react";
import { buttonVariants } from "./Button.variants";

export type ButtonProps = VariantProps<typeof buttonVariants> & {
  children: React.ReactNode;
  className?: string;
};