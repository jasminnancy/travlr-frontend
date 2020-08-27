import React from 'react'

//styling
import { 
  Card, 
  Header 
} from 'semantic-ui-react'

const BagTiny = (props) => {
  const {bag} = props

  return (
    <Card >
      <Card.Content>
        <Header as='h5'>
          {bag.luggage.name 
            ? bag.luggage.name 
              : 'Click to Edit'}
        </Header>
        {bag.luggage.size 
          ? bag.luggage.size 
            : "???"} liter {bag.luggage.luggage_type}
      </Card.Content>
    </Card>
  )
}

export default BagTiny