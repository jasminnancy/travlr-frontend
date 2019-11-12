import React from 'react'
import Sidebar from './Sidebar'
import SingleTrip from './SingleTrip'
import SingleTripDetails from './SingleTripDetails'
import Mountains from '../photos/mountains.jpg'
import NYC from '../photos/nyc.png'
import Boys from '../photos/boys.jpg'
import Milan from '../photos/italy.jpg'
import Panama from '../photos/panama.jpg'
import DefaultTripPhoto from '../photos/default-trip-photo.jpg'
import { Grid, Dimmer, Segment, Icon, Header, Button } from 'semantic-ui-react'

const TRIP_URL = 'http://localhost:9292/trips'

class Trips extends React.Component {
    constructor () {
        super()

        this.state = {
            selectedTrip: []
        }
    }

    addNewTrip = (user) => {
        fetch(TRIP_URL, {
            method: 'POST',
            body: JSON.stringify({
                user_id: user.id,
                title: 'My New Trip',
                description: '',
                budget: 0,
                photo: DefaultTripPhoto,
                start_date: "No Start Date",
                end_date: "No End Date"
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(data => this.props.handleAddedTrip(data))
    }

    handleTripClick = (trip) => {
        fetch(TRIP_URL + `/${trip.id}`)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                selectedTrip: data
            })
        })
    }

    handleBackClick = () => {
        this.setState({
            selectedTrip: []
        })
    }

    render () {
        return (
            <div>
                {this.props.activeUser.username 
                    ? <LoggedIn 
                        activeUser={this.props.activeUser} 
                        addNewTrip={this.addNewTrip}
                        handleTripClick={this.handleTripClick}
                        handleBackClick={this.handleBackClick}
                        selectedTrip={this.state.selectedTrip}/> 
                        : <BasicPage activeUser={activeUser}/>}
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
                    {!props.selectedTrip.id 
                        ? <TripContainer 
                                activeUser={props.activeUser} 
                                addNewTrip={props.addNewTrip}
                                handleTripClick={props.handleTripClick}
                            />
                            : <SingleTripDetails 
                                trip={props.selectedTrip}
                                handleBackClick={props.handleBackClick}
                            />}
                </Grid.Column>
            </Grid>
        </div>
    )
}

const NewTrip = (props) => {
    return (
        <Button fluid onClick={() => props.addNewTrip(props.activeUser)} content='Create a New Trip' />
    )
}

const TripContainer = (props) => {
    return (
        <div>
            <NewTrip 
                activeUser={props.activeUser}
                addNewTrip={props.addNewTrip}
            /> 
            <br/>
            {props.activeUser.trips.map(trip => <SingleTrip handleTripClick={props.handleTripClick} key={trip.id} trip={trip}/>)}
        </div>
    )
}

const BasicPage = (props) => {
    return (
        <div className='main-body double-centered'>
            <Dimmer.Dimmable as={Segment}>
                <Grid>
                    <Grid.Column width={4}>
                        <Sidebar activeUser={activeUser}/>
                    </Grid.Column>  
                    <Grid.Column width={12}>
                        <NewTrip /> 
                        <br/>
                        {activeUser.trips.map(trip => <SingleTrip key={trip.id} trip={trip}/>)}
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
                miles: 500, 
                photo: Mountains, 
                budget: 400, 
                description: "Just a trip to the mountains with my friends! Can't wait to go skiing.",
                start_date: "04/15/2020", 
                end_date: "04/18/2020"
            },
            {
                id: 2,
                title: "NYC", 
                miles: 3250, 
                photo: NYC, 
                budget: 800, 
                description: "Time to go to NYC to see the sights! Don't forget to get an MTA card.",
                start_date: "08/02/2020", 
                end_date: "08/12/2020"
            }, 
            {
                id: 3,
                title: "Boy's Trip", 
                miles: 800, 
                photo: Boys, 
                budget: 1000, 
                description: "Boy's trip!!! Time to go biking through the dunes.",
                start_date: "06/28/2020", 
                end_date: "07/02/2020"
            }, 
            {
                id: 4,
                title: "Milan, Italy", 
                miles: 6400, 
                photo: Milan, 
                budget: 2000, 
                description: "Let's go to Italy and explore Isla Bella and hop over to Copenhagen.",
                start_date: "12/07/2019", 
                end_date: "12/18/2019"
            }, 
            {
                id: 5,
                title: "Panama City Beach", 
                miles: 250, 
                photo: Panama, 
                budget: 350, 
                description: "If I don't get burned at least once, I'm not doing it right.",
                start_date: "05/01/2020", 
                end_date: "05/14/2020"
            }
        ],
        luggages: ["suitcase", "backpack"]
    }

export default Trips