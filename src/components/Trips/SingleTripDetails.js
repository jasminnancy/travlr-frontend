import React from "react";
import history from "../Shared/history";

//components
import AddButton from "../Shared/AddButton";
import AddBagButton from "./AddBagButton";
import TripEditModal from "./TripEditModal";
import TransportTiny from "../TransportTiny";
import HotelTiny from "../HotelTiny";
import PlaceTiny from "../PlaceTiny";
import EventTiny from "../EventTiny";
import BagTiny from "../BagTiny";
import { formatDate } from "../Shared/utils";

//styling
import { Button, Card, Grid, Image, Message, List } from "semantic-ui-react";

const SingleTripDetails = (props) => {
  const { activeUser, setActiveUser, trip, setTrip } = props;

  const handleGoBack = () => {
    setTrip(null);
    history.push("/trips");
  };

  const createCarryOn = (bagId) => {
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
        let updatedTrip = {
          ...trip,
          carryons: {
            ...trip.carryons,
            data,
          },
        };

        setTrip(updatedTrip);
      });
  };

  const handleUpdate = (name, newItem) => {
    let updatedNestedItem = trip[`${name}`]
      ? [...trip[`${name}`], newItem]
      : [newItem];
    let updatedTrip = {
      ...trip,
      [name]: updatedNestedItem,
    };

    setTrip(updatedTrip);
  };

  const handleTripDelete = (trip) => {
    fetch(`http://localhost:3000/trips/${trip.id}`, {
      method: "DELETE",
    }).then((resp) => resp.json());

    let updatedTrips = activeUser.trips.filter((t) => t.id !== trip.id);

    setActiveUser({
      ...activeUser,
      trips: updatedTrips,
    });
    handleGoBack();
  };

  if (!trip) return null;

  return (
    <div>
      <Button fluid onClick={handleGoBack}>
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
                  <Card.Header as="h3">{trip.title}</Card.Header>
                </Grid.Column>
                <Grid.Column width={4} />
              </Grid.Row>

              <Grid.Row textAlign="left">
                <Grid.Column width={11}>
                  <Message size="large" style={{ height: "100%" }}>
                    {trip.description}
                  </Message>
                </Grid.Column>
                <Grid.Column width={5}>
                  <Image src={trip.photo} />
                  <List divided relaxed>
                    <List.Item>
                      <div className="padding">
                        <List.Icon
                          color="black"
                          name="money bill alternate outline"
                          size="large"
                        />{" "}
                        ${trip.budget}
                      </div>
                    </List.Item>
                    <List.Item>
                      <div className="padding">
                        <List.Icon color="black" name="sign in" size="large" />{" "}
                        {formatDate(trip.start_date)}
                      </div>
                    </List.Item>
                    <List.Item>
                      <div className="padding">
                        <List.Icon color="black" name="sign out" size="large" />{" "}
                        {formatDate(trip.end_date)}
                      </div>
                    </List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row columns={2}>
                <Grid.Column>
                  <Message>
                    <AddButton
                      name="transportations"
                      id={trip.id}
                      handleUpdate={handleUpdate}
                    />
                    <Message.Header
                      content="Flights/Transportation"
                      style={{ marginTop: "2.5px", marginLeft: "40px" }}
                    />
                    {trip.transportations ? (
                      trip.transportations.map((transport, i) => (
                        <TransportTiny
                          key={i}
                          transport={transport}
                          transportEdit={props.transportEdit}
                          handleDeletedTransport={props.handleDeletedTransport}
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
                      name="hotels"
                      id={trip.id}
                      handleUpdate={handleUpdate}
                    />
                    <Message.Header
                      content="Hotels"
                      style={{ marginTop: "2.5px", marginLeft: "40px" }}
                    />
                    {trip.hotels ? (
                      trip.hotels.map((hotel, i) => (
                        <HotelTiny
                          key={i}
                          hotel={hotel}
                          hotelEdit={props.hotelEdit}
                          handleDeletedHotel={props.handleDeletedHotel}
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
                      name="places"
                      id={trip.id}
                      handleUpdate={handleUpdate}
                    />
                    <Message.Header
                      content="Places"
                      style={{ marginTop: "2.5px", marginLeft: "40px" }}
                    />
                    {trip.places ? (
                      trip.places.map((place, i) => (
                        <PlaceTiny
                          key={i}
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
                      name="events"
                      id={trip.id}
                      handleUpdate={handleUpdate}
                    />
                    <Message.Header
                      content="Events"
                      style={{ marginTop: "2.5px", marginLeft: "40px" }}
                    />
                    {trip.events ? (
                      trip.events.map((event, i) => (
                        <EventTiny
                          key={i}
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
                      bags={activeUser.luggages}
                      createCarryOn={createCarryOn}
                    />
                    <Message.Header
                      content="Bags"
                      style={{ marginTop: "2.5px", marginLeft: "40px" }}
                    />
                    {trip.carryons ? (
                      trip.carryons.map((bag, i) => (
                        <BagTiny key={i} bag={bag} />
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
                      <TripEditModal trip={trip} setTrip={setTrip} />
                    </List.Item>
                    <List.Item onClick={() => handleTripDelete(trip)}>
                      <a>Delete</a>
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

export default SingleTripDetails;
