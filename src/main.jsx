import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Stare from "./components/commons/stare.jsx";
import { BrowserRouter } from "react-router-dom";
import NavbarContext from "./context/NavbarContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Stare>
        <NavbarContext>
          <App />
        </NavbarContext>
      </Stare>
    </BrowserRouter>
  </StrictMode>
);
