import React, {useState} from 'react'

//styling
import { 
  Segment, 
  Header, 
  Modal, 
  Grid, 
  Form 
} from 'semantic-ui-react'

const EventTiny = (props) => {
  const {
    event, 
    eventEdit,
    handleDeletedEvent
  } = props
  const [state, setState] = useState({
    name: event.name,
    cost: event.cost,
    address1: event.address1,
    address2: event.address2,
    city: event.city,
    us_state: event.us_state,
    zip: event.zip,
    country: event.country,
    notes: event.notes
  })

  const changeHandler = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    eventEdit(...event, state)
  }

  return (
    <Modal 
      size='small'
      dimmer='blurring'
      trigger={
        <Segment raised>
          <Header as='h4'>{event.name}</Header><br />
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <b><u>Cost</u></b> <br/>
                ${event.cost || 0 }<br/>
              </Grid.Column>
              <Grid.Column>
                <b><u>Details</u></b> <br/>
                {event.city}{event.us_state ? ', ' + event.us_state : ''} <br/>
                {event.country} 
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>}
      closeIcon
      closeOnDimmerClick
    >
      <Modal.Header>
        {event.name}
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
        <a href='' onClick={(e) => {handleDeletedEvent(e, event)}}>
          Delete
        </a><br/>
      </Modal.Content>
    </Modal>
  )
}

export default EventTiny