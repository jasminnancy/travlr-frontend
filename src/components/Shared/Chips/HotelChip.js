import React, { useState } from "react";
import { formatDate, handleChange } from "../utils";

//styling
import { Segment, Header, Form, Modal, Grid } from "semantic-ui-react";

const HotelChip = (props) => {
  const { trip, hotel, hotelEdit, handleDelete } = props;
  const [values, setValues] = useState({
    name: hotel.name,
    cost: hotel.cost,
    starting_date: hotel.starting_date,
    ending_date: hotel.ending_date,
    address1: hotel.address1,
    address2: hotel.address2,
    city: hotel.city,
    us_state: hotel.us_state,
    zip: hotel.zip,
    country: hotel.country,
    notes: hotel.notes,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    hotelEdit(hotel, values);
  };

  const modalTrigger = (
    <Segment raised>
      <Header as="h4">{hotel.name}</Header>
      <br />
      <Grid columns={3} divided>
        <Grid.Row>
          <Grid.Column>
            <b>
              <u>Details</u>
            </b>{" "}
            <br />${hotel.cost ? hotel.cost : 0}
            <br />
            {hotel.city}
            {hotel.us_state ? ", " + hotel.us_state : ""} <br />
            {hotel.country}
          </Grid.Column>
          <Grid.Column>
            <b>
              <u>Check-In</u>
            </b>{" "}
            <br />
            {formatDate(hotel.starting_date)} <br />
          </Grid.Column>
          <Grid.Column>
            <b>
              <u>Check-Out</u>
            </b>{" "}
            <br />
            {formatDate(hotel.ending_date)} <br />
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
      <Modal.Header>{hotel.name}</Modal.Header>
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
              id="starting_date"
              label="Check-In Date"
              type="date"
              value={values.starting_date}
            />
            <Form.Input
              width="8"
              id="ending_date"
              label="Check-Out Date"
              type="date"
              value={values.ending_date}
            />
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
          onClick={(e) => {
            handleDelete(e, hotel, "hotels", "hotels", trip);
          }}
        >
          Delete
        </a>
        <br />
      </Modal.Content>
    </Modal>
  );
};

export default HotelChip;
