import React from 'react'
import TripTiny from './TripTiny'
import { Button, Grid, Message, List, Card, Image, Modal, Form } from 'semantic-ui-react'

const SingleBagDetails = (props) => {
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
                                    <Card.Header as='h3'>{props.bag.name}</Card.Header>
                                </Grid.Column>
                                <Grid.Column width={4}/>
                            </Grid.Row>

                            <Grid.Row textAlign='left'>
                                <Grid.Column width={11} >
                                    <Message 
                                        size='large' 
                                        className='trip-details'
                                    > 
                                        <Card.Header 
                                            content={`Places this ${props.bag.luggage_type === 'carry_on' 
                                                ? 'carry-on' 
                                                    : props.bag.luggage_type} has been:`} /><br />
                                        <Card.Content>
                                            <Card.Group itemsPerRow={4}>
                                                {props.bag.carryons.map(trip => <TripTiny trip={trip}/>)}
                                            </Card.Group>
                                        </Card.Content>
                                    </Message>
                                </Grid.Column>
                                <Grid.Column width={5}>
                                    <Image src={null}/>
                                    <List divided relaxed>
                                        <List.Item>
                                            <div className='padding'>
                                                <List.Icon 
                                                    color='black' 
                                                    name='road' 
                                                    size='large'
                                                /> {props.bag.miles > 0 
                                                        ? props.bag.miles + " miles"
                                                            : "0 miles"
                                                    }
                                            </div>
                                        </List.Item>
                                        <List.Item>
                                            <div className='padding'>
                                                <List.Icon 
                                                    color='black' 
                                                    name='suitcase' 
                                                    size='large' 
                                                /> {props.bag.luggage_type
                                                        ? props.bag.luggage_type.split('_').join('-')
                                                            : "suitcase"
                                                    }
                                            </div>
                                        </List.Item>
                                        <List.Item>
                                            <div className='padding'>
                                                <List.Icon 
                                                    color='black' 
                                                    name='cube' 
                                                    size='large' 
                                                /> {props.bag.size 
                                                        ? props.bag.size + " liters"
                                                            : "??? liters"
                                                    }
                                            </div>
                                        </List.Item>
                                    </List>
                                </Grid.Column>
                            </Grid.Row>

                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <List divided horizontal>
                                        <List.Item><EditModal bag={props.bag} handleBagEditClick={props.handleBagEditClick}/></List.Item>
                                        <List.Item><a href='' onClick={(e) => {props.handleDeleteClick(e, props.bag)}}>Delete</a></List.Item>
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
            name: '',
            size: 0,
            luggage_type: ''
        }
    }

    componentDidMount () {
        let bagCopy = {...this.props.bag}

        this.setState({
            name: bagCopy.name,
            size: bagCopy.size,
            luggage_type: bagCopy.luggage_type
        })
    }

    changeHandler = (e) => {
        if (e.currentTarget.id === 'luggage_type') {
            this.setState({
                luggage_type: e.currentTarget.innerText.toLowerCase().split('-').join('_')
            })
        } else {
            this.setState({
                [e.target.id]: e.target.value
            })
        }
    }

    submitHandler = (e) => {
        e.preventDefault()
        let selectedBag = {...this.props.bag}
        this.props.handleBagEditClick(selectedBag, this.state)
    }

    render () {
        return (
            <Modal 
                size='small'
                dimmer='blurring'
                trigger={<a href='#'>Edit Bag Info</a>}
                closeIcon
                closeOnDimmerClick
            >
                <Modal.Header>
                    {this.props.bag.name}
                </Modal.Header>
                <Modal.Content>
                    <Form 
                        onSubmit={(e) => this.submitHandler(e)}
                        onChange={(e) => this.changeHandler(e)}
                        >
                        <Form.Group>
                            <Form.Input width='10' id='name' label='Bag Name' value={this.state.name}/>
                            <Form.Input width='6' id='size' label='Size (liters)' type='number' value={this.state.size}/>
                        </Form.Group>
                        <Form.Group>
                        <Form.Select
                            fluid
                            label='Type'
                            options={options}
                            placeholder='Type...'
                            onChange={(e) => this.changeHandler(e)}
                        />
                        </Form.Group>
                        <Form.Button type='submit' floated='right' >Submit</Form.Button>
                    </Form><br/><br/>
                </Modal.Content>
            </Modal>
        )
    }
}

const options = [
    { id: 'luggage_type', text: 'Backpack', value: 'backpack' },
    { id: 'luggage_type', text: 'Carry-On', value: 'carry_on' },
    { id: 'luggage_type', text: 'Suitcase', value: 'suitcase' },
  ]

export default SingleBagDetails