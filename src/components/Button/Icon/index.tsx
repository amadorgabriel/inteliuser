import { IconButtonProps } from "../interface";

import "../styles.css";

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
