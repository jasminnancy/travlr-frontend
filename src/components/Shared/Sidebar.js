import React from 'react'

//styling
import { 
  Segment, 
  Menu, 
  Card, 
  Image 
} from 'semantic-ui-react'

const Sidebar = (props) => {
  const {activeUser} = props
  const joinDate = activeUser.created_at.split('-')[0]
  const totalMiles = activeUser.trips.reduce((total, trip) => total + trip.miles, 0)

  return (
    <Menu vertical fluid>
      <Card fluid>
        <Image 
          src={!activeUser.profile_pic 
            ? 'https://react.semantic-ui.com/images/avatar/large/molly.png' 
              : activeUser.profile_pic} 
          wrapped ui={false} 
        />
        <Card.Content>
          <Card.Header>
            {activeUser.username}
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              Joined in {joinDate}
            </span>
          </Card.Meta>
          <Card.Description>
            {activeUser.bio}
          </Card.Description>
        </Card.Content>
      </Card>
      <Segment>
        <Menu.Header>
          Total Stats
        </Menu.Header>
        <Menu.Menu>
          <Menu.Item>
            Trips: {activeUser.trips.length}
          </Menu.Item>
          <Menu.Item>
            Miles: {totalMiles || 0 }
          </Menu.Item>
          <Menu.Item>
            Bags: {activeUser.luggages.length}
          </Menu.Item>
        </Menu.Menu>
      </Segment>
    </Menu>
  )
}

export default Sidebar