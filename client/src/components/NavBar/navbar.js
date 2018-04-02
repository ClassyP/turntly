import React from "react";
import "./Navbar.css";
import logo from "./logo.png";

function Brand () {
  return <img src={logo} alt="Logo" />;
}

const Navbar = () => (
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /><span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="/" className="navbar-brand">
          Turntly
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
