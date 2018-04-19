import React from "react";
import {
  Collapse,
  Jumbotron,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import Searchbar from "../Searchbar";
import "./Header.css";
import logo from "./logo.png";
import Loginmodel from "../Loginmodal";
import Typewriter from "../Typewriter";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Jumbotron id="jumboheader">
          <div>
            <Navbar color="faded" light>
              <NavbarBrand href="/" className="mr-auto">
                {" "}
                <img src={logo} alt="" id="logo" responsive />
                <span id="beta">beta v1.4</span>
              </NavbarBrand>
              <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
              <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink href="#">My Account</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/ClassyP/turntly">
                      GitHub
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
          <h1 className="display-3">
            <Typewriter />
          </h1>

          <p className="lead">
            {/* This is a simple hero unit, a simple Jumbotron-style component for
            calling extra attention to featured content or information. */}
          </p>
          <hr className="my-2" />
          <p id="search-key">
            Search for Venues, checkin into events, and see whats Turntly
          </p>
          <p className="lead">
            <Searchbar query={this.props.query} />
          </p>
        </Jumbotron>
      </div>
    );
  }
}
