import React from "react";
import io from "socket.io-client";
import "./Chatbox.css";

export default class Chatbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      message: "",
      messages: []
    };

    this.socket = io(window.location.hostname + ":4000");

    this.socket.on("output", function(data) {
      addMessage(data);
    });

    const addMessage = data => {
      console.log(data);
      this.setState({ messages: [...this.state.messages, data] });
      console.log(this.state.messages);
    };

    this.sendMessage = ev => {
      ev.preventDefault();
      this.socket.emit("input", {
        author: this.state.username,
        message: this.state.message
      });
      this.setState({ message: "" });
    };
  }

  displayMessages = () => {
    if (this.state.message.length > 0)
      return this.state.messages[0].map((message, i) => (
        <div key={i}>
          {message.name}: {message.message}
        </div>
      ));
    else return null;
  };

  render() {
    return (
      <div className="card">
        <div className="card-body" id="chatbox">
          <div className="card-title" id="title">
            Turntly
          </div>
          <hr />
          <div className="messages">{this.displayMessages()}</div>
          <div className="footer">
            <input
              type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={ev => this.setState({ username: ev.target.value })}
              className="form-control"
            />
            <input
              type="text"
              placeholder="Message"
              className="form-control"
              value={this.state.message}
              onChange={ev => this.setState({ message: ev.target.value })}
            />
            <button
              onClick={this.sendMessage}
              className="btn btn-primary form-control"
              id="send"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    );
  }
}
