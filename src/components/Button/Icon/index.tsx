import '../styles.css';

import { IconButtonProps } from '../interface';

export function IconButton({
  label,
  edge = "start",
  children,
  ...rest
}: IconButtonProps) {
  return (
    <button className={`default icon-${edge}`} {...rest}>
      {edge === "start" && children}
      {label}
      {edge === "end" && children}
    </button>
  );
}
