import { useHistory } from "react-router-dom";
import { IconButton } from "../Button";

import logoImage from "../../assets/logo.png";
import exitIcon from "../../assets/icons/log-out.svg";

import "./styles.css";

export function Header() {
  const history = useHistory();

  const handleLogOut = () => {
    const storagedUser = localStorage.getItem("@Inteliuser:user-logged");
    if (storagedUser) {
      localStorage.removeItem("@Inteliuser:user-logged");
      history.push("/", {message: "Logout com sucesso", type: "sucess" });
    }
  };

  return (
    <header className="headerContainer">
      <div className="headerContent">
        <img src={logoImage} alt="logo empresa Intelitrader" />

        <IconButton label="Logout" edge="end" onClick={handleLogOut}>
          <img src={exitIcon} alt="Icone sair" />
        </IconButton>
      </div>
    </header>
  );
}
