import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

import "./NavBar.css";

import { useAuth0 } from "../../react-auth0-spa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      {!isAuthenticated && (
        <Navbar className="mainNav" color="light" light expand="md">
          <NavbarBrand href="/">
            <img
              className="logoImg"
              src="../images/kealohaLogo.png"
              alt="logo"
            ></img>{" "}
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/diys">DIYs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/videos">Videos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/trips">Trips</NavLink>
              </NavItem>

              {/* <NavItem >
                <NavLink onClick={() => loginWithRedirect({})}>Log in</NavLink>
              </NavItem> */}
            </Nav>
            <NavbarText></NavbarText>
          </Collapse>
        </Navbar>
      )}

      {isAuthenticated && (
        <Navbar className="mainNav" color="light" light expand="md">
          <NavbarBrand href="/p">
            <img
              className="logoImg"
              src="../images/kealohaLogo.png"
              alt="logo"
            ></img>{" "}
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/diysp">DIYs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/videosp">Videos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/tripsp">Trips</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/post">Post</NavLink>
              </NavItem>
              <NavItem onClick={() => logout()}>
                <NavLink>Log out</NavLink>
              </NavItem>
            </Nav>
            <NavbarText></NavbarText>
          </Collapse>
        </Navbar>
      )}
    </div>
  );
};

export default NavBar;
