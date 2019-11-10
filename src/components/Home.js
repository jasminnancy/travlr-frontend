import React from 'react'

const Home = (props) => {
    return (
        <div>
            {props.activeUser.length > 0 ? <LoggedIn user={props.activeUser}/> : <BasicPage />}
        </div>
    )
}

const BasicPage = () => {
    return (
        <div>
            Welcome to Travlr! No one is currently logged in.
        </div>
    )
}

const LoggedIn = (props) => {
    return (
        <div>
            Welcome!
        </div>
    )
}

export default Home