import React from "react";
import "./Chatcard.css";
import { Panel } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

const Chatcard = () => (
  <Row className="show-grid">
    <div>
      <Row className="show-grid">
        <Col xs={6} md={4}>
          <Panel>
            <Panel.Heading>
              <Panel.Title componentClass="h3">Event 1</Panel.Title>
            </Panel.Heading>
            <Panel.Body>Panel content</Panel.Body>
          </Panel>
        </Col>
        <Col xs={6} md={4}>
          <Panel>
            <Panel.Heading>
              <Panel.Title componentClass="h3">Event 2</Panel.Title>
            </Panel.Heading>
            <Panel.Body>Panel content</Panel.Body>
          </Panel>
        </Col>
        <Col xsHidden md={4}>
          <Panel>
            <Panel.Heading>
              <Panel.Title componentClass="h3">Event 3</Panel.Title>
            </Panel.Heading>
            <Panel.Body>Panel content</Panel.Body>
          </Panel>
        </Col>
      </Row>
    </div>
  </Row>
);

export default Chatcard;
