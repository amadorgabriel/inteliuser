import { IconButtonProps } from "../interface";

import "../styles.css";

export function IconButton({
  label,
  edge = "start",
  variant = "default",
  color = "primary",
  children,
  hasShadow = false,
  className,
  ...rest
}: IconButtonProps) {

  const buttonStyles = `
    ${variant} 
    ${color} 
    icon-${label === undefined ? "no-label" : edge} 
    ${hasShadow ? "has-shadow" : "not-shadow"}
    ${className}
  `

  return (
    <button
      className={buttonStyles}
      style={{ borderRadius: label ? '8px' : '4px' }}
      {...rest}
    >
      {edge === "start" && children}
      {label && <p>{label}</p>}
    </button>
  );
}
