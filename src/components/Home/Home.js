import React from "react";

//components
import Sidebar from "../Shared/Sidebar";

//styling
import { Grid } from "semantic-ui-react";

const Home = ({ activeUser }) => {
  return (
    <div className="double-centered">
      <Grid>
        <Grid.Column width={4}>
          <Sidebar activeUser={activeUser} />
        </Grid.Column>
        <Grid.Column width={12}>Welcome {activeUser.username}!</Grid.Column>
      </Grid>
    </div>
  );
};

export default Home;
