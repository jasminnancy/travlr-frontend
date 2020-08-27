import React from 'react'

//components
import {formatDate} from '../Shared/utils'
import SingleTrip from './SingleTrip'

//styling
import { Button } from 'semantic-ui-react'

const TripContainer = (props) => {
  const {
    addNewTrip,
    activeUser,
    handleTripClick,
  } = props
  return (
      <div>
        <Button 
          fluid 
          onClick={() => addNewTrip(activeUser)} 
          content='Create a New Trip' 
        />
        <br/>
        {activeUser.trips.map(trip => (
          <SingleTrip 
            key={trip.id} 
            handleTripClick={handleTripClick} 
            formatDate={formatDate}
            trip={trip}
          />
        ))}
    </div>
  )
}

export default TripContainer