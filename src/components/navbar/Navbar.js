import React, { useEffect, useState } from "react";
import {
  BrandGroup,
  BrandText,
  Header,
  Logo,
  MobileMenu,
  Nav,
  NavCenter,
  NavContainer,
  NavIcon,
  NavLinks,
  NavLogo,
  NavMenu,
  NavMenuButton,
  NavSection,
} from "./NavbarStyle";
import { navbarData } from "../../data/NavbarData";
import { Link } from "react-router-dom";

import { IoCloseSharp } from "react-icons/io5";
import { IconContext } from "react-icons";
import { HiMenuAlt3 } from "react-icons/hi";

export const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <IconContext.Provider value={{ color: "white" }}>
      <Nav>
        <NavSection>
          <NavContainer>
            <BrandGroup>
              <Logo src="./images/logo.svg" />
              <BrandText>esignify</BrandText>
            </BrandGroup>

            <NavMenu show={show}>
              {navbarData.map((data,index) => {
                return <NavLinks key={index} to={data.to}>{data.text}</NavLinks>;
              })}
            </NavMenu>
            <NavMenuButton onClick={() => setShow(!show)}>
              {show ? <IoCloseSharp /> : <HiMenuAlt3 />}
            </NavMenuButton>
          </NavContainer>
        </NavSection>
      </Nav>
    </IconContext.Provider>
  );
};
