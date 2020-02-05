import React from 'react'
import { Segment, Header, Form, Modal, Grid } from 'semantic-ui-react'

class PlaceTiny extends React.Component {
    constructor () {
        super ()

        this.state = {
            name: '',
            cost: 0,
            address1: '',
            address2: '',
            city: '',
            us_state: '',
            zip: '',
            country: '',
            notes: ''
        }
    }

    componentDidMount () {
        let placeCopy = {...this.props.place}

        this.setState({
            name: placeCopy.name,
            cost: placeCopy.cost,
            address1: placeCopy.address1,
            address2: placeCopy.address2,
            city: placeCopy.city,
            us_state: placeCopy.us_state,
            zip: placeCopy.zip,
            country: placeCopy.country,
            notes: placeCopy.notes
        })
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        let selectedPlace = {...this.props.place}
        this.props.placeEdit(selectedPlace, this.state)
    }

    render() {
        return (
            <Modal 
                size='small'
                dimmer='blurring'
                trigger={
                    <Segment raised>
                        <Header as='h4'>{this.props.place.name}</Header><br />
                        <Grid columns={2} divided>
                            <Grid.Row>
                            <Grid.Column>
                                    <b><u>Cost</u></b> <br/>
                                    ${this.props.place.cost ? this.props.place.cost : 0 }<br/>
                                </Grid.Column>
                                <Grid.Column>
                                    <b><u>Details</u></b> <br/>
                                    {this.props.place.city}{this.props.place.us_state ? ', ' + this.props.place.us_state : ''} <br/>
                                    {this.props.place.country} 
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                    }
                closeIcon
                closeOnDimmerClick
            >
                <Modal.Header>
                    {this.props.place.name}
                </Modal.Header>
                <Modal.Content>
                    <Form 
                        onSubmit={(e) => this.submitHandler(e)}
                        onChange={(e) => this.changeHandler(e)}
                        >
                        <Form.Group>
                            <Form.Input width='10' id='name' label='Name' value={this.state.name}/>
                            <Form.Input width='6' id='cost' label='Cost' value={this.state.cost} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Input width='8' id='address1' label='Address 1' value={this.state.address1}/>
                            <Form.Input width='8' id='address2' label='Address 2' value={this.state.address2}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Input width='6' id='city' label='City' value={this.state.city} />
                            <Form.Input width='2' id='us_state' label='State' value={this.state.us_state} />
                            <Form.Input width='3' id='zip' label='Zip' value={this.state.zip} />
                            <Form.Input width='5' id='country' label='Country' value={this.state.country} />
                        </Form.Group>
                        <Form.TextArea width='16' id='notes' label="Notes" value={this.state.notes} />
                        <Form.Button type='submit' floated='right' >Submit</Form.Button>
                    </Form><br/>
                    <a href='*' onClick={(e) => {this.props.handleDeletedPlace(e, this.props.place)}}>Delete</a><br/>
                </Modal.Content>
            </Modal>
        )
    }
}

export default PlaceTiny