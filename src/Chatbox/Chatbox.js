import React from "react";
import { Widget, addResponseMessage } from "react-chat-widget";
import "./Chatbox.css";

export default class Chatbox extends React.Component {
  componentDidMount() {
    addResponseMessage("Welcome to this awesome chat!");
  }
  handleNewUserMessage = newMessage => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
  };
  render() {
    return (
      <div className="Chatbox">
        <Widget handleNewUserMessage={this.handleNewUserMessage} />
      </div>
    );
  }
}
