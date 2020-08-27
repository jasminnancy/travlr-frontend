import React from 'react'

//components
import Sidebar from '../Shared/Sidebar'
import BagsContainer from './BagsContainer'
import {offlineUser} from '../Shared/offlineUser'

//styling
import { 
  Grid, 
  Dimmer, 
  Segment, 
  Header, 
  Icon 
} from 'semantic-ui-react'

const BasicPage = () => {
  return (
    <div className='main-body double-centered'>
      <Dimmer.Dimmable as={Segment}>
        <Grid>
          <Grid.Column width={4}>
            <Sidebar activeUser={offlineUser.activeUser}/>
          </Grid.Column>  
          <Grid.Column width={12}>
            <BagsContainer activeUser={offlineUser.activeUser}/>
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

export default BasicPage