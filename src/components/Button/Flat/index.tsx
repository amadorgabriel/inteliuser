import { ButtonHTMLAttributes } from "react";

import "../styles.css";

type ButtonColorType = "primary" | "secondary" | "tertiary";
type ButtonVariantType = "outlined" | "default";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  color?: ButtonColorType;
  variant?: ButtonVariantType;
  children?: React.ReactNode;
  hasShadow?: boolean;
}

export function FlatButton({
  label,
  variant = "default",
  color = "primary",
  hasShadow = false,
  className,
  ...rest
}: ButtonProps) {
  const buttonStyles = `
    ${variant} 
    ${color} 
    ${hasShadow ? "has-shadow" : ""}
    ${className ? className : ""}
  `;

  return (
    <button className={buttonStyles} {...rest}>
      <p>{label}</p>
    </button>
  );
}
