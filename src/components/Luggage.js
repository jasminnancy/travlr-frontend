import React from 'react'
import { Segment } from 'semantic-ui-react'

const Luggage = (props) => {
    return (
        <div>
            {props.activeUser.username ? <LoggedIn activeUser={props.activeUser}/> : <BasicPage />}
        </div>
    )
}

const LoggedIn = () => {
    return (
        <div>
            logged in
        </div>
    )
}

const BasicPage = () => {
    return (
        <Segment>
            
        </Segment>
    )
}

export default Luggage