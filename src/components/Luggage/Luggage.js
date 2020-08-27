import React, {useState} from 'react'

//components
import BasicPage from './BasicPage'
import LoggedIn from './LoggedIn'

const BAG_URL = 'http://localhost:3000/luggages'

const Luggage = (props) => {
  const {activeUser, setActiveUser} = props
  const [selectedBag, setSelectedBag] = useState([])

  const addNewBag = (user) => {
    fetch(BAG_URL, {
      method: 'POST',
      body: JSON.stringify({
        user_id: user.id,
        miles_travelled: 0,
        name: 'Untitled',
        luggage_type: 'suitcase'
      }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(data => handleAddedBag(data))
  }

  const handleAddedBag = (bag) => {
    let updatedBags = [...activeUser.luggages, bag]
    setActiveUser({
      ...activeUser,
      luggages: updatedBags
    })
  }

  const handleBagClick = (bag) => {
    fetch(BAG_URL + `/${bag.id}`)
    .then(resp => resp.json())
    .then(data => setSelectedBag(data))
  }

  const handleBackClick = () => {
    setSelectedBag([])
  }

  const handleBagEditClick = (bag, values) => {
    fetch(BAG_URL + `/${bag.id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        name: values.name,
        size: values.size,
        luggage_type: values.luggage_type
      }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(data => {
      setSelectedBag(data)
      alert('Your bag has been updated!')
    })
  }

  const handleDeleteClick = (e, bag) => {
    e.preventDefault()

    fetch(BAG_URL + `/${bag.id}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())

    let updatedBags = activeUser.luggages.filter(t => t.id !== bag.id)
    setActiveUser({
      ...activeUser,
      luggages: updatedBags
    })
    handleBackClick()
  }

  return (
    <div>
      {activeUser.username 
        ? <LoggedIn 
          activeUser={activeUser}
          addNewBag={addNewBag}
          handleBagClick={handleBagClick}
          handleBackClick={handleBackClick}
          handleBagEditClick={handleBagEditClick}
          handleDeleteClick={handleDeleteClick}
          selectedBag={selectedBag}
        /> 
          : <BasicPage activeUser={activeUser}/>}
    </div>
  )
}



export default Luggage