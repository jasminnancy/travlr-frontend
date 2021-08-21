import React from "react";
import SingleBag from "../SingleBag";
import { Button, Card } from "semantic-ui-react";

const BagsContainer = (props) => {
  const { activeUser, handleBagClick } = props;
  return (
    <div>
      <Button
        fluid
        onClick={() => props.addNewBag(activeUser)}
        content="Add a New Piece of Luggage"
      />
      <br />
      <Card.Group itemsPerRow={2}>
        {activeUser.luggages.map((bag) => (
          <SingleBag handleBagClick={handleBagClick} bag={bag} />
        ))}
      </Card.Group>
    </div>
  );
};

export default BagsContainer;
