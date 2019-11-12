import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation'

const URL_USERS = 'http://localhost:9292/users'

class App extends Component {

  constructor() {
    super()
    this.state = {
      activeTab: window.location.pathname,
      logInOpen: false,
      activeUser: [],
      users: []
    }
  }

  componentDidMount () {
    fetch(URL_USERS)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        users: data
      })
    })
    
    if (localStorage.getItem('current_user_id')) {
      fetch(URL_USERS + '/' + localStorage.getItem('current_user_id'))
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          activeUser: data
        })
      })
    }
  }

  handleUserAuth = () => {
    this.setState({ 
      logInOpen: true
    })
  }

  handleAddedTrip = (trip) => {
    let trips = [...this.state.activeUser.trips]
    trips.push(trip)

    this.setState({
      activeUser: {...this.state.activeUser, trips: trips}
    })
  }

  handleAddedBag = (bag) => {
    let bags = [...this.state.activeUser.luggages]
    bags.push(bag)

    this.setState({
      activeUser: {...this.state.activeUser, luggages: bags}
    })
  }

  logIn = (e) => {
    e.preventDefault()

    this.setState({ 
      activeUser: this.state.users[0], 
      logInOpen: false 
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
          handleAddedBag={this.handleAddedBag}
          logInOpen={this.state.logInOpen}
          exit={this.exit}
          logIn={this.logIn}
        />
      </div>
    );
  }
}

export default App;
