import React, { createContext } from "react";
import { useState } from "react";

const NavContext = ({ children }) => {
  const NavbarContext = createContext();
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div>
      <NavbarContext.Provider value={{ navOpen, setNavOpen }}>
        {children}
      </NavbarContext.Provider>
    </div>
  );
};

export default NavContext;
