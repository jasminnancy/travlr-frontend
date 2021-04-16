import React, { useState } from "react";
import history from "../Shared/history";

//styling
import { Modal, Form } from "semantic-ui-react";

const TripEditModal = (props) => {
  const { trip, setTrip, activeUser, setActiveUser } = props;
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({
    title: trip.title,
    budget: trip.budget,
    description: trip.description,
    start_date: trip.start_date,
    end_date: trip.end_date,
    photo: trip.photo,
    miles: trip.miles,
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3000/trips/${trip.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        title: values.title,
        description: values.description,
        budget: values.budget,
        start_date: values.start_date,
        end_date: values.end_date,
        photo: values.photo,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setTrip(data);
        setOpen(false);

        let updatedTrips = activeUser.trips.map((trip) => {
          if (trip.id !== data.id) return trip;
          return data;
        });
        setActiveUser({
          ...activeUser,
          trips: updatedTrips,
        });
      });
  };

  return (
    <Modal
      size="small"
      dimmer="blurring"
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      trigger={<a onClick={() => setOpen(true)}>Edit Trip Info</a>}
      onClose={() => setOpen(false)}
      closeIcon
      closeOnDimmerClick
      open={open}
    >
      <Modal.Header>{trip.title}</Modal.Header>
      <Modal.Content>
        <Form onSubmit={handleSubmit} onChange={handleChange}>
          <Form.Group>
            <Form.Input
              width="11"
              id="title"
              label="Trip Title"
              value={values.title}
            />
            <Form.Input
              width="5"
              id="budget"
              label="Budget"
              type="number"
              value={values.budget}
            />
          </Form.Group>
          <Form.TextArea
            id="description"
            label="Description"
            value={values.description}
          />
          <Form.Group>
            <Form.Input
              id="start_date"
              label="Start Date"
              type="date"
              value={values.start_date}
            />
            <Form.Input
              id="end_date"
              label="End Date"
              type="date"
              value={values.end_date}
            />
            <Form.Input id="photo" label="Photo URL" />
          </Form.Group>
          <Form.Button type="submit" floated="right">
            Submit
          </Form.Button>
        </Form>
        <br />
        <br />
      </Modal.Content>
    </Modal>
  );
};

export default TripEditModal;
