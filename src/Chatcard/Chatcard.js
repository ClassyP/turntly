import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Badge,
  Col
} from "reactstrap";
import "./Chatcard.css";

const Chatcard = props => {
  const venue = props.venue;
  // prefix + size + suffix
  const size = "300x500";
  const imgUrl =
    venue.images.photos.items[0].prefix +
    size +
    venue.images.photos.items[0].suffix;
  return (
    <Col sm="4">
      <div>
        <Card id="chatcard">
          <CardImg src={imgUrl} alt="Card image cap" />
          <CardBody>
            <CardTitle>{venue.name}</CardTitle>
            <CardSubtitle>{venue.location.address}</CardSubtitle>
            <CardText>
              {venue.categories.map(tag => {
                return (
                  <Badge color="success" pill key={tag.name}>
                    {tag.name}
                  </Badge>
                );
              })}
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <input type="text" />
            <Button>send</Button>
          </CardBody>
        </Card>
      </div>
    </Col>
  );
};

export default Chatcard;
