import GoogleLogin, {
  GoogleLoginProps,
  GoogleLoginResponse,
} from "react-google-login";
import { useRef } from "react";
import { isAuth } from "../../../../utils/isAuth";
import { useHistory } from "react-router-dom";
import { HtmlToastElement, Toast } from "../../../Toast";

import googleIcon from "../../../../assets/icons/google-icon.svg";

import "../../styles.css";

export function GoogleLoginButton({
  children,
  className,
  buttonText,
  clientId,
  ...rest
}: GoogleLoginProps) {
  const history = useHistory();
  const toastRef = useRef<HtmlToastElement>(null);

  const onGoogleLoginSuccess = (res: any) => {
    const response = res as GoogleLoginResponse;
    const userIsAlreadyLoggedIn = isAuth();

    if (userIsAlreadyLoggedIn) {
      history.push("/dashboard", {
        message: "Você já está logado!",
        type: "sucess",
      });

      return;
    }

    localStorage.setItem(
      "@Inteliuser:user-logged",
      JSON.stringify(response.accessToken)
    );

    history.push("/dashboard", {
      message: "Logado com sucesso",
      type: "sucess",
    });
  };

  const onGoogleLoginFailure = () => {
    toastRef.current!.showToast("Falha no login", "error");
  };

  return (
    <>
      <GoogleLogin
        {...rest}
        clientId={clientId}
        onSuccess={onGoogleLoginSuccess}
        onFailure={onGoogleLoginFailure}
        render={renderProps => (
          <button
            onClick={renderProps.onClick}
            className={`${className ? className : ""} icon-start google-login`}
          >
            <img src={googleIcon} alt="Google icon" />
            {buttonText && <p>{buttonText}</p>}
          </button>
        )}
      />

      <Toast ref={toastRef} />
    </>
  );
}
