import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Badge } from 'reactstrap';

const Chatcard = (props) => {
  const venue = props.venue;
  // prefix + size + suffix
  let size = '300x500';
  const imgUrl = venue.images.photos.items[0].prefix + size + venue.images.photos.items[0].suffix;
  return (
    <div>
      <Card id="chatcard" width='318' height='180'>
        <CardImg src={imgUrl} alt="Card image cap" />
        <CardBody>
          <CardTitle>{venue.name}</CardTitle>
          <CardSubtitle>{venue.location.address}</CardSubtitle>
          <CardText>
            {
              venue.categories.map(tag => {
                return (
                  <Badge color="success" pill>{tag.name}</Badge>
                );
              })
            } 
            Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
          <input type="text"></input><Button>send</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Chatcard; 