import React from "react";
import history from "../Shared/history";

//utils
import { formatDate, handleDelete } from "../Shared/utils";

//components
import AddButton from "../Shared/AddButton";
import AddBagButton from "./AddBagButton";
import TripEditModal from "./TripEditModal";
import TripDeleteModal from "./TripDeleteModal";
import TransportChip from "../Shared/Chips/TransportChip";
import HotelChip from "../Shared/Chips/HotelChip";
import PlaceChip from "../Shared/Chips/PlaceChip";
import EventChip from "../Shared/Chips/EventChip";
import BagChip from "../Shared/Chips/BagChip";

//styling
import { Button, Card, Grid, Image, Message, List } from "semantic-ui-react";

const SingleTripDetails = (props) => {
  const { activeUser, setActiveUser, trip, setTrip } = props;

  const handleGoBack = () => {
    setTrip(null);
    history.push("/trips");
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
                <Grid.Column width={4}>
                  <TripEditModal
                    trip={trip}
                    setTrip={setTrip}
                    activeUser={activeUser}
                    setActiveUser={setActiveUser}
                  />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row textAlign="left">
                <Grid.Column width={11}>
                  <Message size="large" style={{ height: "100%" }}>
                    {trip.description || "No Description Added..."}
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
                      content="Transportation"
                      style={{ marginTop: "2.5px", marginLeft: "40px" }}
                    />
                    {trip.transportations ? (
                      trip.transportations.map((transport, i) => (
                        <TransportChip
                          key={i}
                          trip={trip}
                          setTrip={setTrip}
                          transport={transport}
                          transportEdit={props.transportEdit}
                          handleDelete={handleDelete}
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
                        <HotelChip
                          key={i}
                          trip={trip}
                          setTrip={setTrip}
                          hotel={hotel}
                          hotelEdit={props.hotelEdit}
                          handleDelete={handleDelete}
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
                        <PlaceChip
                          key={i}
                          trip={trip}
                          setTrip={setTrip}
                          place={place}
                          placeEdit={props.placeEdit}
                          handleDelete={handleDelete}
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
                        <EventChip
                          key={i}
                          trip={trip}
                          setTrip={setTrip}
                          event={event}
                          eventEdit={props.eventEdit}
                          handleDelete={handleDelete}
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
                      trip={trip}
                      setTrip={setTrip}
                    />
                    <Message.Header
                      content="Bags"
                      style={{ marginTop: "2.5px", marginLeft: "40px" }}
                    />
                    {trip.carryons ? (
                      trip.carryons.map((carryon, i) => (
                        <BagChip key={i} luggage={carryon.luggage} />
                      ))
                    ) : (
                      <br />
                    )}
                  </Message>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={16}>
                  <TripDeleteModal
                    handleTripDelete={handleTripDelete}
                    trip={trip}
                  />
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
