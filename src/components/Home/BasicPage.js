import React from 'react'

//components
import MainImage from '../../photos/homepage.jpg'
import Suitcase2 from '../../photos/suitcase2.jpg'
import Event1 from '../../photos/event1.jpg'
import Money1 from '../../photos/money1.jpg'

//styling
import { 
    Icon, 
    Statistic, 
    Grid, 
    Image, 
    Segment, 
    Header
} from 'semantic-ui-react'

const BasicPage = () => {
  return (
      <div>
          <Image className='main-body' src={MainImage} alt='map'/>
          <Statistic.Group widths='four'>
              <Statistic>
                  <Statistic.Value>800,000</Statistic.Value>
                  <Statistic.Label>Miles</Statistic.Label>
              </Statistic>
              <Statistic>
                  <Statistic.Value text>
                      one
                      <br />
                      Hundred
                  </Statistic.Value>
                  <Statistic.Label>Suitcases</Statistic.Label>
              </Statistic>
              <Statistic>
                  <Statistic.Value>
                      <Icon name='plane' /> 76{/* props.trips.total */}
                  </Statistic.Value>
                  <Statistic.Label>Trips</Statistic.Label>
              </Statistic>
              <Statistic>
                  <Statistic.Value>
                      42 {/* props.users.total */}
              </Statistic.Value>
              <Statistic.Label>Members</Statistic.Label>
              </Statistic>
          </Statistic.Group>
          <div className="ui divider"></div>
          <Grid centered columns={3} padded={true}>
              <Grid.Column>
                  <Segment>
                      <Image fluid rounded src={Suitcase2} />
                      <Header as='h1' textAlign='center'>
                          Track
                          <Header.Subheader>how far your bags have travelled</Header.Subheader>
                      </Header>
                  </Segment>
              </Grid.Column>
              <Grid.Column>
                  <Segment>
                      <Image fluid rounded src={Event1} />
                      <Header as='h1' textAlign='center'>
                          Add
                          <Header.Subheader>fun events and places to see</Header.Subheader>
                      </Header>
                  </Segment>
              </Grid.Column>
              <Grid.Column>
                  <Segment>
                      <Image fluid rounded src={Money1} />
                      <Header as='h1' textAlign='center'>
                          Budget
                          <Header.Subheader>your entire trip easily</Header.Subheader>
                      </Header>
                  </Segment>
              </Grid.Column>
          </Grid>
          <div className="ui divider"></div>
      </div>
  )
}

export default BasicPage