import React, { useEffect, useState } from "react";
import { createDate } from "../Shared/utils";

//components
import SingleTrip from "./SingleTrip";

//images
import DefaultTripPhoto from "../../photos/default-trip-photo.jpg";

//styling
import { Button, Header } from "semantic-ui-react";

const Trips = (props) => {
  const { activeUser, setActiveUser } = props;
  const [orderedTrips, setOrderedTrips] = useState([]);
  let today = createDate();

  useEffect(() => {
    setOrderedTrips(
      activeUser.trips.sort(
        (a, b) => createDate(b.start_date) - createDate(a.start_date)
      )
    );
  }, [activeUser.trips]);

  const createNewTrip = () => {
    fetch("http://localhost:3000/trips/", {
      method: "POST",
      body: JSON.stringify({
        user_id: activeUser.id,
        title: "My New Trip",
        description: "",
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
        //returns trips without a date and upcoming trips
        if (!trip.start_date || createDate(trip.start_date) >= today) {
          return <SingleTrip key={trip.id} trip={trip} />;
        }
        return null;
      })}

      <div style={{ marginTop: "40px", width: "100%", textAlign: "center" }}>
        <Header size="large">Past Trips</Header>
      </div>
      {orderedTrips.map((trip) => {
        //ignores trips without a start date
        if (!trip.start_date) return null;

        //only returns trips that are in the past
        if (createDate(trip.start_date) < today) {
          return <SingleTrip key={trip.id} trip={trip} />;
        }
        return null;
      })}
    </div>
  );
};

export default Trips;
