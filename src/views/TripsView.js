import React, { useState } from "react";

//components
import Trips from "../components/Trips";
import BasicPage from "../components/Shared/BasicPage";

const TripsView = (props) => {
  const { activeUser } = props;
  const [selectedTrip, setSelectedTrip] = useState([]);

  if (!activeUser) {
    return <BasicPage />;
  }

  return (
    <Trips
      selectedTrip={selectedTrip}
      setSelectedTrip={setSelectedTrip}
      activeUser={activeUser}
    />
  );
};

export default TripsView;
