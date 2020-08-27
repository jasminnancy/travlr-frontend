import React from 'react'

//styling
import { 
  Card, 
  Image, 
  Popup, 
  Header 
} from 'semantic-ui-react'

const PlaceTiny = (props) => {
  const {trip} = props

  return (
    <Card>
      <Popup trigger={
        <Image 
          src={trip.trip.photo} 
          alt={trip.trip.title} />} 
          flowing hoverable
        >
        <Header as='h4'>
          {trip.trip.title}
        </Header>
        {trip.trip.description}
      </Popup>
    </Card>
  )
}

export default PlaceTiny