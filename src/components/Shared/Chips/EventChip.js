import React, { useState } from "react";
import { handleChange } from "../utils";

//styling
import { Segment, Header, Grid, Modal, Form } from "semantic-ui-react";

const EventChip = (props) => {
  const { trip, event, eventEdit, handleDelete, setTrip } = props;
  const [values, setValues] = useState({
    name: "",
    cost: 0,
    address1: "",
    address2: "",
    city: "",
    us_state: "",
    zip: "",
    country: "",
    notes: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    eventEdit(event, values);
  };

  const modalTrigger = (
    <Segment raised>
      <Header as="h4">{event.name}</Header>
      <br />
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <b>
              <u>Cost</u>
            </b>{" "}
            <br />${event.cost || 0}
            <br />
          </Grid.Column>
          <Grid.Column>
            <b>
              <u>Details</u>
            </b>{" "}
            <br />
            {event.city}
            {event.us_state ? ", " + event.us_state : ""} <br />
            {event.country}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );

  return (
    <Modal
      size="small"
      dimmer="blurring"
      trigger={modalTrigger}
      closeIcon
      closeOnDimmerClick
    >
      <Modal.Header>{event.name}</Modal.Header>
      <Modal.Content>
        <Form
          onSubmit={handleSubmit}
          onChange={(e) => handleChange(e.target.id, e.target.value, setValues)}
        >
          <Form.Group>
            <Form.Input width="10" id="name" label="Name" value={values.name} />
            <Form.Input width="6" id="cost" label="Cost" value={values.cost} />
          </Form.Group>
          <Form.Group>
            <Form.Input
              width="8"
              id="address1"
              label="Address 1"
              value={values.address1}
            />
            <Form.Input
              width="8"
              id="address2"
              label="Address 2"
              value={values.address2}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input width="6" id="city" label="City" value={values.city} />
            <Form.Input
              width="2"
              id="us_state"
              label="State"
              value={values.us_state}
            />
            <Form.Input width="3" id="zip" label="Zip" value={values.zip} />
            <Form.Input
              width="5"
              id="country"
              label="Country"
              value={values.country}
            />
          </Form.Group>
          <Form.TextArea
            width="16"
            id="notes"
            label="Notes"
            value={values.notes}
          />
          <Form.Button type="submit" floated="right">
            Submit
          </Form.Button>
        </Form>
        <br />
        <a
          href=""
          onClick={(e) => handleDelete(e, event, "events", trip, setTrip)}
        >
          Delete
        </a>
        <br />
      </Modal.Content>
    </Modal>
  );
};

export default EventChip;
