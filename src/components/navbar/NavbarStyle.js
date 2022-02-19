import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../globalStyles";

// Nav Parent

export const Nav = styled.nav`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
`;

export const NavSection = styled(Container)`
  height: 80px;
  padding: 1rem 2rem;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

//  Brand Group
export const BrandGroup = styled.div`
  display: flex;
  align-items: center;
  z-index: 9;
`;

export const Logo = styled.img`
  width: 50px;
  padding: 2px;
`;

export const BrandText = styled.h1`
  color: white;
  letter-spacing: 1px;
  font-weight: 500;
  font-size: 2rem;
`;

//Links
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 2.5rem;
  @media screen and (max-width: 968px) {
    position: fixed;
    width: 100%;
    height: 100vh;
    opacity: ${({ show }) => (show ? 1 : 0)};
    visibility: ${({ show }) => (show ? "visible" : "hidden")};
    background-color: #41d0e1;
    justify-content: center;
    flex-direction: column;
    row-gap: 3.5rem;
    top: 0;
    left: 0;

    transition: opacity 0.5s ease;
  }
`;

export const NavLinks = styled(Link)`
  color: white;
  letter-spacing: 1px;
  font-size: 1.2em;
  z-index: 9;

  &:hover {
    color: #dadce0;
  }
`;

//Mobile

export const NavMenuButton = styled.div`
  display: none;
  z-index: 9;
  font-size: 2em;
  font-weight: bold;
  cursor: pointer;

  @media screen and (max-width: 968px) {
    display: block;
  }
`;
