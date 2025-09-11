import React, { createContext, useState } from "react";

const NavbarContext = createContext();
export { NavbarContext };
const NavContext = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <NavbarContext.Provider value={{ navOpen, setNavOpen }}>
      {children}
    </NavbarContext.Provider>
  );
};

export default NavContext;
