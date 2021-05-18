import React from "react";

//styling
import { Card, Popup, Image, Header } from "semantic-ui-react";

const TripChip = (props) => {
  const { trip } = props;

  return (
    <Card>
      <Popup
        trigger={<Image src={trip.photo} alt={trip.title} />}
        flowing
        hoverable
      >
        <Header as="h4">{trip.title}</Header>
        {trip.description}
      </Popup>
    </Card>
  );
};

export default TripChip;
