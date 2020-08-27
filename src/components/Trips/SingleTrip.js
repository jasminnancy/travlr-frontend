import React from 'react'
import { Card, Image, Grid, List, Message } from 'semantic-ui-react'

const SingleTrip = (props) => {
    return (
        <Card.Group>
            <Card fluid onClick={() => props.handleTripClick(props.trip)}>
                <Card.Content>
                    <Grid>
                        <Grid.Column width={3} verticalAlign='bottom' textAlign='left'>
                            <List divided relaxed>
                                <List.Item>
                                    <List.Icon color='black' name='money bill alternate outline' size='large' /> ${props.trip.budget}
                                </List.Item>
                                <List.Item>
                                    <List.Icon color='black' name='sign in' size='large' /> 
                                        {props.formatDate 
                                            ? props.formatDate(props.trip.start_date) 
                                                : props.trip.start_date}
                                </List.Item>
                                <List.Item>
                                    <List.Icon color='black' name='sign out' size='large' /> 
                                        {props.formatDate 
                                            ? props.formatDate(props.trip.end_date) 
                                                : props.trip.end_date}
                                </List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={9}>
                            <Card.Header as='h3'>{props.trip.title}</Card.Header>
                            <Message size='large' className='trip-description'>
                                {props.trip.description}
                            </Message>
                        </Grid.Column>
                        <Grid.Column width={4} verticalAlign='bottom'>
                            <Image src={props.trip.photo} />
                        </Grid.Column>
                    </Grid>
                </Card.Content>
            </Card>
        </Card.Group>
    )
}

export default SingleTrip