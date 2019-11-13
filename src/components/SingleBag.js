import React from 'react'
import CarryOn from '../photos/carryon.png'
import Suitcase from '../photos/suitcase.png'
import Backpack from '../photos/backpack.jpg'
import { Card, Image, Grid } from 'semantic-ui-react'

const SingleBag = (props) => {
    let photo

    switch(props.bag.luggage_type) {
        case 'suitcase':
            photo = Suitcase
            break;
        case 'backpack':
            photo = Backpack
            break;
        case 'carry_on':
            photo = CarryOn
            break;
        default:
            photo = Suitcase
      }

    return (
        <Card fluid onClick={() => props.handleBagClick(props.bag)} >
            <Card.Content>

            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Image src={photo} size='huge' alt={`bag ${props.bag.name}`}/>
                    </Grid.Column>
                    
                    <Grid.Column width={12}>
                        <Card.Header as='h2' content={props.bag.name} />
                        <Card.Content>
                            Size: {props.bag.size ? props.bag.size : '???'} liters<br/>
                            This {props.bag.luggage_type !== 'carry_on' ? props.bag.luggage_type : "carry-on"} has travelled {props.bag.miles_travelled} miles!
                        </Card.Content>
                    </Grid.Column>
                </Grid.Row>
            </Grid>    
            </Card.Content>        
        </Card>
    )
}

export default SingleBag