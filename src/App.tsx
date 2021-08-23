import { Routes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "./contexts/ModalContext";

import "./styles/global.css";

export function App() {
  return (
    <BrowserRouter>
      <div className="global-wrapper">
        <ModalProvider>
          <Routes />
        </ModalProvider>
      </div>
    </BrowserRouter>
  );
}
