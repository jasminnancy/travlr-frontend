import React, {useState} from 'react'

//components
import {formatDate} from '../utils'

//styling
import { Segment, Header, Form, Modal, Grid } from 'semantic-ui-react'

const HotelTiny = (props) => {
  const {
    hotel, 
    hotelEdit,
    handleDeletedHotel
  } = props
  const [state, setState] = useState({
    name: hotel.name,
    cost: hotel.cost,
    starting_date: hotel.starting_date,
    ending_date: hotel.ending_date,
    address1: hotel.address1,
    address2: hotel.address2,
    city: hotel.city,
    us_state: hotel.us_state,
    zip: hotel.zip,
    country: hotel.country,
    notes: hotel.notes
  })

  const changeHandler = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    hotelEdit(...hotel, state)
  }

  return (
    <Modal 
      size='small'
      dimmer='blurring'
      trigger={
        <Segment raised>
          <Header as='h4'>{hotel.name}</Header><br />
          <Grid columns={3} divided>
            <Grid.Row>
              <Grid.Column>
                <b><u>Details</u></b> <br/>
                ${hotel.cost || 0 }<br/>
                {hotel.city}{hotel.us_state ? ', ' + hotel.us_state : ''} <br/>
                {hotel.country} 
              </Grid.Column>
              <Grid.Column>
                <b><u>Check-In</u></b> <br/>
                {formatDate(hotel.starting_date)} <br/>
              </Grid.Column>
              <Grid.Column>
                <b><u>Check-Out</u></b> <br/>
                {formatDate(hotel.ending_date)} <br/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>}
      closeIcon
      closeOnDimmerClick
    >
      <Modal.Header>
        {hotel.name}
      </Modal.Header>
      <Modal.Content>
        <Form 
          onSubmit={submitHandler}
          onChange={changeHandler}
        >
          <Form.Group>
            <Form.Input 
              width='10' 
              id='name' 
              label='Name' 
              value={state.name}
            />
            <Form.Input 
              width='6' 
              id='cost' 
              label='Cost' 
              value={state.cost} 
            />
          </Form.Group>
          <Form.Group>
            <Form.Input 
              width='8' 
              id='starting_date' 
              label='Check-In Date' 
              type='date' 
              value={state.starting_date} 
            />
            <Form.Input 
              width='8' 
              id='ending_date' 
              label='Check-Out Date' 
              type='date' 
              value={state.ending_date} 
            />
          </Form.Group>
          <Form.Group>
            <Form.Input 
              width='8' 
              id='address1' 
              label='Address 1' 
              value={state.address1}
            />
            <Form.Input 
              width='8' 
              id='address2' 
              label='Address 2' 
              value={state.address2}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input 
              width='6' 
              id='city' 
              label='City' 
              value={state.city} 
            />
            <Form.Input 
              width='2' 
              id='us_state' 
              label='State' 
              value={state.us_state} 
            />
            <Form.Input 
              width='3' 
              id='zip' 
              label='Zip' 
              value={state.zip} 
            />
            <Form.Input 
              width='5' 
              id='country' 
              label='Country' 
              value={state.country} 
            />
          </Form.Group>
          <Form.TextArea 
            width='16' 
            id='notes' 
            label="Notes" 
            value={state.notes} 
          />
          <Form.Button type='submit' floated='right'>
            Submit
          </Form.Button>
        </Form><br/>
        <a href='' onClick={(e) => {handleDeletedHotel(e, hotel)}}>
          Delete
        </a><br/>
      </Modal.Content>
    </Modal>
  )
}

export default HotelTiny