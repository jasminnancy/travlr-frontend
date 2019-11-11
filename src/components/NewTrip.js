import React from 'react'
import { Button } from 'semantic-ui-react'

const NewTrip = (props) => {
    return (
        <Button fluid onClick={() => props.addNewTrip(props.activeUser)}>
            Create a New Trip
        </Button>
    )
}

export default NewTrip