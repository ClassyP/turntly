import React from "react";
import {
  Button,
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
        <Jumbotron>
          <div>
            <Navbar color="faded" light>
              <NavbarBrand href="/" className="mr-auto">
                reactstrap
              </NavbarBrand>
              <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
              <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink href="/components/">Components</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">
                      GitHub
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
          <h1 className="display-3">Search, Chat, Turntly</h1>
          <p className="lead">
            {/* This is a simple hero unit, a simple Jumbotron-style component for
            calling extra attention to featured content or information. */}
          </p>
          <hr className="my-2" />
          <p>
            It uses utility classes for typgraphy and spacing to space content
            out within the larger container.
          </p>
          <p className="lead">
            <Searchbar query={this.props.query} />
          </p>
        </Jumbotron>
      </div>
    );
  }
}
