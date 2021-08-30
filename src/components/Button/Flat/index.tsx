import "../styles.css";

import { ButtonProps } from "../interface";

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
