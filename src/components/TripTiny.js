import React from 'react'
import { Card, Image, Popup, Header } from 'semantic-ui-react'

const PlaceTiny = (props) => {
    return (
        <Card>
            <Popup trigger={<Image src={props.trip.trip.photo} alt={props.trip.trip.title} />} flowing hoverable>
                <Header as='h4'>{props.trip.trip.title}</Header>
                {props.trip.trip.description}
            </Popup>
            
        </Card>
    )
}

export default PlaceTiny