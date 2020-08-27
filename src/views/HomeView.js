import React, {useEffect} from 'react'

import Home from '../components/Home/Home'

const HomeView = (props) => {
  const {
    activeUser,
    setActiveTab
  } = props

  useEffect(() => {
    setActiveTab(window.location.pathname)
  }, [])
  
  return (
    <Home activeUser={activeUser} />
  )
}

export default HomeView