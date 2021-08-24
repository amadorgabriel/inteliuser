import "./styles.css";
import logoImage from "../../assets/logo.png";
import exitIcon from "../../assets/icons/log-out.svg";
import { IconButton } from "../Button";

export function Header() {
  return (
    <header className="headerContainer">
      <div className="headerContent">
        <img src={logoImage} alt="logo empresa Intelitrader" />

        <IconButton label="Logout" edge="end">
          <img src={exitIcon} alt="Icone sair" />
        </IconButton>
      </div>
    </header>
  );
}
