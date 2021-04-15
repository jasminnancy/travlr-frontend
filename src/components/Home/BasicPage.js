import React, { useState } from "react";

//images
import MainImage from "../../photos/homepage.jpg";
import Suitcase2 from "../../photos/suitcase2.jpg";
import Event1 from "../../photos/event1.jpg";
import Money1 from "../../photos/money1.jpg";

//styling
import withStyles from "react-jss";
import {
  Image,
  Statistic,
  Icon,
  Grid,
  Segment,
  Header,
} from "semantic-ui-react";

const BasicPage = (props) => {
  const { classes } = props;
  const columns = [
    {
      src: Suitcase2,
      header: "Track",
      subheader: "how far your bags have travelled",
    },
    {
      src: Event1,
      header: "Add",
      subheader: "fun events and places to see",
    },
    {
      src: Money1,
      header: "Budget",
      subheader: "your entire trip automatically",
    },
  ];
  const [raised, setRaised] = useState({ 0: false, 1: false, 2: false });

  return (
    <div>
      <Image src={MainImage} alt="map" />

      <Statistic.Group widths="four" className={classes.statsSpacing}>
        <Statistic>
          <Statistic.Value>800,000</Statistic.Value>
          <Statistic.Label>Miles</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value text>
            one
            <br />
            Hundred
          </Statistic.Value>
          <Statistic.Label>Suitcases</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>
            <Icon name="plane" /> 76{/* props.trips.total */}
          </Statistic.Value>
          <Statistic.Label>Trips</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>42 {/* props.users.total */}</Statistic.Value>
          <Statistic.Label>Members</Statistic.Label>
        </Statistic>
      </Statistic.Group>

      <div className="ui divider"></div>

      <Grid centered columns={3} padded>
        {columns.map((col, i) => (
          <Grid.Column
            key={i}
            onMouseOver={() =>
              setRaised({
                ...raised,
                [i]: true,
              })
            }
            onMouseLeave={() => setRaised({ ...raised, [i]: false })}
          >
            <Segment raised={raised[i]}>
              <Image fluid rounded src={col.src} />
              <Header as="h1" textAlign="center">
                {col.header}
                <Header.Subheader>{col.subheader}</Header.Subheader>
              </Header>
            </Segment>
          </Grid.Column>
        ))}
      </Grid>

      <div className="ui divider"></div>
    </div>
  );
};

const styles = {
  statsSpacing: {
    marginTop: "18px !important",
  },
};

export default withStyles(styles)(BasicPage);
