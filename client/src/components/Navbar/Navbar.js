import React from "react";
import "./Navbar.css";
import logo from "./logo.png";
import DropDownMenu from "../DropDownMenu";
import { Image, Navbar, Nav } from "react-bootstrap";

const Header = () => (
  <Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#home">
          <Image src={logo} alt="Logo" responsive />
        </a>
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <DropDownMenu />
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
