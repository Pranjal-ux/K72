import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Stare from "./components/commons/stare.jsx";
import { BrowserRouter } from "react-router-dom";
import NavContext from "./context/NavContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Stare>
        {/* <NavContext> */}
        <App />
        {/* </NavContext> */}
      </Stare>
    </BrowserRouter>
  </StrictMode>
);
