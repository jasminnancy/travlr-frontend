import React, {useState} from 'react'

//components
import LoggedIn from './LoggedIn'
import BasicPage from './BasicPage'
import DefaultTripPhoto from '../../photos/default-trip-photo.jpg'

const URL = 'http://localhost:3000'
const TRIP_URL = URL + '/trips'

const Trips = (props) => {
    const {activeUser, setActiveUser} = props
    const [selectedTrip, setSelectedTrip] = useState([])

    const addNewTrip = (user) => {
        fetch(TRIP_URL, {
            method: 'POST',
            body: JSON.stringify({
                user_id: user.id,
                title: 'My New Trip',
                description: 'No Description Added...',
                budget: 0,
                photo: DefaultTripPhoto
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(data => {
            let updatedTrips = [...activeUser.trips, data]
            setActiveUser({
                ...activeUser,
                trips: updatedTrips
            })
        })
    }

    const handleTripClick = (trip) => {
        fetch(`${TRIP_URL}/${trip.id}`)
        .then(resp => resp.json())
        .then(data => setSelectedTrip(data))
    }

    const handleBackClick = () => {
        setSelectedTrip([])
    }

    const handleTripEditClick = (trip, values) => {
        fetch(`${TRIP_URL}/${trip.id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                title: values.title,
                description: values.description,
                budget: values.budget,
                start_date: values.start_date,
                end_date: values.end_date,
                photo: values.photo
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(data => {
            setSelectedTrip(data)
            alert('Your trip has been updated!')
        })
    }

    const handleDeleteClick = (e, trip) => {
        e.preventDefault()

        fetch(`${TRIP_URL}/${trip.id}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())

        let updatedTrips = activeUser.trips.filter(t => t.id !== trip.id)
        setActiveUser({
          ...activeUser,
          updatedTrips
        })

        handleBackClick()
    }

    const handleTripUpdatedEvents = (type, newItem) => {
        let trip = {...this.state.selectedTrip}
        trip[type].push(newItem)
        setSelectedTrip(trip)
    }

    const handleDeletedTransport = (e, transport) => {
        e.preventDefault()

        fetch(`${URL}/transportations/${transport.id}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        
        let tripCopy = {...selectedTrip}
        let transpCopy = tripCopy.transportations.filter(t => t.id !== transport.id)
        tripCopy.transportations = transpCopy
        setSelectedTrip(tripCopy)
    }

    const handleDeletedHotel = (e, hotel) => {
        e.preventDefault()

        fetch(`${URL}/hotels/${hotel.id}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        
        let tripCopy = {...this.state.selectedTrip}
        let hotelCopy = tripCopy.hotels.filter(h => h.id !== hotel.id)
        tripCopy.hotels = hotelCopy
        setSelectedTrip(tripCopy)
    }

    const handleDeletedPlace = (e, place) => {
        e.preventDefault()

        fetch(`${URL}/places/${place.id}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        
        let tripCopy = {...this.state.selectedTrip}
        let placeCopy = tripCopy.places.filter(p => p.id !== place.id)
        tripCopy.places = placeCopy
        setSelectedTrip(tripCopy)
    }

    const handleDeletedEvent = (e, event) => {
        e.preventDefault()

        fetch(`${URL}/events/${event.id}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        
        let tripCopy = {...this.state.selectedTrip}
        let eventCopy = tripCopy.events.filter(e => e.id !== event.id)
        tripCopy.events = eventCopy
        setSelectedTrip(tripCopy)
    }

    const transportEdit = (transportation, values) => {
        fetch(`${URL}/transportations/${transportation.id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                name: values.name,
                transport_type: values.transport_type,
                company: values.company,
                cost: values.cost,
                starting_date: values.starting_date,
                starting_time: values.starting_time,
                ending_date: values.ending_date,
                ending_time: values.ending_time,
                starting_location: values.starting_location,
                destination: values.destination,
                total_miles: values.total_miles,
                confirmation_code: values.confirmation_code,
                notes: values.notes
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(data => {
            let tripCopy = {...this.state.selectedTrip}
            let transportations = tripCopy.transportations.filter(t => t.id !== transportation.id)
            transportations.push(transportation)
            tripCopy.transportations = transportations
            setSelectedTrip(tripCopy)
            alert('Your trip has been updated!')
        })
    }

    const hotelEdit = (hotel, values) => {
        fetch(`${URL}/hotels/${hotel.id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                name: values.name,
                cost: values.cost,
                starting_date: values.starting_date,
                ending_date: values.ending_date,
                address1: values.address1,
                address2: values.address2,
                city: values.city,
                us_state: values.us_state,
                zip: values.zip,
                country: values.country,
                notes: values.notes
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(data => {
            let tripCopy = {...this.state.selectedTrip}
            let hotels = tripCopy.hotels.filter(h => h.id !== hotel.id)
            hotels.push(hotel)
            tripCopy.hotels = hotels
            setSelectedTrip(tripCopy)
            alert('Your trip has been updated!')
        })
    }

    const placeEdit = (place, values) => {
        fetch(`${URL}/places/${place.id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                name: values.name,
                cost: values.cost,
                address1: values.address1,
                address2: values.address2,
                city: values.city,
                us_state: values.us_state,
                zip: values.zip,
                country: values.country,
                notes: values.notes
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(data => {
            let tripCopy = {...this.state.selectedTrip}
            let places = tripCopy.places.filter(p => p.id !== place.id)
            places.push(place)
            tripCopy.places = places
            setSelectedTrip(tripCopy)
            alert('Your trip has been updated!')
        })
    }

    const eventEdit = (event, values) => {
        fetch(`${URL}/events/${event.id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                name: values.name,
                cost: values.cost,
                address1: values.address1,
                address2: values.address2,
                city: values.city,
                us_state: values.us_state,
                zip: values.zip,
                country: values.country,
                notes: values.notes
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(data => {
            let tripCopy = {...this.state.selectedTrip}
            let events = tripCopy.events.filter(e => e.id !== event.id)
            events.push(event)
            tripCopy.events = events
            setSelectedTrip(tripCopy)
            alert('Your trip has been updated!')
        })
    }

    const createCarryOn = (bag, trip) => {
        fetch(`${URL}/carryons`, {
            method: 'POST',
            body: JSON.stringify({
                luggage_id: bag,
                trip_id: trip
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(data => {
            let tripCopy = {...this.state.selectedTrip}
            let carryons = tripCopy.carryons.push(data)
            tripCopy.carryons = carryons
            setSelectedTrip(tripCopy)
        })
    }

    return (
        <div>
            {activeUser.username 
                ? <LoggedIn 
                    activeUser={activeUser} 
                    addNewTrip={addNewTrip}
                    handleTripClick={handleTripClick}
                    handleBackClick={handleBackClick}
                    handleTripEditClick={handleTripEditClick}
                    handleDeleteClick={handleDeleteClick}
                    handleDeletedTransport={handleDeletedTransport}
                    handleDeletedHotel={handleDeletedHotel}
                    handleDeletedPlace={handleDeletedPlace}
                    handleDeletedEvent={handleDeletedEvent}
                    selectedTrip={selectedTrip}
                    handleTripUpdatedEvents={handleTripUpdatedEvents}
                    transportEdit={transportEdit}
                    hotelEdit={hotelEdit}
                    placeEdit={placeEdit}
                    eventEdit={eventEdit}
                    createCarryOn={createCarryOn}
                /> 
                    : <BasicPage activeUser={activeUser}/>}
        </div>
    )
}

export default Trips