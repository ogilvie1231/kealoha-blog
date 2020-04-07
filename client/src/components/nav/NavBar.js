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
  NavbarText
} from "reactstrap";

import "./NavBar.css";

import { useAuth0 } from "../../react-auth0-spa";

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();



  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="mainNav" color="light" light expand="md">
        <NavbarBrand href="/">
          <img className="logoImg" src="../images/kealohaLogo.png" alt='logo'></img>{" "}
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>

            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/diy">
                DIYs
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">
                Videos
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Trips
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Zion</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
            {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
              {/* <NavLink href="/components/">About</NavLink> */}
            </NavItem>
            <NavItem>
            <NavLink href="/post">Post</NavLink>
            </NavItem>
            

          </Nav>
          <NavbarText></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;

