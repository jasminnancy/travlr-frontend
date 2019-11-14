import React from 'react'
import { Card, Header } from 'semantic-ui-react'

const BagTiny = (props) => {
    return (
        <Card >
            <Card.Content>
                <Header as='h5'>{props.bag.luggage.name ? props.bag.luggage.name : 'Click to Edit'}</Header>
                {props.bag.luggage.size ? props.bag.luggage.size : "???"} liter {props.bag.luggage.luggage_type}
            </Card.Content>
        </Card>
    )
}

export default BagTiny