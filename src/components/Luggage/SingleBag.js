import React from 'react'

//components
import CarryOn from '../../photos/carryon.png'
import Suitcase from '../../photos/suitcase.png'
import Backpack from '../../photos/backpack.jpg'

//styling
import { 
    Card, 
    Image, 
    Grid 
} from 'semantic-ui-react'

const SingleBag = (props) => {
  const {
    bag,
    handleBagClick
  } = props

  let photo
  switch(bag.luggage_type) {
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
    <Card fluid onClick={() => handleBagClick(bag)} >
      <Card.Content>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <Image src={photo} size='huge' alt={`bag ${bag.name}`}/>
            </Grid.Column>
            <Grid.Column width={12}>
              <Card.Header as='h2' content={bag.name} />
              <Card.Content>
                Size: {bag.size || '???'} liters<br/>
                This {bag.luggage_type !== 'carry_on' 
                  ? bag.luggage_type 
                    : "carry-on"} has travelled {bag.miles_travelled} miles!
              </Card.Content>
            </Grid.Column>
          </Grid.Row>
        </Grid>    
      </Card.Content>        
    </Card>
  )
}

export default SingleBag