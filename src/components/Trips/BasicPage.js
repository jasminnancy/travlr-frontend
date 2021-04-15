import React from "react";

//components
import Sidebar from "../Shared/Sidebar";
import SingleTrip from "../Trips/SingleTrip";

//images
import Mountains from "../photos/mountains.jpg";
import Boys from "../photos/boys.jpg";
import Milan from "../photos/italy.jpg";

//styling
import { Dimmer, Segment, Grid, Header, Icon, Button } from "semantic-ui-react";

const BasicPage = () => {
  return (
    <div className="double-centered">
      <Dimmer.Dimmable as={Segment}>
        <Grid>
          <Grid.Column width={4}>
            <Sidebar activeUser={defaultUser} />
          </Grid.Column>
          <Grid.Column width={12}>
            <Button fluid content="Create a New Trip" />
            <br />
            {defaultUser.trips.map((trip, i) => (
              <SingleTrip key={i} trip={trip} />
            ))}
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

const defaultUser = {
  username: "JohnDoe01",
  bio:
    "My name is John and I'm dedicated to travelling to every country in the world!",
  created_at: "2019-11-10 06:06:25",
  trips: [
    {
      id: 1,
      title: "The Mountains",
      miles: 500,
      photo: Mountains,
      budget: 400,
      description:
        "Just a trip to the mountains with my friends! Can't wait to go skiing.",
      start_date: "04/15/2020",
      end_date: "04/18/2020",
    },
    {
      id: 3,
      title: "Boy's Trip",
      miles: 800,
      photo: Boys,
      budget: 1000,
      description: "Boy's trip!!! Time to go biking through the dunes.",
      start_date: "06/28/2020",
      end_date: "07/02/2020",
    },
    {
      id: 4,
      title: "Milan, Italy",
      miles: 6400,
      photo: Milan,
      budget: 2000,
      description:
        "Let's go to Italy and explore Isla Bella and hop over to Copenhagen.",
      start_date: "12/07/2019",
      end_date: "12/18/2019",
    },
  ],
  luggages: ["1", "2", "3", "4", "5"],
};

export default BasicPage;
