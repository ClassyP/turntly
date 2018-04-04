import React, { Component } from "react";
import "./Index.css";
import Header from "./components/Header";
import Chatcard from "./components/Chatcard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Chatcard />
      </div>
    );
  }
}

export default App;
