import React from 'react'

//components
import LoggedIn from './LoggedIn'
import BasicPage from './BasicPage'

const Home = (props) => {
    const {activeUser} = props
    return (
        <div>
            {!activeUser.username 
                ? <BasicPage /> 
                    : <LoggedIn activeUser={activeUser}/>}
        </div>
    )
}

export default Home