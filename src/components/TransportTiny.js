import React from 'react'
import { Segment, Header, Modal, Form, Grid, Icon } from 'semantic-ui-react'

class TransportTiny extends React.Component {
    constructor () {
        super ()

        this.state = {
            name: '',
            transport_type: '',
            cost: 0,
            company: '',
            starting_date: '',
            starting_time: '',
            ending_date: '',
            ending_time: '',
            starting_location: '',
            destination: '',
            total_miles: 0,
            confirmation_code: '',
            notes: ''
        }
    }

    componentDidMount () {
        let transportCopy = {...this.props.transport}

        this.setState({
            name: transportCopy.name,
            transport_type: transportCopy.transport_type,
            company: transportCopy.company,
            cost: transportCopy.cost,
            starting_date: transportCopy.starting_date,
            starting_time: transportCopy.starting_time,
            ending_date: transportCopy.ending_date,
            ending_time: transportCopy.ending_time,
            starting_location: transportCopy.starting_location,
            destination: transportCopy.destination,
            total_miles: transportCopy.total_miles,
            confirmation_code: transportCopy.confirmation_code,
            notes: transportCopy.notes
        })
    }

    changeHandler = (e) => {
        if (e.currentTarget.id === 'transport_type') {
            this.setState({
                transport_type: e.currentTarget.innerText
            })
        } else {
            this.setState({
                [e.target.id]: e.target.value
            })
        }
    }

    submitHandler = (e) => {
        e.preventDefault()
        let selectedTransport = {...this.props.transport}
        this.props.transportEdit(selectedTransport, this.state)
    }

    render () {
        let iconName
        if (this.props.transport.transport_type === 'Flight') {
            iconName = 'plane'
        } else if (this.props.transport.transport_type === 'Other') {
            iconName = 'rocket'
        } else {
            iconName = this.props.transport.transport_type ? this.props.transport.transport_type.toLowerCase() : 'plane'
        }

        return (
            <Modal 
                size='small'
                dimmer='blurring'
                trigger={
                    <Segment raised>
                        <Header as='h4'>{this.props.transport.name}</Header><br />
                        <Grid columns={3} divided>
                            <Grid.Row>
                                <Grid.Column>
                                    <b><u>Details</u></b> <br/>
                                    <Icon name={iconName} /> {this.props.transport.total_miles} mi. <br/>
                                    ${this.props.transport.cost}<br/>
                                    {this.props.transport.company}
                                </Grid.Column>
                                <Grid.Column>
                                    <b><u>Start Date</u></b> <br/>
                                    {this.props.formatDate(this.props.transport.starting_date)} <br/>
                                    {this.props.formatTime(this.props.transport.starting_time)}
                                </Grid.Column>
                                <Grid.Column>
                                    <b><u>End Date</u></b> <br/>
                                    {this.props.formatDate(this.props.transport.ending_date)} <br/>
                                    {this.props.formatTime(this.props.transport.ending_time)}
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                    }
                closeIcon
                closeOnDimmerClick
            >
                <Modal.Header>
                    {this.props.transport.name}
                </Modal.Header>
                <Modal.Content>
                    <Form 
                        onSubmit={(e) => this.submitHandler(e)}
                        onChange={(e) => this.changeHandler(e)}
                        >
                        <Form.Input width='16' id='name' label='Name' value={this.state.name}/>
                        <Form.Group>
                            <Form.Input width='10' id='company' label='Company' value={this.state.company} />
                            <Form.Select
                                width='6'
                                label='Type'
                                options={options}
                                placeholder={this.props.transport.transport_type ? this.props.transport.transport_type : 'Type...'}
                                onChange={(e) => this.changeHandler(e)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Input width='4' id='starting_date' label='Start Date' type='date' value={this.state.starting_date} />
                            <Form.Input width='4' id='starting_time' label='Start Time' type='time' value={this.state.starting_time} />
                            <Form.Input width='4' id='ending_date' label='End Date' type='date' value={this.state.ending_date} />
                            <Form.Input width='4' id='ending_time' label='End Time' type='time' value={this.state.ending_time} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Input width='8' id='starting_location' label='Starting City' value={this.state.starting_location}/>
                            <Form.Input width='8' id='destination' label='Destination' value={this.state.destination}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Input width='6' id='confirmation_code' label='Trip Confirmation Code' value={this.state.confirmation_code} />
                            <Form.Input width='5' id='cost' label='Total Cost' type='number' value={this.state.cost} />
                            <Form.Input width='5' id='total_miles' label='Total Miles' type='number' value={this.state.total_miles} />
                        </Form.Group>
                        <Form.TextArea width='16' id='notes' label="Notes" value={this.state.notes} />
                        <Form.Button type='submit' floated='right' >Submit</Form.Button>
                    </Form><br/>
                    <a href='' onClick={(e) => {this.props.handleDeletedTransport(e, this.props.transport)}}>Delete</a><br/>
                </Modal.Content>
            </Modal>
        )
    }
}

const options = [
    { id: 'transport_type', text: 'Flight', value: 'flight' },
    { id: 'transport_type', text: 'Bus', value: 'bus' },
    { id: 'transport_type', text: 'Car', value: 'car' },
    { id: 'transport_type', text: 'Train', value: 'train'},
    { id: 'transport_type', text: 'Other', value: 'other'}
  ]

export default TransportTiny