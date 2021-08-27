import '../styles.css';

import { ButtonProps } from '../interface';

export function FlatButton({
  label,
  variant = "default",
  color = "primary",
  hasShadow = false,
  ...rest
}: ButtonProps) {
  return (
    <button className={`${variant} ${color} ${hasShadow ? "has-shadow" : "not-shadow"}`} {...rest}>
      <p>{label}</p>
    </button>
  );
}
