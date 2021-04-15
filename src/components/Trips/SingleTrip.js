import React from "react";

//components
import { formatDate } from "../Shared/utils";

//styling
import { Card, Image, Grid, List, Message } from "semantic-ui-react";

const SingleTrip = (props) => {
  const { trip, setSelectedTrip } = props;

  return (
    <Card.Group>
      <Card fluid onClick={() => setSelectedTrip(trip)}>
        <Card.Content>
          <Grid>
            <Grid.Column width={3} verticalAlign="bottom" textAlign="left">
              <List divided relaxed>
                <List.Item>
                  <List.Icon
                    color="black"
                    name="money bill alternate outline"
                    size="large"
                  />{" "}
                  ${trip.budget}
                </List.Item>
                <List.Item>
                  <List.Icon color="black" name="sign in" size="large" />
                  {formatDate(trip.start_date)}
                </List.Item>
                <List.Item>
                  <List.Icon color="black" name="sign out" size="large" />
                  {formatDate(trip.end_date)}
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={9}>
              <Card.Header as="h3">{props.trip.title}</Card.Header>
              <Message size="large" className="trip-description">
                {props.trip.description}
              </Message>
            </Grid.Column>
            <Grid.Column width={4} verticalAlign="bottom">
              <Image src={props.trip.photo} />
            </Grid.Column>
          </Grid>
        </Card.Content>
      </Card>
    </Card.Group>
  );
};

export default SingleTrip;
