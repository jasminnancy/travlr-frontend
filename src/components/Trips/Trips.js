import React, { useState } from "react";

//components
import Sidebar from "../Shared/Sidebar";

//images
import Mountains from "../photos/mountains.jpg";
import Boys from "../photos/boys.jpg";
import Milan from "../photos/italy.jpg";
import DefaultTripPhoto from "../photos/default-trip-photo.jpg";

//styling
import { Grid, Dimmer, Segment, Icon, Header, Button } from "semantic-ui-react";

const Trips = (props) => {
  const { activeUser } = props;
  const [selectedTrip, setSelectedTrip] = useState([]);

  return <div></div>;
};

export default Trips;
