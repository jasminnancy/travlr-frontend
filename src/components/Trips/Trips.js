import React, { useEffect, useState } from "react";

//components
import SingleTrip from "./SingleTrip";

//images
import DefaultTripPhoto from "../../photos/default-trip-photo.jpg";

//styling
import { Button, Header } from "semantic-ui-react";

const Trips = (props) => {
  const { activeUser, setActiveUser } = props;
  const [orderedTrips, setOrderedTrips] = useState([]);

  useEffect(() => {
    setOrderedTrips(
      activeUser.trips.sort(
        (a, b) =>
          new Date(b.start_date).setHours(0, 0, 0, 0) -
          new Date(a.start_date).setHours(0, 0, 0, 0)
      )
    );
  }, [activeUser.trips]);

  const createNewTrip = () => {
    fetch("http://localhost:3000/trips/", {
      method: "POST",
      body: JSON.stringify({
        user_id: activeUser.id,
        title: "My New Trip",
        description: "No Description Added...",
        budget: 0,
        photo: DefaultTripPhoto,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        let trips = [data, ...activeUser.trips];
        setActiveUser({
          ...activeUser,
          trips,
        });
      });
  };

  return (
    <div>
      <Button fluid onClick={createNewTrip} content="Create a New Trip" />
      <br />
      {orderedTrips.map((trip) => {
        if (
          !trip.start_date ||
          new Date(trip.start_date).setHours(0, 0, 0, 0) >=
            new Date().setHours(0, 0, 0, 0)
        ) {
          return <SingleTrip key={trip.id} trip={trip} />;
        }
        return null;
      })}
      <div style={{ marginTop: "40px", width: "100%", textAlign: "center" }}>
        <Header size="large">Past Trips</Header>
      </div>
      {orderedTrips.map((trip) => {
        if (
          new Date(trip.start_date).setHours(0, 0, 0, 0) <
          new Date().setHours(0, 0, 0, 0)
        ) {
          return <SingleTrip key={trip.id} trip={trip} />;
        }
        return null;
      })}
    </div>
  );
};

export default Trips;
