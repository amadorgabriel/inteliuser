import '../styles.css';

import { ButtonProps } from '../interface';

export function FlatButton({
  label,
  variant = "default",
  color = "primary",
  ...rest
}: ButtonProps) {
  return (
    <button className={`${variant} ${color}`} {...rest}>
      <p>{label}</p>
    </button>
  );
}
