import React, { useState, useEffect } from "react";

//components
import Sidebar from "../components/Shared/Sidebar";
import SingleTripDetails from "../components/Trips/SingleTripDetails";

//styling
import { Grid } from "semantic-ui-react";

const SingleTripView = (props) => {
  const { activeUser, setActiveUser } = props;
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    if (activeUser) {
      let id = window.location.pathname.split("/")[2];
      let trip = activeUser.trips.filter((trip) => trip.id.toString() === id);
      setTrip(trip[0]);
    }
  }, [activeUser]);

  if (!activeUser) return null;

  return (
    <div className="double-centered">
      <Grid>
        <Grid.Column width={4}>
          <Sidebar activeUser={activeUser} />
        </Grid.Column>
        <Grid.Column width={12}>
          <SingleTripDetails
            activeUser={activeUser}
            setActiveUser={setActiveUser}
            trip={trip}
            setTrip={setTrip}
          />
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default SingleTripView;
