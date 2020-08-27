import React from 'react'

//components
import TripTiny from '../Shared/Tiny/TripTiny'
import EditModal from './EditModal'

//styling
import { 
  Button, 
  Grid, 
  Message, 
  List, 
  Card, 
  Image
} from 'semantic-ui-react'

const SingleBagDetails = (props) => {
  const {
    handleBackClick,
    bag,
    handleBagEditClick,
    handleDeleteClick
  } = props

  return (
    <div>
      <Button fluid onClick={handleBackClick}>
        Go Back
      </Button><br/>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Grid>
              <Grid.Row>
                <Grid.Column width={3}/>
                  <Grid.Column width={9}>
                    <Card.Header as='h3'>{bag.name}</Card.Header>
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
                      content={`Places this ${bag.luggage_type === 'carry_on' 
                        ? 'carry-on' 
                          : bag.luggage_type} has been:`} 
                    /><br />
                    <Card.Content>
                      <Card.Group itemsPerRow={4}>
                        {bag.carryons.map((trip, i) => <TripTiny key={i} trip={trip}/>)}
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
                        /> {bag.miles > 0 
                          ? bag.miles 
                            : "0"} miles
                      </div>
                    </List.Item>
                    <List.Item>
                      <div className='padding'>
                        <List.Icon 
                          color='black' 
                          name='suitcase' 
                          size='large' 
                        /> {bag.luggage_type
                          ? bag.luggage_type.split('_').join('-')
                            : "suitcase"}
                      </div>
                    </List.Item>
                    <List.Item>
                      <div className='padding'>
                        <List.Icon 
                          color='black' 
                          name='cube' 
                          size='large' 
                        /> {bag.size || "???"} Liters
                      </div>
                    </List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={16}>
                  <List divided horizontal>
                    <List.Item>
                      <EditModal 
                        bag={bag} 
                        handleBagEditClick={handleBagEditClick}
                      />
                    </List.Item>
                    <List.Item>
                      <a href='' onClick={(e) => {handleDeleteClick(e, bag)}}>
                        Delete
                      </a>
                    </List.Item>
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

export default SingleBagDetails