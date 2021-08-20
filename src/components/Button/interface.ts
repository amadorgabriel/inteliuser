import React, { ButtonHTMLAttributes } from "react";

type ButtonColorType = "primary" | "secondary" | "tertiary";
type ButtonVariantType = "outlined" | "default";
type ButtonEdgeType = "start" | "end";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  color?: ButtonColorType;
  variant?: ButtonVariantType;
  children?: React.ReactNode;
  onclick?: () => void;
}

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  edge?: ButtonEdgeType;
  children: React.ReactNode;
}
  