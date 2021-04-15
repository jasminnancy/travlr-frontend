import React, {useEffect} from 'react'

//components
import Luggage from '../components/Luggage/Luggage'

const LuggageView = (props) => {
  const {
    activeUser, 
    setActiveUser,
    setActiveTab
  } = props

  useEffect(() => {
    setActiveTab(window.location.pathname)
  }, [setActiveTab])
  
  return (
    <div>
      <Luggage 
        activeUser={activeUser} 
        setActiveUser={setActiveUser} 
      />
    </div>
  )
}

export default LuggageView