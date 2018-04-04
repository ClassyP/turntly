import React from "react";
import "./Header.css";
import logo from "./logo.png";
import DropDownMenu from "../DropDownMenu";
import Searchbar from "../Searchbar";
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
    <Searchbar />
    <Navbar.Collapse>
      <Nav pullRight>
        <DropDownMenu />
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
