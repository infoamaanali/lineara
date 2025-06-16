// src/components/Button/Button.tsx
import React from "react";
import clsx from "clsx";
import { buttonVariants } from "./Button.variants";
import type { ButtonProps } from "./Button.types";

export const Button = ({
  variant,
  styleType, // <-- add this
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(buttonVariants({ variant, styleType }), className)}
      {...props}>
      {children}
    </button>
  );
};