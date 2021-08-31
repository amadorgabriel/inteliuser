import { ButtonHTMLAttributes } from "react";

import "../styles.css";

type ButtonColorType = "primary" | "secondary" | "tertiary";
type IconButtonVariantType = "no-background" | "default";
type IconButtonEdgeType = "start" | "end";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  edge?: IconButtonEdgeType;
  variant?: IconButtonVariantType;
  children: React.ReactNode;
  color?: ButtonColorType;
  hasShadow?: boolean;
}

export function IconButton({
  label,
  edge = "start",
  variant = "default",
  color = "primary",
  children,
  className,
  hasShadow = false,
  ...rest
}: IconButtonProps) {
  const buttonStyles = `
    ${variant} 
    ${color} 
    icon-${label === undefined ? "no-label" : edge} 
    ${hasShadow ? "has-shadow" : ""}
    ${className ? className : ""}
  `;

  return (
    <button className={buttonStyles} {...rest}>
      {edge === "start" && children}
      {label && <p>{label}</p>}
      {edge === "end" && children}
    </button>
  );
}
