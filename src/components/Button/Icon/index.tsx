import { IconButtonProps } from "../interface";

import "../styles.css";

export function IconButton({
  label,
  edge = "start",
  variant = "default",
  color = "primary",
  children,
  ...rest
}: IconButtonProps) {
  return (
    <button
      className={`${variant} ${color} icon-${label === undefined ? "no-label" : edge}`}
      style={{ borderRadius: label ? '8px' : '4px' }}
      {...rest}
    >
      {edge === "start" && children}
      {label && <p>{label}</p>}
      {edge === "end" && children}
    </button>
  );
}
