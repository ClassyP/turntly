import React from "react";
import "./Chatcard.css";
import event from "./event.png";
import { Panel } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Image } from "react-bootstrap";

// function to bring in event specific info: event photo,location
class EventDetails extends React.Component {
  render() {
    return (
      <div>
        <EventImage />
        <br />Location: <EventLocation />
      </div>
    );
  }
}

// will need custom logic to load in event name dynamically
class Event extends React.Component {
  render() {
    return <div>Event Name</div>;
  }
}

// will need custom logic to load in event location dynamically
class EventLocation extends React.Component {
  render() {
    return <span>The Van Buren</span>;
  }
}

// will need custom logic to load in event image dynamically
class EventImage extends React.Component {
  render() {
    return (
      <div>
        <a href="#">
          <Image src={event} alt="event" responsive />
        </a>
      </div>
    );
  }
}

const Chatcard = () => (
  <Row className="show-grid">
    <div>
      <Row className="show-grid">
        <Col xs={6} md={4}>
          <Panel>
            <Panel.Heading>
              <Panel.Title componentClass="h3">Event 1</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <Event />
              <EventDetails />
            </Panel.Body>
          </Panel>
        </Col>
        <Col xs={6} md={4}>
          <Panel>
            <Panel.Heading>
              <Panel.Title componentClass="h3">Event 2</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <Event />
              <EventDetails />
            </Panel.Body>
          </Panel>
        </Col>
        <Col xsHidden md={4}>
          <Panel>
            <Panel.Heading>
              <Panel.Title componentClass="h3">Event 3</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <Event />
              <EventDetails />
            </Panel.Body>
          </Panel>
        </Col>
      </Row>
    </div>
  </Row>
);

export default Chatcard;
