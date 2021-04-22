import React, { useEffect, useState } from "react";

//styling
import { Modal, Button, Icon, Form } from "semantic-ui-react";

const AddBagButton = (props) => {
  const { bags, trip, setTrip } = props;
  const [bagId, setBagId] = useState(null);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (bagId) {
      setDisabled(false);
    }
  }, [bagId]);

  const handleChange = (e) => {
    setBagId(e.currentTarget.id);
  };

  const createCarryOn = () => {
    fetch("http://localhost:3000/carryons", {
      method: "POST",
      body: JSON.stringify({
        luggage_id: bagId,
        trip_id: trip.id,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        debugger;
        let updatedTrip = {
          ...trip,
          carryons: [...trip.carryons, data],
        };

        setTrip(updatedTrip);
      });
  };

  return (
    <Modal
      size="mini"
      dimmer="blurring"
      trigger={
        <Button icon compact basic floated="left" size="mini">
          <Icon name="plus" />
        </Button>
      }
      closeIcon
      closeOnDimmerClick
      onClose={() => setDisabled(true)}
    >
      <Modal.Content>
        <Form onSubmit={createCarryOn}>
          <Form.Select
            fluid
            label="Select a Bag"
            onChange={handleChange}
            options={bags.map((bag) => {
              let alreadyIncluded = trip.carryons.filter(
                (c) => c.luggage.id === bag.id
              );
              return {
                text: `${bag.name} - ${bag.luggage_type}`,
                value: bag.name,
                id: bag.id,
                disabled: alreadyIncluded.length ? true : false,
              };
            })}
          />
          <Form.Button disabled={disabled} type="submit" floated="right">
            Add
          </Form.Button>
          <br />
          <br />
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default AddBagButton;
