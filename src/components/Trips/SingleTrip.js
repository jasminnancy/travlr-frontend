import React from "react";
import history from "../Shared/history";

//components
import { formatDate } from "../Shared/utils";

//styling
import { Card, Image, Grid, List, Message } from "semantic-ui-react";

const SingleTrip = (props) => {
  const { trip } = props;

  return (
    <Card.Group style={{ minHeight: "175px" }}>
      <Card fluid onClick={() => history.push(`/trips/${trip.id}`)}>
        <Card.Content>
          <Grid>
            <Grid.Column
              width={3}
              verticalAlign="bottom"
              style={{ marginBlockEnd: "auto", paddingTop: "8.5%" }}
              textAlign="left"
            >
              <List divided relaxed>
                <List.Item>
                  <List.Icon
                    color="black"
                    name="money bill alternate outline"
                    size="large"
                    style={{ marginBottom: "3px" }}
                  />{" "}
                  ${trip.budget}
                </List.Item>
                <List.Item style={{ paddingTop: "10px", marginBottom: "5px" }}>
                  <List.Icon color="black" name="sign in" size="large" />
                  {formatDate(trip.start_date)}
                </List.Item>
                <List.Item style={{ paddingTop: "10px" }}>
                  <List.Icon color="black" name="sign out" size="large" />
                  {formatDate(trip.end_date)}
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={9}>
              <Card.Header as="h3">{trip.title}</Card.Header>
              <Message
                size="large"
                style={{ height: "125px", overflow: "hidden" }}
              >
                {trip.description}
              </Message>
            </Grid.Column>
            <Grid.Column
              width={4}
              verticalAlign="bottom"
              style={{ margin: "auto" }}
            >
              <Image src={trip.photo} />
            </Grid.Column>
          </Grid>
        </Card.Content>
      </Card>
    </Card.Group>
  );
};

export default SingleTrip;
