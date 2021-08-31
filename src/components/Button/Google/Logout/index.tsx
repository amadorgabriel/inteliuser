import { GoogleLogout, GoogleLogoutProps } from "react-google-login";
import { useHistory } from "react-router-dom";

import "../../styles.css";

type IconButtonEdgeType = "start" | "end";
type ButtonColorType = "primary" | "secondary" | "tertiary";
type ButtonVariantType = "outlined" | "default";

interface LogoutButtonProps extends GoogleLogoutProps {
  edge?: IconButtonEdgeType;
  color?: ButtonColorType;
  children: React.ReactNode;
  variant?: ButtonVariantType;
}

export function LogoutButton({
  edge = "start",
  color = "primary",
  variant = "default",
  children,
  className,
  buttonText,
  clientId,
  ...rest
}: LogoutButtonProps) {
  const buttonStyles = `
    ${color} 
    ${variant} 
    icon-${buttonText === undefined ? "no-label" : edge} 
    ${className ? className : ""} 
  `;

  const history = useHistory();

  const onSignOutSuccess = () => {
    const storagedUser = localStorage.getItem("@Inteliuser:user-logged");

    if (storagedUser) {
      localStorage.removeItem("@Inteliuser:user-logged");
      history.push("/", { message: "Deslogado com sucesso", type: "sucess" });
    }
  };

  return (
    <GoogleLogout
      {...rest}
      clientId={clientId}
      onLogoutSuccess={onSignOutSuccess}
      render={renderProps => (
        <button onClick={renderProps.onClick} className={buttonStyles}>
          {edge === "start" && children}
          {buttonText && <p>{buttonText}</p>}
          {edge === "end" && children}
        </button>
      )}
    />
  );
}
