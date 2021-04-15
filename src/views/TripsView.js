import React from "react";

//components
import Sidebar from "../components/Shared/Sidebar";
import BasicPage from "../components/Home/BasicPage";
import Trips from "../components/Trips/Trips";

//styling
import { Grid } from "semantic-ui-react";

const TripsView = (props) => {
  const { activeUser, setActiveUser } = props;

  if (!activeUser) {
    return <BasicPage />;
  }

  return (
    <div className="double-centered">
      <Grid>
        <Grid.Column width={4}>
          <Sidebar activeUser={activeUser} />
        </Grid.Column>
        <Grid.Column width={12}>
          <Trips setActiveUser={setActiveUser} activeUser={activeUser} />
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default TripsView;
