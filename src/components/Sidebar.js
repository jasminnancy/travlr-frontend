import React from "react";

//styling
import withStyles from "react-jss";
import { Segment, Menu, Card, Image } from "semantic-ui-react";

const Sidebar = (props) => {
  const { classes, activeUser } = props;
  const joinDate = activeUser.created_at.split("-")[0];
  const totalMiles = activeUser.trips.reduce(
    (total, trip) => total + trip.miles,
    0
  );

  return (
    <Menu vertical fluid borderless className={classes.container}>
      <Card fluid>
        <Image
          src={
            activeUser.profile_pic ||
            "https://react.semantic-ui.com/images/avatar/large/molly.png"
          }
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>{activeUser.username}</Card.Header>
          <Card.Meta>
            <span className="date">Joined in {joinDate}</span>
          </Card.Meta>
          <Card.Description>{activeUser.bio}</Card.Description>
        </Card.Content>
      </Card>

      <Segment>
        <Menu.Header>Total Stats</Menu.Header>

        <Menu.Menu>
          <Menu.Item>Trips: {activeUser.trips.length}</Menu.Item>
          <Menu.Item>Miles: {totalMiles ? totalMiles : 0}</Menu.Item>
          <Menu.Item>Bags: {activeUser.luggages.length} </Menu.Item>
        </Menu.Menu>
      </Segment>
    </Menu>
  );
};

const styles = {
  container: {
    border: "none !important",
    boxShadow: "0px 0px transparent !important",
  },
};

export default withStyles(styles)(Sidebar);
