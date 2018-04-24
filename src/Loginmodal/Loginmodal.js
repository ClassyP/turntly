import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import AuthButtons from "../Auth/AuthButtons";
import logo from "./logo.png";
import "./Loginmodal.css";
import FaChild from "react-icons/lib/fa/child";

class Loginmodel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button id="login-button" onClick={this.toggle}>
          {this.props.buttonLabel}
          <FaChild />
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          id="login-modal"
        >
          <ModalBody>
            <img src={logo} alt="" id="logo" responsive />
          </ModalBody>
          <ModalFooter>
            <AuthButtons />
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Loginmodel;
