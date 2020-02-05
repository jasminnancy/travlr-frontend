import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation'

const URL_USERS = 'http://localhost:3000/users'

class App extends Component {

  constructor() {
    super()
    this.state = {
      activeTab: window.location.pathname,
      activeUser: [],
      users: []
    }
  }

  componentDidMount () {
    if (localStorage.getItem('current_user_id')) {
      fetch(URL_USERS + '/' + localStorage.getItem('current_user_id'))
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          activeUser: data
        })
      })
    }

    fetch(URL_USERS)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        users: data
      })
    })
  }

  handleAddedTrip = (trip) => {
    let trips = [...this.state.activeUser.trips]
    trips.push(trip)

    this.setState({
      activeUser: {...this.state.activeUser, trips: trips}
    })
  }

  handleRemovedTrip = (removedTrip) => {
    let trips = [...this.state.activeUser.trips]
    let updatedTrips = trips.filter(trip => trip.id !== removedTrip.id)

    this.setState({
      activeUser: {...this.state.activeUser, trips: updatedTrips}
    })
  }

  handleAddedBag = (bag) => {
    let bags = [...this.state.activeUser.luggages]
    bags.push(bag)

    this.setState({
      activeUser: {...this.state.activeUser, luggages: bags}
    })
  }

  handleRemovedBag = (removedBag) => {
    let bags = [...this.state.activeUser.luggages]
    let updatedBags = bags.filter(trip => trip.id !== removedBag.id)

    this.setState({
      activeUser: {...this.state.activeUser, luggages: updatedBags}
    })
  }

  logIn = (e) => {
    e.preventDefault()

    this.setState({ 
      activeUser: this.state.users[0], 
    }, () => localStorage.setItem('current_user_id', `${this.state.activeUser.id}`))
  }

  render () {
    return (
      <div className="App">
        <Navigation 
          activeTab={this.state.activeTab} 
          activeUser={this.state.activeUser}
          handleUserAuth={this.handleUserAuth}
          handleAddedTrip={this.handleAddedTrip}
          handleRemovedTrip={this.handleRemovedTrip}
          handleAddedBag={this.handleAddedBag}
          handleRemovedBag={this.handleRemovedBag}
          logIn={this.logIn}
          exit={this.exit}
        />
      </div>
    );
  }
}

export default App;
