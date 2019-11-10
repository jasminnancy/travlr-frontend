import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation'


class App extends Component {

  constructor() {
    super()
    this.state = {
      activeTab: window.location.pathname,
      activeUser: [],
      loginModalOpen: false
    }
  }

  handleUserAuth = () => this.setState({ loginOpen: true})
  handleConfirm = () => this.setState({ loginOpen: false })
  handleCancel = () => this.setState({ loginOpen: false })

  render () {
    return (
      <div className="App">
        <Navigation 
          activeTab={this.state.activeTab} 
          activeUser={this.state.activeUser}
          handleUserAuth={this.handleUserAuth}
          loginModalOpen={this.state.loginModalOpen}
        />
      </div>
    );
  }
}

export default App;
