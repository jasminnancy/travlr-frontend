import React, {useState, useEffect} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

//styling
import {
  Dimmer, 
  Loader, 
  Image, 
  Segment
} from 'semantic-ui-react'

//components
import Navigation from './components/Navigation/Navigation'
import HomeView from './views/HomeView'
import TripsView from './views/TripsView'
import BagsView from './views/LuggageView'
import Footer from './components/Navigation/Footer'
import LuggageView from './views/LuggageView';

const App = () => {
  const [activeTab, setActiveTab] = useState(window.location.pathname)
  const [activeUser, setActiveUser] = useState([])
  const [users, setUsers] = useState([])
  const { loading, user, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (!loading && localStorage.getItem('current_user_id')) {
      fetch('http://localhost:3000/users/' + localStorage.getItem('current_user_id'))
      .then(resp => resp.json())
      .then(data => {
        setActiveUser(data)
      })
    }
    fetch('http://localhost:3000/users')
    .then(resp => resp.json())
    .then(data => {
      setUsers(data)
    })
  }, [])

  if (user) {
    debugger
  }

  // const logIn = (e) => {
  //   e.preventDefault()

  //   // setActiveUser(users[0])
  //   // localStorage.setItem('current_user_id', `${activeUser.id}`)
  // }

  if (loading) {
    return (
      <Segment>
        <Dimmer active>
          <Loader />
        </Dimmer>
        <Image src='/images/wireframe/short-paragraph.png' />
      </Segment>
    )
  }

  return (
    <div className="App">
      <Navigation 
        activeTab={activeTab} 
        activeUser={activeUser}
        logIn={loginWithRedirect}
      />
      <div className='centered-body'>
        <Switch>
          <Route exact path="/trips" render={() => <TripsView 
                                                    activeUser={activeUser} 
                                                    setActiveUser={setActiveUser} 
                                                    setActiveTab={setActiveTab} />} />
          <Route exact path="/luggage" render={() => <LuggageView 
                                                    activeUser={activeUser} 
                                                    setActiveUser={setActiveUser} 
                                                    setActiveTab={setActiveTab} />} />
          <Route path="/" render={() => <HomeView 
                                          activeUser={activeUser} 
                                          setActiveTab={setActiveTab} />} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
