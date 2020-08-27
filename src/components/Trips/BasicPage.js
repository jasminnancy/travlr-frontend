import React from 'react'

//components
import SingleTrip from './SingleTrip'
import Sidebar from '../Shared/Sidebar'
import Mountains from '../../photos/mountains.jpg'
import Boys from '../../photos/boys.jpg'
import Milan from '../../photos/italy.jpg'

//styling
import { 
  Grid, 
  Dimmer, 
  Segment, 
  Icon, 
  Header,
  Button
} from 'semantic-ui-react'

const BasicPage = () => {
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

  return (
      <div className='main-body double-centered'>
          <Dimmer.Dimmable as={Segment}>
              <Grid>
                  <Grid.Column width={4}>
                      <Sidebar activeUser={activeUser}/>
                  </Grid.Column>  
                  <Grid.Column width={12}>
                    <Button 
                      fluid 
                      // onClick={() => addNewTrip(activeUser)} 
                      content='Create a New Trip' 
                    />
                      <br/>
                      {activeUser.trips.map(t => <SingleTrip key={t.id} trip={t}/>)}
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