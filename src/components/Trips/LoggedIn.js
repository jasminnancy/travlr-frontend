import React from 'react'

//components
import Sidebar from '../Shared/Sidebar'
import TripContainer from './TripContainer'
import SingleTripDetails from './SingleTripDetails'

//styling
import { Grid } from 'semantic-ui-react'

const LoggedIn = (props) => {
  return (
      <div className='main-body double-centered'>
          <Grid>
              <Grid.Column width={4}>
                  <Sidebar activeUser={props.activeUser}/>
              </Grid.Column>  
              <Grid.Column width={12}>
                  {!props.selectedTrip.id 
                      ? <TripContainer 
                              activeUser={props.activeUser} 
                              addNewTrip={props.addNewTrip}
                              handleTripClick={props.handleTripClick}
                          />
                          : <SingleTripDetails 
                              trip={props.selectedTrip}
                              handleBackClick={props.handleBackClick}
                              handleTripEditClick={props.handleTripEditClick}
                              handleDeleteClick={props.handleDeleteClick}
                              handleDeletedTransport={props.handleDeletedTransport}
                              handleDeletedHotel={props.handleDeletedHotel}
                              handleDeletedPlace={props.handleDeletedPlace}
                              handleDeletedEvent={props.handleDeletedEvent}
                              handleTripUpdatedEvents={props.handleTripUpdatedEvents}
                              transportEdit={props.transportEdit}
                              hotelEdit={props.hotelEdit}
                              placeEdit={props.placeEdit}
                              eventEdit={props.eventEdit}
                              createCarryOn={props.createCarryOn}
                          />}
              </Grid.Column>
          </Grid>
      </div>
  )
}

export default LoggedIn