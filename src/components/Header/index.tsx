import { LogoutButton } from "../Button";

import logoImage from "../../assets/logo.png";
import exitIcon from "../../assets/icons/log-out.svg";

import "./styles.css";

export function Header() {
  return (
    <header className="headerContainer">
      <div className="headerContent">
        <img src={logoImage} alt="logo empresa Intelitrader" />

        <LogoutButton
          buttonText="Logout"
          clientId={`${process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}`}
        >
          <img src={exitIcon} alt="Icone sair" />
        </LogoutButton>
      </div>
    </header>
  );
}
