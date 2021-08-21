import React from "react";

//styling
import { Card, Header } from "semantic-ui-react";

const BagChip = (props) => {
  const { luggage } = props;

  if (!luggage) return null;

  return (
    <Card>
      <Card.Content>
        <Header as="h5">{luggage.name || "Click to Edit"}</Header>
        {luggage.size || "???"} liter {luggage.luggage_type}
      </Card.Content>
    </Card>
  );
};

export default BagChip;
