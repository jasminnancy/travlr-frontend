import React from 'react'
import TransportTiny from './TransportTiny'
import HotelTiny from './HotelTiny'
import PlaceTiny from './PlaceTiny'
import EventTiny from './EventTiny'
import BagTiny from './BagTiny'
import { Button, Card, Grid, Image, Message, List, Icon } from 'semantic-ui-react'

const SingleTripDetails = (props) => {
    return (
        <div>
            <Button fluid onClick={props.handleBackClick}>
                Go Back
            </Button><br/>
            <Card.Group>
                <Card fluid>
                    <Card.Content>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={3}/>
                                <Grid.Column width={9}>
                                    <Card.Header as='h3'>{props.trip.title}</Card.Header>
                                </Grid.Column>
                                <Grid.Column width={4}/>
                            </Grid.Row>

                            <Grid.Row textAlign='left'>
                                <Grid.Column width={11} >
                                    <Message 
                                        size='large' 
                                        className='trip-details'
                                    > 
                                        {props.trip.description}
                                    </Message>
                                </Grid.Column>
                                <Grid.Column width={5}>
                                    <Image src={props.trip.photo}/>
                                    <List divided relaxed>
                                        <List.Item>
                                            <div className='padding'>
                                                <List.Icon 
                                                    color='black' 
                                                    name='money bill alternate outline' 
                                                    size='large'
                                                /> ${props.trip.budget}
                                            </div>
                                        </List.Item>
                                        <List.Item>
                                            <div className='padding'>
                                                <List.Icon 
                                                    color='black' 
                                                    name='sign in' 
                                                    size='large' 
                                                /> {props.trip.start_date}
                                            </div>
                                        </List.Item>
                                        <List.Item>
                                            <div className='padding'>
                                                <List.Icon 
                                                    color='black' 
                                                    name='sign out' 
                                                    size='large' 
                                                /> {props.trip.end_date}
                                            </div>
                                        </List.Item>
                                    </List>
                                </Grid.Column>
                            </Grid.Row>

                            <Grid.Row columns={2}>
                                <Grid.Column>
                                    <Message>
                                        <AddButton/>
                                        <Message.Header content='Flights/Transportation'/>
                                        {props.trip.transportations.length > 0 ? props.trip.transportations.map(transport => <TransportTiny />) : <br/> }
                                    </Message>
                                </Grid.Column>

                                <Grid.Column >
                                    <Message>
                                        <AddButton />
                                        <Message.Header content='Hotels'/>
                                        {props.trip.hotels.length > 0 ? props.trip.hotels.map(hotel => <HotelTiny />) : <br/> }
                                    </Message>
                                </Grid.Column>
                            </Grid.Row>

                            <Grid.Row columns={3}>
                                <Grid.Column >
                                    <Message>
                                        <AddButton />
                                        <Message.Header content='Places'/>
                                        {props.trip.places.length > 0 ? props.trip.places.map(hotel => <PlaceTiny />) : <br/> }
                                    </Message>
                                </Grid.Column>

                                <Grid.Column >
                                    <Message>
                                        <AddButton />
                                        <Message.Header content='Events'/>
                                        {props.trip.events.length > 0 ? props.trip.events.map(hotel => <EventTiny />) : <br/> }
                                    </Message>
                                </Grid.Column>

                                <Grid.Column >
                                    <Message>
                                        <AddButton />
                                        <Message.Header content='Bags'/>
                                        {props.trip.carryons.length > 0 ? props.trip.carryons.map(hotel => <BagTiny />) : <br/> }
                                    </Message>
                                </Grid.Column>
                            </Grid.Row>

                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <List divided horizontal>
                                        <List.Item>Edit Trip Info</List.Item>
                                        <List.Item>Delete</List.Item>
                                    </List>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    )
}

const AddButton = () => {
    return (
        <Button icon compact fitted basic floated='left' size='mini'>
            <Icon name='plus'/>
        </Button>
    )
}

export default SingleTripDetails