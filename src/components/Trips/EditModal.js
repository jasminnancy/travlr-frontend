import React from 'react'

//styling
import { 
  Modal, 
  Form 
} from 'semantic-ui-react'

class EditModal extends React.Component {
  constructor () {
      super ()

      this.state = {
          title: '',
          budget: 0,
          description: '',
          start_date: '',
          end_date: '',
          photo: '',
          miles: 0
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
          photo: tripCopy.photo,
          miles: tripCopy.miles
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
              trigger={<a href=''>Edit Trip Info</a>}
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

export default EditModal