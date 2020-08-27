import React from 'react'
import history from '../../utils/history'

//styling
import {
    Menu, 
    Header, 
    Icon, 
    Button
} from 'semantic-ui-react'

const Navigation = (props) => {
  const {
    activeTab,
    activeUser,
    logIn
  } = props

  const logOut = () => {
    localStorage.clear()
    document.location.reload()
  }

  return (
    <div className='navigation'>
      <Menu pointing secondary size='massive'>
        <Menu.Item onClick={() => history.push('/')}>
          <Header as='h2' >
            <Icon name='map signs' color='brown'/>
            <Header.Content className='icon' >
              Travlr
              <Header.Subheader>
                <p>Let's go explore</p>
              </Header.Subheader>
            </Header.Content>
          </Header>
        </Menu.Item>
        <Menu.Item 
          name='home' 
          onClick={() => history.push('/')}
          active={activeTab === '/'}
        />
        <Menu.Item 
          name='trips' 
          onClick={() => history.push('/trips')}
          active={activeTab === '/trips'}
        />
        <Menu.Item 
          name='luggage' 
          onClick={() => history.push('/luggage')}
          active={activeTab === '/luggage'}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            {!activeUser.username 
              ? <Button basic onClick={logIn}>Log In/Sign Up</Button>
                : <Button onClick={logOut}>Log Out</Button>}
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  )
}

export default Navigation