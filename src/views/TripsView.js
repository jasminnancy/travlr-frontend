import React, {useEffect} from 'react'

//components
import Trips from '../components/Trips/Trips'

const TripsView = (props) => {
  const {
    activeUser, 
    setActiveUser,
    setActiveTab
  } = props

  useEffect(() => {
    setActiveTab(window.location.pathname)
  }, [])

  return (
    <div>
      <Trips 
        activeUser={activeUser}
        setActiveUser={setActiveUser}
      />
    </div>
  )
}

export default TripsView