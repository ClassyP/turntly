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
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body" id="chatbox">
                <div className="card-title" id="title">
                  Turntly
                </div>
                <hr />
                <div className="messages">
                  {this.state.messages.map((message, i) => {
                    return (
                      <div key={i}>
                        {message.author}: {message.message}
                      </div>
                    );
                  })}
                </div>
                <div className="footer">
                  <input
                    type="text"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={ev =>
                      this.setState({ username: ev.target.value })
                    }
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
          </div>
        </div>
      </div>
    );
  }
}
