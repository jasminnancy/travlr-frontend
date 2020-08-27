import React from 'react'

//components
import SingleBag from './SingleBag'

//styling
import {
  Button, 
  Card
} from 'semantic-ui-react'

const BagsContainer = (props) => {
  const {activeUser} = props
  return (
    <div>
      <Button 
        fluid 
        onClick={() => props.addNewBag(activeUser)} 
        content='Add a New Piece of Luggage' 
      />
      <br/>
      <Card.Group itemsPerRow={2}>
        {activeUser.luggages.map((bag, index) => (
          <SingleBag 
            key={index}
            handleBagClick={props.handleBagClick} 
            bag={bag} 
          />
        ))}
      </Card.Group>
    </div>
  )
}

export default BagsContainer