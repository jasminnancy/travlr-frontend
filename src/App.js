import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation'

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
    fetch('http://localhost:9292/users')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        users: data
      })
    })
  }

  handleUserAuth = () => {
    this.setState({ 
      logInOpen: true
    })
  }

  logIn = (e) => {
    e.preventDefault()

    this.setState({ 
      activeUser: this.state.users[0], 
      logInOpen: false 
    })
  }

  render () {
    return (
      <div className="App">
        <Navigation 
          activeTab={this.state.activeTab} 
          activeUser={this.state.activeUser}
          handleUserAuth={this.handleUserAuth}
          logInOpen={this.state.logInOpen}
          exit={this.exit}
          logIn={this.logIn}
        />
      </div>
    );
  }
}

export default App;
