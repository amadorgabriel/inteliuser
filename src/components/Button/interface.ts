import React, { ButtonHTMLAttributes } from "react";

type ButtonColorType = "primary" | "secondary" | "tertiary";
type ButtonVariantType = "outlined" | "default";
type IconButtonVariantType = "no-background" | "default";
type IconButtonEdgeType = "start" | "end";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  color?: ButtonColorType;
  variant?: ButtonVariantType;
  children?: React.ReactNode;
}
export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  edge?: IconButtonEdgeType;
  variant?: IconButtonVariantType;
  children: React.ReactNode;
  color?: ButtonColorType;
}
  