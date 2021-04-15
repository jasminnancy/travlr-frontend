import React from "react";
import TransportTiny from "./TransportTiny";
import HotelTiny from "./HotelTiny";
import PlaceTiny from "./PlaceTiny";
import EventTiny from "./EventTiny";
import BagTiny from "./BagTiny";
import {
  Button,
  Card,
  Grid,
  Image,
  Message,
  List,
  Icon,
  Modal,
  Form,
} from "semantic-ui-react";

const SingleTripDetails = (props) => {
  return (
    <div>
      <Button fluid onClick={props.handleBackClick}>
        Go Back
      </Button>
      <br />
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Grid>
              <Grid.Row>
                <Grid.Column width={3} />
                <Grid.Column width={9}>
                  <Card.Header as="h3">{props.trip.title}</Card.Header>
                </Grid.Column>
                <Grid.Column width={4} />
              </Grid.Row>

              <Grid.Row textAlign="left">
                <Grid.Column width={11}>
                  <Message size="large" className="trip-details">
                    {props.trip.description}
                  </Message>
                </Grid.Column>
                <Grid.Column width={5}>
                  <Image src={props.trip.photo} />
                  <List divided relaxed>
                    <List.Item>
                      <div className="padding">
                        <List.Icon
                          color="black"
                          name="money bill alternate outline"
                          size="large"
                        />{" "}
                        ${props.trip.budget}
                      </div>
                    </List.Item>
                    <List.Item>
                      <div className="padding">
                        <List.Icon color="black" name="sign in" size="large" />{" "}
                        {props.formatDate(props.trip.start_date)}
                      </div>
                    </List.Item>
                    <List.Item>
                      <div className="padding">
                        <List.Icon color="black" name="sign out" size="large" />{" "}
                        {props.formatDate(props.trip.end_date)}
                      </div>
                    </List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row columns={2}>
                <Grid.Column>
                  <Message>
                    <AddButton
                      trip={props.trip}
                      name="transportations"
                      handleTripUpdatedEvents={props.handleTripUpdatedEvents}
                    />
                    <Message.Header content="Flights/Transportation" />
                    {props.trip.transportations.length > 0 ? (
                      props.trip.transportations.map((transport) => (
                        <TransportTiny
                          key={transport.id}
                          transport={transport}
                          transportEdit={props.transportEdit}
                          handleDeletedTransport={props.handleDeletedTransport}
                          formatTime={props.formatTime}
                          formatDate={props.formatDate}
                        />
                      ))
                    ) : (
                      <br />
                    )}
                  </Message>
                </Grid.Column>

                <Grid.Column>
                  <Message>
                    <AddButton
                      trip={props.trip}
                      name="hotels"
                      handleTripUpdatedEvents={props.handleTripUpdatedEvents}
                    />
                    <Message.Header content="Hotels" />
                    {props.trip.hotels.length > 0 ? (
                      props.trip.hotels.map((hotel) => (
                        <HotelTiny
                          key={hotel.id}
                          hotel={hotel}
                          hotelEdit={props.hotelEdit}
                          handleDeletedHotel={props.handleDeletedHotel}
                          formatTime={props.formatTime}
                          formatDate={props.formatDate}
                        />
                      ))
                    ) : (
                      <br />
                    )}
                  </Message>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row columns={3}>
                <Grid.Column>
                  <Message>
                    <AddButton
                      trip={props.trip}
                      name="places"
                      handleTripUpdatedEvents={props.handleTripUpdatedEvents}
                    />
                    <Message.Header content="Places" />
                    {props.trip.places.length > 0 ? (
                      props.trip.places.map((place) => (
                        <PlaceTiny
                          key={place.id}
                          place={place}
                          placeEdit={props.placeEdit}
                          handleDeletedPlace={props.handleDeletedPlace}
                          formatTime={props.formatTime}
                        />
                      ))
                    ) : (
                      <br />
                    )}
                  </Message>
                </Grid.Column>

                <Grid.Column>
                  <Message>
                    <AddButton
                      trip={props.trip}
                      name="events"
                      handleTripUpdatedEvents={props.handleTripUpdatedEvents}
                    />
                    <Message.Header content="Events" />
                    {props.trip.events.length > 0 ? (
                      props.trip.events.map((event) => (
                        <EventTiny
                          key={event.id}
                          event={event}
                          eventEdit={props.eventEdit}
                          handleDeletedEvent={props.handleDeletedEvent}
                          formatTime={props.formatTime}
                        />
                      ))
                    ) : (
                      <br />
                    )}
                  </Message>
                </Grid.Column>

                <Grid.Column>
                  <Message>
                    <AddBagButton
                      trip={props.trip}
                      name="carryons"
                      createCarryOn={props.createCarryOn}
                      handleTripUpdatedEvents={props.handleTripUpdatedEvents}
                    />
                    <Message.Header content="Bags" />
                    {props.trip.carryons.length > 0 ? (
                      props.trip.carryons.map((bag) => (
                        <BagTiny key={bag.id} bag={bag} />
                      ))
                    ) : (
                      <br />
                    )}
                  </Message>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={16}>
                  <List divided horizontal>
                    <List.Item>
                      <EditModal
                        trip={props.trip}
                        handleTripEditClick={props.handleTripEditClick}
                      />
                    </List.Item>
                    <List.Item>
                      <a
                        href=""
                        onClick={(e) => {
                          props.handleDeleteClick(e, props.trip);
                        }}
                      >
                        Delete
                      </a>
                    </List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
};

class EditModal extends React.Component {
  constructor() {
    super();

    this.state = {
      title: "",
      budget: 0,
      description: "",
      start_date: "",
      end_date: "",
      photo: "",
      miles: 0,
    };
  }

  componentDidMount() {
    let tripCopy = { ...this.props.trip };

    this.setState({
      title: tripCopy.title,
      budget: tripCopy.budget,
      description: tripCopy.description,
      start_date: tripCopy.start_date,
      end_date: tripCopy.end_date,
      photo: tripCopy.photo,
      miles: tripCopy.miles,
    });
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    let selectedTrip = { ...this.props.trip };
    this.props.handleTripEditClick(selectedTrip, this.state);
  };

  render() {
    return (
      <Modal
        size="small"
        dimmer="blurring"
        trigger={<a href="">Edit Trip Info</a>}
        closeIcon
        closeOnDimmerClick
      >
        <Modal.Header>{this.props.trip.title}</Modal.Header>
        <Modal.Content>
          <Form
            onSubmit={(e) => this.submitHandler(e)}
            onChange={(e) => this.changeHandler(e)}
          >
            <Form.Group>
              <Form.Input
                width="11"
                id="title"
                label="Trip Title"
                value={this.state.title}
              />
              <Form.Input
                width="5"
                id="budget"
                label="Budget"
                type="number"
                value={this.state.budget}
              />
            </Form.Group>
            <Form.TextArea
              id="description"
              label="Description"
              value={this.state.description}
            />
            <Form.Group>
              <Form.Input
                id="start_date"
                label="Start Date"
                type="date"
                value={this.state.start_date}
              />
              <Form.Input
                id="end_date"
                label="End Date"
                type="date"
                value={this.state.end_date}
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
  }
}

const AddButton = (props) => {
  const createNewItem = () => {
    fetch(`http://localhost:3000/${props.name}`, {
      method: "POST",
      body: JSON.stringify({
        trip_id: props.trip.id,
        name: "Click to Edit",
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => props.handleTripUpdatedEvents(props.name, data));
  };

  return (
    <Button
      onClick={() => createNewItem(props)}
      icon
      compact
      basic
      floated="left"
      size="mini"
    >
      <Icon name="plus" />
    </Button>
  );
};

class AddBagButton extends React.Component {
  constructor() {
    super();

    this.state = {
      bags: [],
      bag_id: "",
    };
  }

  options = [];

  fetchBags = () => {
    fetch("http://localhost:3000/luggages")
      .then((resp) => resp.json())
      .then((data) => {
        let bags = data.filter(
          (bag) => bag.user_id === parseInt(localStorage.current_user_id)
        );
        bags.forEach((bag) =>
          this.options.push({
            id: bag.id,
            text: `${bag.name} - ${bag.luggage_type}`,
            value: bag.name,
          })
        );
      });
  };

  handleChange = (e) => {
    this.setState({
      bag_id: e.currentTarget.id,
    });
  };

  render() {
    this.fetchBags();
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
          <Form
            onSubmit={() =>
              this.props.createCarryOn(this.state.bag_id, this.props.trip.id)
            }
          >
            <Form.Select
              fluid
              label="Select a Bag"
              onChange={(e) => this.handleChange(e)}
              options={this.options}
            />
            <Form.Button type="submit" floated="right">
              Submit
            </Form.Button>
            <br />
            <br />
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

export default SingleTripDetails;
