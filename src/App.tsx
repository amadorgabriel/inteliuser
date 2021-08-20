import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";

import { Header } from "./components/Header";

import "./styles/global.css";

export function App() {
  return (
    <BrowserRouter>
      <div className="global-wrapper">
        <Header />
        <Routes />
      </div>
    </BrowserRouter>
  );
}
