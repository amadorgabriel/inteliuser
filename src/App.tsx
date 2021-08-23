import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";

import "./styles/global.css";

export function App() {
  return (
    <BrowserRouter>
      <div className="global-wrapper">
          <Routes />
      </div>
    </BrowserRouter>
  );
}
