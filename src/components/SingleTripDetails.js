import React from 'react'
import TransportTiny from './TransportTiny'
import HotelTiny from './HotelTiny'
import PlaceTiny from './PlaceTiny'
import EventTiny from './EventTiny'
import BagTiny from './BagTiny'
import { Button, Card, Grid, Image, Message, List, Icon, Modal, Form } from 'semantic-ui-react'

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
                                        {props.trip.transportations.length > 0 ? props.trip.transportations.map(transport => <TransportTiny key={transport.id}/>) : <br/> }
                                    </Message>
                                </Grid.Column>

                                <Grid.Column >
                                    <Message>
                                        <AddButton trip={props.trip}/>
                                        <Message.Header content='Hotels'/>
                                        {props.trip.hotels.length > 0 ? props.trip.hotels.map(hotel => <HotelTiny key={hotel.id}/>) : <br/> }
                                    </Message>
                                </Grid.Column>
                            </Grid.Row>

                            <Grid.Row columns={3}>
                                <Grid.Column >
                                    <Message>
                                        <AddButton />
                                        <Message.Header content='Places'/>
                                        {props.trip.places.length > 0 ? props.trip.places.map(place => <PlaceTiny key={place.id}/>) : <br/> }
                                    </Message>
                                </Grid.Column>

                                <Grid.Column >
                                    <Message>
                                        <AddButton />
                                        <Message.Header content='Events'/>
                                        {props.trip.events.length > 0 ? props.trip.events.map(event => <EventTiny key={event.id}/>) : <br/> }
                                    </Message>
                                </Grid.Column>

                                <Grid.Column >
                                    <Message>
                                        <AddButton />
                                        <Message.Header content='Bags'/>
                                        {props.trip.carryons.length > 0 ? props.trip.carryons.map(bag => <BagTiny key={bag.id} bag={bag}/>) : <br/> }
                                    </Message>
                                </Grid.Column>
                            </Grid.Row>

                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <List divided horizontal>
                                        <List.Item><EditModal trip={props.trip} handleTripEditClick={props.handleTripEditClick}/></List.Item>
                                        <List.Item><a href='' onClick={(e) => {props.handleDeleteClick(e, props.trip)}}>Delete</a></List.Item>
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

class EditModal extends React.Component {
    constructor () {
        super ()

        this.state = {
            title: '',
            budget: 0,
            description: '',
            start_date: '',
            end_date: '',
            photo: ''
        }
    }

    componentDidMount () {
        let tripCopy = {...this.props.trip}

        this.setState({
            title: tripCopy.title,
            budget: tripCopy.budget,
            description: tripCopy.description,
            start_date: tripCopy.start_date,
            end_date: tripCopy.end_date,
            photo: tripCopy.photo
        })
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        let selectedTrip = {...this.props.trip}
        this.props.handleTripEditClick(selectedTrip, this.state)
    }

    render () {
        return (
            <Modal 
                size='small'
                dimmer='blurring'
                trigger={<a href='#'>Edit Trip Info</a>}
                closeIcon
                closeOnDimmerClick
            >
                <Modal.Header>
                    {this.props.trip.title}
                </Modal.Header>
                <Modal.Content>
                    <Form 
                        onSubmit={(e) => this.submitHandler(e)}
                        onChange={(e) => this.changeHandler(e)}
                        >
                        <Form.Group>
                            <Form.Input width='11' id='title' label='Trip Title' value={this.state.title}/>
                            <Form.Input width='5' id='budget' label='Budget' type='number' value={this.state.budget}/>
                        </Form.Group>
                        <Form.TextArea id='description' label='Description' value={this.state.description}/>
                        <Form.Group>
                            <Form.Input id='start_date' label='Start Date' type='date' value={this.state.start_date}/>
                            <Form.Input id='end_date' label='End Date' type='date' value={this.state.end_date}/>
                            <Form.Input id='photo' label='Photo URL' />
                        </Form.Group>
                        <Form.Button type='submit' floated='right' >Submit</Form.Button>
                    </Form><br/><br/>
                </Modal.Content>
            </Modal>
        )
    }
}

const AddButton = () => {
    return (
        <Button icon compact basic floated='left' size='mini'>
            <Icon name='plus'/>
        </Button>
    )
}

export default SingleTripDetails