import React from 'react'
import { Segment, Menu, Card, Image } from 'semantic-ui-react'

const Sidebar = (props) => {
    const joinDate = props.activeUser.created_at.split('-')[0]
    const totalMiles = props.activeUser.trips.reduce((total, trip) => total + trip.miles, 0)

    return (
            <Menu vertical fluid>
                <Card>
                    <Image 
                        src={!props.activeUser.profile_pic 
                            ? 'https://react.semantic-ui.com/images/avatar/large/molly.png' 
                                : props.activeUser.profile_pic} 
                        wrapped ui={false} />
                    <Card.Content>
                    <Card.Header>{props.activeUser.username}</Card.Header>
                    <Card.Meta>
                        <span className='date'>Joined in {joinDate}</span>
                    </Card.Meta>
                    <Card.Description>
                        {props.activeUser.bio}
                    </Card.Description>
                    </Card.Content>
                </Card>

                <Segment>
                    <Menu.Header>Total Stats</Menu.Header>

                    <Menu.Menu>
                        <Menu.Item>Trips: {props.activeUser.trips.length}</Menu.Item>
                        <Menu.Item>Miles: {totalMiles ? totalMiles : 0 }</Menu.Item>
                        <Menu.Item>Bags: {props.activeUser.luggages.length} </Menu.Item>
                    </Menu.Menu>
                </Segment>
            </Menu>
    )
}

export default Sidebar