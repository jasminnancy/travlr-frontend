import React, { useState } from "react";
import { formatDate, formatTime } from "../../Shared/utils";

//styling
import { Segment, Header, Modal, Form, Grid, Icon } from "semantic-ui-react";

const TransportChip = (props) => {
  const { trip, transport, transportEdit, handleDelete } = props;
  const [values, setValues] = useState({
    name: transport.name,
    transport_type: transport.transport_type,
    company: transport.company,
    cost: transport.cost,
    starting_date: transport.starting_date,
    starting_time: transport.starting_time,
    ending_date: transport.ending_date,
    ending_time: transport.ending_time,
    starting_location: transport.starting_location,
    destination: transport.destination,
    total_miles: transport.total_miles,
    confirmation_code: transport.confirmation_code,
    notes: transport.notes,
  });

  let iconName;
  if (transport.transport_type === "Flight") {
    iconName = "plane";
  } else if (transport.transport_type === "Other") {
    iconName = "rocket";
  } else {
    iconName = transport.transport_type
      ? transport.transport_type.toLowerCase()
      : "plane";
  }

  const handleChange = (e) => {
    if (e.currentTarget.id === "transport_type") {
      setValues({
        transport_type: e.currentTarget.innerText,
      });
    } else {
      setValues({
        [e.target.id]: e.target.value,
      });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    transportEdit(transport, values);
  };

  return (
    <Modal
      size="small"
      dimmer="blurring"
      trigger={
        <Segment raised>
          <Header as="h4">{transport.name}</Header>
          <br />
          <Grid columns={3} divided>
            <Grid.Row>
              <Grid.Column>
                <b>
                  <u>Details</u>
                </b>{" "}
                <br />
                <Icon name={iconName} /> {transport.total_miles} mi. <br />$
                {transport.cost}
                <br />
                {transport.company}
              </Grid.Column>
              <Grid.Column>
                <b>
                  <u>Start Date</u>
                </b>{" "}
                <br />
                {formatDate(transport.starting_date)} <br />
                {formatTime(transport.starting_time)}
              </Grid.Column>
              <Grid.Column>
                <b>
                  <u>End Date</u>
                </b>{" "}
                <br />
                {formatDate(transport.ending_date)} <br />
                {formatTime(transport.ending_time)}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      }
      closeIcon
      closeOnDimmerClick
    >
      <Modal.Header>{transport.name}</Modal.Header>
      <Modal.Content>
        <Form onSubmit={submitHandler} onChange={handleChange}>
          <Form.Input width="16" id="name" label="Name" value={values.name} />
          <Form.Group>
            <Form.Input
              width="10"
              id="company"
              label="Company"
              value={values.company}
            />
            <Form.Select
              width="6"
              label="Type"
              options={options}
              placeholder={
                transport.transport_type ? transport.transport_type : "Type..."
              }
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              width="4"
              id="starting_date"
              label="Start Date"
              type="date"
              value={values.starting_date}
            />
            <Form.Input
              width="4"
              id="starting_time"
              label="Start Time"
              type="time"
              value={values.starting_time}
            />
            <Form.Input
              width="4"
              id="ending_date"
              label="End Date"
              type="date"
              value={values.ending_date}
            />
            <Form.Input
              width="4"
              id="ending_time"
              label="End Time"
              type="time"
              value={values.ending_time}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              width="8"
              id="starting_location"
              label="Starting City"
              value={values.starting_location}
            />
            <Form.Input
              width="8"
              id="destination"
              label="Destination"
              value={values.destination}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              width="6"
              id="confirmation_code"
              label="Trip Confirmation Code"
              value={values.confirmation_code}
            />
            <Form.Input
              width="5"
              id="cost"
              label="Total Cost"
              type="number"
              value={values.cost}
            />
            <Form.Input
              width="5"
              id="total_miles"
              label="Total Miles"
              type="number"
              value={values.total_miles}
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
          onClick={(e) =>
            handleDelete(e, transport, "transports", "transports", trip)
          }
        >
          Delete
        </a>
        <br />
      </Modal.Content>
    </Modal>
  );
};

const options = [
  { id: "transport_type", text: "Flight", value: "flight" },
  { id: "transport_type", text: "Bus", value: "bus" },
  { id: "transport_type", text: "Car", value: "car" },
  { id: "transport_type", text: "Train", value: "train" },
  { id: "transport_type", text: "Other", value: "other" },
];

export default TransportChip;
