import React from 'react'

//components
import {formatDate, formatTime} from '../Shared/utils'
import EditModal from './EditModal'
import TransportTiny from '../Shared/Tiny/TransportTiny'
import HotelTiny from '../Shared/Tiny/HotelTiny'
import PlaceTiny from '../Shared/Tiny/PlaceTiny'
import EventTiny from '../Shared/Tiny/EventTiny'
import BagTiny from '../Shared/Tiny/BagTiny'

//styling
import { 
  Button, 
  Card, 
  Grid, 
  Image, 
  Message, 
  List, 
  Icon, 
  Modal, 
  Form 
} from 'semantic-ui-react'

const SingleTripDetails = (props) => {
  const {
    handleBackClick,
    trip,
    handleTripUpdatedEvents,
    transportEdit,
    handleDeletedTransport,
    hotelEdit,
    handleDeletedHotel,
    placeEdit,
    handleDeletedPlace,
    eventEdit,
    handleDeletedEvent,
    createCarryOn,
    handleTripEditClick,
    handleDeleteClick
  } = props

  return (
    <div>
      <Button fluid onClick={handleBackClick}>
        Go Back
      </Button><br/>
        <Card.Group>
          <Card fluid>
            <Card.Content>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={3}/>
                  <Grid.Column width={9}>
                    <Card.Header as='h3'>{trip.title}</Card.Header>
                  </Grid.Column>
                  <Grid.Column width={4}/>
                </Grid.Row>
                <Grid.Row textAlign='left'>
                  <Grid.Column width={11} >
                    <Message 
                      size='large' 
                      className='trip-details'
                    > 
                      {trip.description}
                    </Message>
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <Image src={trip.photo}/>
                    <List divided relaxed>
                      <List.Item>
                        <div className='padding'>
                          <List.Icon 
                            color='black' 
                            name='money bill alternate outline' 
                            size='large'
                          /> ${trip.budget || 0}
                        </div>
                      </List.Item>
                      <List.Item>
                        <div className='padding'>
                          <List.Icon 
                            color='black' 
                            name='sign in' 
                            size='large' 
                          /> {formatDate(trip.start_date)}
                        </div>
                      </List.Item>
                      <List.Item>
                        <div className='padding'>
                          <List.Icon 
                            color='black' 
                            name='sign out' 
                            size='large' 
                          /> {formatDate(trip.end_date)}
                        </div>
                      </List.Item>
                    </List>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Message>
                  <AddButton 
                    trip={trip} 
                    name='transportations' 
                    handleTripUpdatedEvents={handleTripUpdatedEvents}
                  />
                  <Message.Header content='Flights/Transportation'/>
                  {trip.transportations.length > 0 
                    ? trip.transportations.map(t => <TransportTiny 
                      key={t.id} 
                      transport={t} 
                      transportEdit={transportEdit} 
                      handleDeletedTransport={handleDeletedTransport}
                    />) 
                      : <br/>}
                </Message>
              </Grid.Column>
              <Grid.Column >
                <Message>
                  <AddButton 
                    trip={props.trip} 
                    name='hotels' 
                    handleTripUpdatedEvents={handleTripUpdatedEvents}
                  />
                  <Message.Header content='Hotels'/>
                  {trip.hotels.length > 0 
                    ? trip.hotels.map(h => <HotelTiny 
                        key={h.id} 
                        hotel={h}
                        hotelEdit={hotelEdit}
                        handleDeletedHotel={handleDeletedHotel}
                    />) 
                      : <br/>}
                </Message>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3}>
              <Grid.Column >
                <Message>
                  <AddButton 
                      trip={trip} 
                      name='places' 
                      handleTripUpdatedEvents={handleTripUpdatedEvents}
                  />
                    <Message.Header content='Places'/>
                    {trip.places.length > 0 
                      ? trip.places.map(p => <PlaceTiny 
                          key={p.id} 
                          place={p}
                          placeEdit={placeEdit}
                          handleDeletedPlace={handleDeletedPlace}
                      />) 
                        : <br/> }
                </Message>
              </Grid.Column>
                <Grid.Column >
                  <Message>
                    <AddButton 
                      trip={trip} 
                      name='events' 
                      handleTripUpdatedEvents={handleTripUpdatedEvents}
                    />
                    <Message.Header content='Events'/>
                    {trip.events.length > 0 
                        ? trip.events.map(e => <EventTiny 
                            key={e.id} 
                            event={e}
                            eventEdit={eventEdit}
                            handleDeletedEvent={handleDeletedEvent}
                        />) 
                          : <br/> }
                  </Message>
                </Grid.Column>
                <Grid.Column >
                  <Message>
                    <AddBagButton 
                      trip={trip}
                      name='carryons'
                      createCarryOn={createCarryOn}
                      handleTripUpdatedEvents={handleTripUpdatedEvents}
                    />
                    <Message.Header content='Bags' />
                    {trip.carryons.length > 0 
                      ? trip.carryons.map(b => <BagTiny 
                          key={b.id} 
                          bag={b} 
                      />) 
                        : <br/> }
                  </Message>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={16}>
                  <List divided horizontal>
                    <List.Item>
                      <EditModal 
                        trip={trip} 
                        handleTripEditClick={handleTripEditClick}
                      />
                    </List.Item>
                    <List.Item>
                      <a href='' onClick={(e) => {handleDeleteClick(e, props.trip)}}>
                        Delete
                      </a>
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


const AddButton = (props) => {
    const createNewItem = () => {
        fetch(`http://localhost:3000/${props.name}`, {
            method: 'POST',
            body: JSON.stringify({
                trip_id: props.trip.id,
                name: 'Click to Edit'
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(data => props.handleTripUpdatedEvents(props.name, data))
    }

    return (
        <Button onClick={() => createNewItem(props)} icon compact basic floated='left' size='mini'>
            <Icon name='plus'/>
        </Button>
    )
}

class AddBagButton extends React.Component {
    constructor () {
        super()

        this.state = {
            bags: [],
            bag_id: ''
        }
    }

    options = []

    fetchBags = () => {
        fetch('http://localhost:3000/luggages')
        .then(resp => resp.json())
        .then(data => {
            let bags = data.filter(bag => bag.user_id === parseInt(localStorage.current_user_id))
            bags.forEach(bag => this.options.push({id: bag.id, text: `${bag.name} - ${bag.luggage_type}`, value: bag.name}))
        })
    }

    handleChange = (e) => {
        this.setState({
            bag_id: e.currentTarget.id
        })
    }

    render () {
        this.fetchBags()
        return (
            <Modal 
                size='mini'
                dimmer='blurring'

                trigger={<Button icon compact basic floated='left' size='mini'><Icon name='plus'/></Button>}
                closeIcon
                closeOnDimmerClick
            >
                <Modal.Content>
                    <Form onSubmit={() => this.props.createCarryOn(this.state.bag_id, this.props.trip.id)}>
                        <Form.Select 
                            fluid
                            label='Select a Bag'
                            onChange={(e) => this.handleChange(e)}
                            options={this.options}
                        />
                        <Form.Button type='submit' floated='right' >Submit</Form.Button><br/><br/>
                    </Form>
                </Modal.Content>
            </Modal>
        )
    }
}


export default SingleTripDetails