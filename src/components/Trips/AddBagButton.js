import React, { useState } from "react";

//styling
import { Modal, Button, Icon, Form } from "semantic-ui-react";

const AddBagButton = (props) => {
  const { bags, createCarryOn } = props;
  const [bagId, setBagId] = useState(null);

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
    >
      <Modal.Content>
        <Form onSubmit={() => createCarryOn(bagId)}>
          <Form.Select
            fluid
            label="Select a Bag"
            onChange={(e) => setBagId(e.currentTarget.id)}
            options={bags.map((bag) => ({
              text: `${bag.name} - ${bag.luggage_type}`,
              value: bag.name,
            }))}
          />
          <Form.Button type="submit" floated="right">
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
