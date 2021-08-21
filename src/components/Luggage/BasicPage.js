import React from "react";
import { defaultUser } from "../Shared/utils";
import Sidebar from "../Shared/Sidebar";
import BagsContainer from "./BagsContainer";
import { Dimmer, Grid, Header, Icon, Segment } from "semantic-ui-react";

const BasicPage = () => {
  return (
    <div className="main-body double-centered">
      <Dimmer.Dimmable as={Segment}>
        <Grid>
          <Grid.Column width={4}>
            <Sidebar activeUser={defaultUser} />
          </Grid.Column>
          <Grid.Column width={12}>
            <BagsContainer activeUser={defaultUser} />
          </Grid.Column>
        </Grid>

        <Dimmer active={true}>
          <Header inverted as="h2" icon>
            <Icon name="heart" />
            Log in or create an account to access this feature!
          </Header>
        </Dimmer>
      </Dimmer.Dimmable>
    </div>
  );
};

export default BasicPage;
