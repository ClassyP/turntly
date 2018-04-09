import React, { Component } from 'react';
// import logo from './logo.png';
import './App.css';
import Header from "./Header";
import Chatcard from "./Chatcard";
import Actions from "./Actions";

class App extends Component {
  state = {
   events: [], 
  }

  query = (search) => {
    Actions.getEvents(search)
        .then(res => {
            // console.log(res.data.response.venues);
            const venues = res.data.response.venues;
            this.setState({
              events: venues,
            });
            console.log("App State", this.state);
            // console.log("events", JSON.stringify(events, null, 2));
        });
 
  }

  render() {
    return (
      <div className="App">
        <Header query={this.query} /> 
        <Chatcard />
      </div>
    );
  }
}

export default App;
