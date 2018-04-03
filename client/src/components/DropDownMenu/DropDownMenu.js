import React from "react";
import "./DropDownMenu.css";
import { NavDropdown } from "react-bootstrap";
import { MenuItem } from "react-bootstrap";

const DropDownMenu = () => (
  <NavDropdown eventKey={1} title="Hi User" id="basic-nav-dropdown">
    <MenuItem eventKey={1.1}>My Account</MenuItem>
    <MenuItem eventKey={1.2}>History</MenuItem>
    <MenuItem eventKey={1.3}>Something else here</MenuItem>
    <MenuItem divider />
    <MenuItem eventKey={1.4}>Logout</MenuItem>
  </NavDropdown>
);

export default DropDownMenu;
