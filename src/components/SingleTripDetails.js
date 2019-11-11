import React from 'react'
import { Button, Card, Grid, Image, Message, List } from 'semantic-ui-react'

const SingleTripDetails = (props) => {
    console.log(props)
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
                        </Grid>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    )
}

export default SingleTripDetails