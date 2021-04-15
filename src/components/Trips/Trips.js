import React from "react";

//components
import SingleTrip from "./SingleTrip";

//images
import DefaultTripPhoto from "../../photos/default-trip-photo.jpg";

//styling
import { Button } from "semantic-ui-react";

const Trips = (props) => {
  const { activeUser, setActiveUser } = props;

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
      {activeUser.trips.map((trip) => (
        <SingleTrip key={trip.id} trip={trip} />
      ))}
    </div>
  );
};

export default Trips;
