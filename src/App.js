import React, { Component } from "react";
// import logo from './logo.png';
import "./App.css";
import Header from "./Header";
import Chatcard from "./Chatcard";
import Actions from "./Actions";
import { Row } from "reactstrap";
class App extends Component {
  state = {
    venues: []
  };

  query = (search,location) => {
    Actions.getEvents(search, location).then(res => {
      // console.log(res.data.response.venues);
      let venues = res.data.response.venues;

      let promises = venues.map(venue => {
        return Actions.getImages(venue.id);
      });

      let that = this;
      Promise.all(promises).then(function(imagesArray) {
        console.log("imagesArray", imagesArray);
        // put images object inside venue object
        venues.forEach((venue, i) => {
          venue.images = imagesArray[i].data.response;
        });

        that.setState({
          //venues: venues, // same thing
          venues
        });
        console.log("App State", venues);
      });

      // console.log("events", JSON.stringify(events, null, 2));
    });
  };

  render() {
    return (
      <div className="App">
        <Header query={this.query} />
        <Row>
          {this.state.venues.map(venue => {
            return <Chatcard venue={venue} key={venue.id} />;
          })}
        </Row>
      </div>
    );
  }
}

export default App;
