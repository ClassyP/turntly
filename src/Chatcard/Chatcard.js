import React from "react";
import Chatbox from "../Chatbox";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Badge,
  Col
} from "reactstrap";
import "./Chatcard.css";

const Chatcard = props => {
  const venue = props.venue;
  console.log('venue', venue);
  // prefix + size + suffix
  const size = "300x500";
  let imgUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Emoticon_Face_Frown_GE.png/220px-Emoticon_Face_Frown_GE.png';

  // if there are no images it will break so we check first
  if (venue.images.photos.items.length > 0) {
    imgUrl =
      venue.images.photos.items[0].prefix +
      size +
      venue.images.photos.items[0].suffix;
  }
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
            </CardText>
            <Chatbox />
          </CardBody>
        </Card>
      </div>
    </Col>
  );
};

export default Chatcard;
