import React from 'react'
import MainImage from '../photos/homepage.jpg'
import Suitcase1 from '../photos/suitcase1.jpg'
import Suitcase2 from '../photos/suitcase2.jpg'
import Event1 from '../photos/event1.jpg'
import Event2 from '../photos/event2.jpg'
import Money1 from '../photos/money1.jpg'
import Money2 from '../photos/money2.jpg'
import { Icon, Statistic, Grid, Image, Segment, Header, Reveal } from 'semantic-ui-react'

const Home = (props) => {
    return (
        <div>
            {props.activeUser.username ? <LoggedIn activeUser={props.activeUser}/> : <BasicPage />}
        </div>
    )
}

const LoggedIn = (props) => {
    return (
        <div>
            Welcome {props.activeUser.username}!
        </div>
    )
}

const BasicPage = (props) => {
    return (
        <div>
            <img className='main-image' src={MainImage} alt='map'/>
            
            <Statistic.Group widths='four'>
                <Statistic>
                    <Statistic.Value>22</Statistic.Value>
                    <Statistic.Label>Suitcases</Statistic.Label>
                </Statistic>
                <Statistic>
                    <Statistic.Value text>
                        Three
                        <br />
                        Thousand
                    </Statistic.Value>
                    <Statistic.Label>Miles</Statistic.Label>
                </Statistic>
                <Statistic>
                    <Statistic.Value>
                        <Icon name='plane' /> 10{/* props.trips.total */}
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

            <div class="ui divider"></div>

            <Grid centered columns={3} padded='true'>
                <Grid.Column>
                    <Segment>
                        <Reveal animated='fade'>
                            <Reveal.Content visible>
                                <Image fluid rounded src={Suitcase1} />
                            </Reveal.Content>
                            <Reveal.Content hidden>
                                <Image fluid rounded src={Suitcase2} />
                            </Reveal.Content>
                        </Reveal>
                        <Header as='h1' textAlign='center'>
                            Track
                            <Header.Subheader>how far your bags have travelled</Header.Subheader>
                        </Header>
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>
                        <Reveal animated='fade'>
                            <Reveal.Content visible>
                                <Image fluid rounded src={Event1} />
                            </Reveal.Content>
                            <Reveal.Content hidden>
                                <Image fluid rounded src={Event2} />
                            </Reveal.Content>
                        </Reveal>
                        <Header as='h1' textAlign='center'>
                            Add
                            <Header.Subheader>fun events and places to see</Header.Subheader>
                        </Header>
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>
                        <Reveal animated='fade'>
                            <Reveal.Content visible>
                                <Image fluid rounded src={Money1} />
                            </Reveal.Content>
                            <Reveal.Content hidden>
                                <Image fluid rounded src={Money2} />
                            </Reveal.Content>
                        </Reveal>
                        <Header as='h1' textAlign='center'>
                            Budget
                            <Header.Subheader>your entire trip easily</Header.Subheader>
                        </Header>
                    </Segment>
                </Grid.Column>
            </Grid>

            <div class="ui divider"></div>
        </div>
    )
}

export default Home