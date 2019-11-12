import React from 'react'
import Sidebar from './Sidebar'
import SingleTrip from './SingleTrip'
import SingleTripDetails from './SingleTripDetails'
import Mountains from '../photos/mountains.jpg'
import Boys from '../photos/boys.jpg'
import Milan from '../photos/italy.jpg'
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
                description: 'No Description Added...',
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

    handleTripEditClick = (trip, values) => {
        debugger
        fetch(TRIP_URL + `/${trip.id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                title: values.title,
                description: values.description,
                budget: values.budget,
                start_date: values.start_date,
                end_date: values.end_date,
                photo: values.photo
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                selectedTrip: data
            })
            alert('Your trip has been updated!')
        })
    }

    handleDeleteClick = (e, trip) => {
        e.preventDefault()

        fetch(TRIP_URL + `/${trip.id}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json(), this.props.handleRemovedTrip(trip))

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
                        handleTripEditClick={this.handleTripEditClick}
                        handleDeleteClick={this.handleDeleteClick}
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
                                handleTripEditClick={props.handleTripEditClick}
                                handleDeleteClick={props.handleDeleteClick}
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
            {props.activeUser.trips.map(trip => <SingleTrip key={trip.id} handleTripClick={props.handleTripClick} trip={trip}/>)}
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
                        Log in or create an account to access this feature!
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
        ],
        luggages: ["1", "2", "3", "4", "5"]
    }

export default Trips