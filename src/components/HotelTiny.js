import React from 'react'
import { Segment, Header, Form, Modal, Grid } from 'semantic-ui-react'

class HotelTiny extends React.Component {
    constructor () {
        super ()

        this.state = {
            name: '',
            cost: 0,
            starting_date: '',
            ending_date: '',
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
        let hotelCopy = {...this.props.hotel}

        this.setState({
            name: hotelCopy.name,
            cost: hotelCopy.cost,
            starting_date: hotelCopy.starting_date,
            ending_date: hotelCopy.ending_date,
            address1: hotelCopy.address1,
            address2: hotelCopy.address2,
            city: hotelCopy.city,
            us_state: hotelCopy.us_state,
            zip: hotelCopy.zip,
            country: hotelCopy.country,
            notes: hotelCopy.notes
        })
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        let selectedHotel = {...this.props.hotel}
        this.props.hotelEdit(selectedHotel, this.state)
    }

    render () {
        return (
            <Modal 
                size='small'
                dimmer='blurring'
                trigger={
                    <Segment raised>
                        <Header as='h4'>{this.props.hotel.name}</Header><br />
                        <Grid columns={3} divided>
                            <Grid.Row>
                            <Grid.Column>
                                    <b><u>Details</u></b> <br/>
                                    ${this.props.hotel.cost ? this.props.hotel.cost : 0 }<br/>
                                    {this.props.hotel.city}{this.props.hotel.us_state ? ', ' + this.props.hotel.us_state : ''} <br/>
                                    {this.props.hotel.country} 
                                </Grid.Column>
                                <Grid.Column>
                                    <b><u>Check-In</u></b> <br/>
                                    {this.props.formatDate(this.props.hotel.starting_date)} <br/>
                                </Grid.Column>
                                <Grid.Column>
                                    <b><u>Check-Out</u></b> <br/>
                                    {this.props.formatDate(this.props.hotel.ending_date)} <br/>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                    }
                closeIcon
                closeOnDimmerClick
            >
                <Modal.Header>
                    {this.props.hotel.name}
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
                            <Form.Input width='8' id='starting_date' label='Check-In Date' type='date' value={this.state.starting_date} />
                            <Form.Input width='8' id='ending_date' label='Check-Out Date' type='date' value={this.state.ending_date} />
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
                    <a href='*' onClick={(e) => {this.props.handleDeletedHotel(e, this.props.hotel)}}>Delete</a><br/>
                </Modal.Content>
            </Modal>
        )
    }
}

export default HotelTiny