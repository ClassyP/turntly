// Chatbox
import React from "react";
import "./Chatbox.css";
import { Panel } from "react-bootstrap";

function handleClick() {
  alert("this will initialize chatbox");
}

const Chatbox = () => (
  <Panel onClick={handleClick}>
    <Panel.Body id="chatbox">Chatbox</Panel.Body>
  </Panel>
);

export default Chatbox;
