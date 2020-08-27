import React, {useState, useEffect} from 'react'

//components
import { bags } from '../Shared/options'

//styling
import { 
  Modal, 
  Form 
} from 'semantic-ui-react'

const EditModal = (props) => {
  const {
    bag,
    handleBagEditClick
  } = props
  const [state, setState] = useState({
    name: '',
    size: 0,
    luggage_type: ''
  })

  useEffect(() => {
    setState({
      name: bag.name,
      size: bag.size,
      luggage_type: bag.luggage_type
    })
  }, [])

  const changeHandler = (e) => {
    if (e.currentTarget.id === 'luggage_type') {
      let luggageType = e.currentTarget.innerText
      setState({
        luggage_type: luggageType.toLowerCase().split('-').join('_')
      })
    } else {
      setState({
        [e.target.id]: e.target.value
      })
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    handleBagEditClick(...bag, state)
  }

  return (
    <Modal 
      size='small'
      dimmer='blurring'
      trigger={<a href=''>Edit Bag Info</a>}
      closeIcon
      closeOnDimmerClick
    >
      <Modal.Header>
        {bag.name}
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
              label='Bag Name' 
              value={state.name}
            />
            <Form.Input 
              width='6' 
              id='size' 
              label='Size (liters)' 
              type='number' 
              value={state.size}
            />
          </Form.Group>
          <Form.Group>
            <Form.Select
              fluid
              label='Type'
              options={bags}
              placeholder='Type...'
              onChange={changeHandler}
            />  
          </Form.Group>
          <Form.Button type='submit' floated='right'>
            Submit
          </Form.Button>
        </Form><br/><br/>
      </Modal.Content>
    </Modal>
  )
}

export default EditModal