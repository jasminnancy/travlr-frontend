import React, {useState, useEffect} from 'react'

//styling
import { 
  Segment, 
  Header, 
  Form, 
  Modal, 
  Grid 
} from 'semantic-ui-react'

const PlaceTiny = (props) => {
  const {
    place, 
    placeEdit, 
    handleDeletedPlace
  } = props
  const [state, setState] = useState({
    name: '',
    cost: 0,
    address1: '',
    address2: '',
    city: '',
    us_state: '',
    zip: '',
    country: '',
    notes: ''
  })
  
  useEffect(() => {
    setState({
      name: place.name,
      cost: place.cost,
      address1: place.address1,
      address2: place.address2,
      city: place.city,
      us_state: place.us_state,
      zip: place.zip,
      country: place.country,
      notes: place.notes
    })
  }, [])

  const changeHandler = (e) => {
    setState({
      [e.target.id]: e.target.value
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    placeEdit(...place, state)
  }

  return (
    <Modal 
      size='small'
      dimmer='blurring'
      trigger={
        <Segment raised>
          <Header as='h4'>
            {place.name}
          </Header><br />
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <b><u>Cost</u></b> <br/>
                ${place.cost || 0 }<br/>
              </Grid.Column>
              <Grid.Column>
                <b><u>Details</u></b> <br/>
                {place.city}{(place.us_state && ', ') || ''} <br/>
                {place.country} 
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      }
      closeIcon
      closeOnDimmerClick
    >
      <Modal.Header>
        {place.name}
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
        <a 
          href='' 
          onClick={(e) => handleDeletedPlace(e, place)}
        >
          Delete
        </a><br/>
      </Modal.Content>
    </Modal>
  )
}

export default PlaceTiny