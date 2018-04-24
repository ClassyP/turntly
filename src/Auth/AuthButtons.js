import React, { Component } from "react";
import { Button } from "reactstrap";

class AuthButtons extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }
  render() {
    const isAuthenticated = () => this.props.auth;

    return (
      <div>
        <Button color="secondary" onClick={this.goTo.bind(this, "/")}>
          Home
        </Button>
        {!isAuthenticated() && (
          <Button
            id="qsLoginBtn"
            color="primary"
            onClick={this.login.bind(this)}
          >
            Login
          </Button>
        )}
        {isAuthenticated() && (
          <Button
            id="qsLogoutBtn"
            color="secondary"
            onClick={this.logout.bind(this)}
          >
            Log Out
          </Button>
        )}
      </div>
    );
  }
}

export default AuthButtons;
