import React from 'react'

//components
import Sidebar from '../Shared/Sidebar'
import SingleBagDetails from './SingleBagDetails'
import BagsContainer from './BagsContainer'

//styling
import { Grid } from 'semantic-ui-react'

const LoggedIn = (props) => {
  const {
    activeUser,
    addNewBag,
    handleBagClick,
    selectedBag,
    handleBackClick,
    handleBagEditClick,
    handleDeleteClick
  } = props

  return (
    <div className='main-body double-centered'>
      <Grid>
        <Grid.Column width={4}>
          <Sidebar activeUser={activeUser}/>
        </Grid.Column>  
        <Grid.Column width={12}>
          {!selectedBag.id
            ? <BagsContainer 
              activeUser={activeUser}
              addNewBag={addNewBag}
              handleBagClick={handleBagClick}
            />
              : <SingleBagDetails 
                bag={selectedBag}
                handleBackClick={handleBackClick}
                handleBagEditClick={handleBagEditClick}
                handleDeleteClick={handleDeleteClick}
              />}
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default LoggedIn