import React from 'react'
import { Menu, Header, Icon, Modal, Button, Form } from 'semantic-ui-react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home'
import Trips from './Trips'
import Luggage from './Luggage'

const Navigation = (props) => {
    return (
        <Router>
        <div className='navigation'>
            <Menu pointing secondary size='massive'>
                <Menu.Item href='/'>
                    <Header as='h2'>
                        <Icon name='map signs'/>
                        <Header.Content className='icon'>
                            Travlr
                            <Header.Subheader><p className='logo-text'>Let's go explore</p></Header.Subheader>
                        </Header.Content>
                    </Header>
                </Menu.Item>
                <Menu.Item 
                    name='home' 
                    href='/'
                    active={props.activeTab === '/'}
                />
                <Menu.Item 
                    name='trips' 
                    href='/trips'
                    active={props.activeTab === '/trips'}
                />
                <Menu.Item 
                    name='luggage' 
                    href='/luggage'
                    active={props.activeTab === '/luggage'}
                />

                <Menu.Menu position='right'>
                    <Menu.Item onClick={props.handleUserAuth}>
                        <LogInModal 
                            logInOpen={props.logInOpen}
                            activeUser={props.activeUser}
                            logIn={props.logIn}
                        />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>

            <div className='centered-body'>
                <Route exact path="/" render={() => <Home activeUser={props.activeUser} />} />
                <Route exact path="/trips" render={() => <Trips activeUser={props.activeUser} />} />
                <Route exact path="/luggage" render={() => <Luggage activeUser={props.activeUser} />} />
            </div>
        </div>
        </Router>
    )
}

const LogInModal = (props) => {
    return (
        <Modal 
            open={props.logInOpen}
            size='tiny' 
            dimmer='blurring'
            trigger={<Button basic>{props.activeUser.length > 0 ? 'Log Out' : 'Log In/Sign Up'}</Button>}
        >
            <Modal.Header>
                <Icon name='user'/> 
                Log-in to Your Account
            </Modal.Header>
            <Form 
                size='small' 
                className='log-in'
                onSubmit={(e) => props.logIn(e)}
            >
                <Form.Input fluid label='Username' placeholder='Username' />
                <Form.Input fluid type='password' label='Password' placeholder='Password' />
                <Button floated='right' size='medium' type='submit'>Log-in</Button>
            </Form>

            <NestedModal logIn={props.logIn}/>
        </Modal>
    )
}

class NestedModal extends React.Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }

    open = () => this.setState({ isOpen: true })
    close = () => this.setState({ isOpen: false })

    render() {
        return (
            <div>
                <Modal
                    open={this.state.isOpen}
                    onOpen={this.open}
                    onClose={this.close}
                    size='small'
                    trigger={
                        <Button basic icon fluid onClick={this.open}>
                            Create an account <Icon name='right chevron' />
                        </Button>
                    }
                >
                    <Modal.Header ><Icon name='user'/> Create Your Account</Modal.Header>
                    <Modal.Content>
                        <Form 
                            className='log-in'
                            onSubmit={(e) => this.props.logIn(e)}
                        >
                            <Form.Input label='Username' placeholder='Username'/>
                            <Form.Input type='password' label='Password' placeholder='Password'/>
                            <Form.Group widths='equal'>
                                <Form.Input fluid label='First name' placeholder='First name' />
                                <Form.Input fluid label='Last name' placeholder='Last name' />
                            </Form.Group>
                            <Form.Input label='E-mail' placeholder='E-mail' />
                            <Button floated='right' size='medium' type='submit'>Create Account</Button>
                        </Form>
                    </Modal.Content>
                    <Button basic fluid floated='left' icon='arrow left' content='Go Back' onClick={this.close} />
                </Modal>
            </div>
        )
    }
}

export default Navigation