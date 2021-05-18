import React, { useState } from "react";
import { handleChange } from "../utils";

//styling
import { Segment, Header, Grid, Form, Modal } from "semantic-ui-react";

const PlaceChip = (props) => {
  const { trip, place, placeEdit, handleDelete, setTrip } = props;
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
    placeEdit(place, values);
  };

  const modalTrigger = (
    <Segment raised>
      <Header as="h4">{place.name}</Header>
      <br />
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <b>
              <u>Cost</u>
            </b>{" "}
            <br />${place.cost || 0}
            <br />
          </Grid.Column>
          <Grid.Column>
            <b>
              <u>Details</u>
            </b>{" "}
            <br />
            {place.city}
            {place.us_state ? ", " + place.us_state : ""} <br />
            {place.country}
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
      <Modal.Header>{place.name}</Modal.Header>
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
          onClick={(e) => handleDelete(e, place, "places", trip, setTrip)}
        >
          Delete
        </a>
        <br />
      </Modal.Content>
    </Modal>
  );
};

export default PlaceChip;
