import React from 'react'
import Sidebar from './Sidebar'
import SingleBag from './SingleBag'
import { Grid, Button, Card, Dimmer, Segment, Header, Icon } from 'semantic-ui-react'

const BAG_URL = 'http://localhost:9292/luggages'

class Luggage extends React.Component {
    addNewBag = (user) => {
        debugger
        fetch(BAG_URL, {
            method: 'POST',
            body: JSON.stringify({
                user_id: user.id,
                miles_travelled: 0,
                name: 'Untitled'
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(data => this.props.handleAddedBag(data))
    }

    render () {
        return (
            <div>
                {this.props.activeUser.username 
                    ? <LoggedIn 
                        activeUser={this.props.activeUser}
                        addNewBag={this.addNewBag}/> 
                        : <BasicPage />}
            </div>
        )
    }
}

const LoggedIn = (props) => {
    return (
        <div className='main-body double-centered'>
            <Grid>
                <Grid.Column width={4}>
                    <Sidebar activeUser={props.activeUser}/>
                </Grid.Column>  
                <Grid.Column width={12}>
                    <BagsContainer 
                        activeUser={props.activeUser}
                        addNewBag={props.addNewBag}
                    />
                </Grid.Column>
            </Grid>
        </div>
    )
}

const NewLuggage = (props) => {
    return (
        <Button fluid onClick={() => props.addNewBag(props.activeUser)} content='Add a New Piece of Luggage' />
    )
}

const BagsContainer = (props) => {
    return (
        <div>
            <NewLuggage 
                activeUser={props.activeUser}
                addNewBag={props.addNewBag}
            /> 
            <br/>
            <Card.Group itemsPerRow={2}>
                {props.activeUser.luggages.map(bag => <SingleBag handleTripClick={props.handleBagClick} key={bag.id} bag={bag}/>)}
            </Card.Group>
        </div>
    )
}

const BasicPage = () => {
    return (
        <div className='main-body double-centered'>
            <Dimmer.Dimmable as={Segment}>
                <Grid>
                    <Grid.Column width={4}>
                        <Sidebar activeUser={activeUser}/>
                    </Grid.Column>  
                    <Grid.Column width={12}>
                        <BagsContainer 
                            activeUser={activeUser}
                        />
                    </Grid.Column>
                </Grid>

                <Dimmer active={true}>
                    <Header inverted as='h2' icon>
                        <Icon name='heart' /> 
                        Create an account to access this feature!
                    </Header>
                </Dimmer>
            </Dimmer.Dimmable>
        </div>
    )
}

const activeUser = {
    username: 'JohnDoe01', 
    bio: "My name is John and I'm dedicated to travelling to every country in the world!",
    created_at: '2019-11-10 06:06:25', 
    trips: [
            {
                id: 1,
                title: "The Mountains", 
                miles: 11200, 
                budget: 400, 
                description: "Just a trip to the mountains with my friends! Can't wait to go skiing.",
                start_date: "04/15/2020", 
                end_date: "04/18/2020"
            }
        ],
    luggages: [
        {
            id: 1,
            user_id: 1,
            luggage_type: "backpack",
            size: null,
            miles_travelled: 600,
            name: "The South Face"
        },
        {
            id: 1,
            user_id: 1,
            luggage_type: "carry_on",
            size: null,
            miles_travelled: 340,
            name: "Yellow Small Suitcase"
        },{
            id: 1,
            user_id: 1,
            luggage_type: "suitcase",
            size: null,
            miles_travelled: 285,
            name: "Rollie Rollie Rollie"
        },
        {
            id: 1,
            user_id: 1,
            luggage_type: "suitcase",
            size: null,
            miles_travelled: 2000,
            name: "Ol' Reliable"
        },
        {
            id: 1,
            user_id: 1,
            luggage_type: "carry_on",
            size: null,
            miles_travelled: 430,
            name: "Perfect For Snacks"
        }
    ]
}

export default Luggage