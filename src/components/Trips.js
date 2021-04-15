import React from "react";
import Sidebar from "./Sidebar";
import SingleTrip from "./SingleTrip";
import SingleTripDetails from "./SingleTripDetails";
import Mountains from "../photos/mountains.jpg";
import Boys from "../photos/boys.jpg";
import Milan from "../photos/italy.jpg";
import DefaultTripPhoto from "../photos/default-trip-photo.jpg";
import { Grid, Dimmer, Segment, Icon, Header, Button } from "semantic-ui-react";

const URL = "http://localhost:3000";
const TRIP_URL = URL + "/trips";

class Trips extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedTrip: [],
    };
  }

  addNewTrip = (user) => {
    fetch(TRIP_URL, {
      method: "POST",
      body: JSON.stringify({
        user_id: user.id,
        title: "My New Trip",
        description: "No Description Added...",
        budget: 0,
        photo: DefaultTripPhoto,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => this.props.handleAddedTrip(data));
  };

  handleTripClick = (trip) => {
    fetch(TRIP_URL + `/${trip.id}`)
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          selectedTrip: data,
        });
      });
  };

  handleBackClick = () => {
    this.setState({
      selectedTrip: [],
    });
  };

  handleTripEditClick = (trip, values) => {
    debugger;
    fetch(TRIP_URL + `/${trip.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        title: values.title,
        description: values.description,
        budget: values.budget,
        start_date: values.start_date,
        end_date: values.end_date,
        photo: values.photo,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          selectedTrip: data,
        });
        alert("Your trip has been updated!");
      });
  };

  handleDeleteClick = (e, trip) => {
    e.preventDefault();

    fetch(TRIP_URL + `/${trip.id}`, {
      method: "DELETE",
    }).then((resp) => resp.json(), this.props.handleRemovedTrip(trip));

    this.setState({
      selectedTrip: [],
    });
  };

  handleTripUpdatedEvents = (type, newItem) => {
    let trip = { ...this.state.selectedTrip };
    trip[type].push(newItem);

    this.setState({
      selectedTrip: trip,
    });
  };

  handleDeletedTransport = (e, transport) => {
    e.preventDefault();

    fetch(URL + "/transportations/" + transport.id, {
      method: "DELETE",
    }).then((resp) => resp.json());

    let tripCopy = { ...this.state.selectedTrip };
    let transpCopy = tripCopy.transportations.filter(
      (transp) => transp.id !== transport.id
    );
    tripCopy.transportations = transpCopy;
    this.setState({
      selectedTrip: tripCopy,
    });
  };

  handleDeletedHotel = (e, hotel) => {
    e.preventDefault();

    fetch(URL + "/hotels/" + hotel.id, {
      method: "DELETE",
    }).then((resp) => resp.json());

    let tripCopy = { ...this.state.selectedTrip };
    let hotelCopy = tripCopy.hotels.filter((h) => h.id !== hotel.id);
    tripCopy.hotels = hotelCopy;
    this.setState({
      selectedTrip: tripCopy,
    });
  };

  handleDeletedPlace = (e, place) => {
    e.preventDefault();

    fetch(URL + "/places/" + place.id, {
      method: "DELETE",
    }).then((resp) => resp.json());

    let tripCopy = { ...this.state.selectedTrip };
    let placeCopy = tripCopy.places.filter((p) => p.id !== place.id);
    tripCopy.places = placeCopy;
    this.setState({
      selectedTrip: tripCopy,
    });
  };

  handleDeletedEvent = (e, event) => {
    e.preventDefault();

    fetch(URL + "/events/" + event.id, {
      method: "DELETE",
    }).then((resp) => resp.json());

    let tripCopy = { ...this.state.selectedTrip };
    let eventCopy = tripCopy.events.filter((e) => e.id !== event.id);
    tripCopy.events = eventCopy;
    this.setState({
      selectedTrip: tripCopy,
    });
  };

  transportEdit = (transportation, values) => {
    fetch(URL + "/transportations/" + transportation.id, {
      method: "PATCH",
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
        notes: values.notes,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        let tripCopy = { ...this.state.selectedTrip };
        let transportations = tripCopy.transportations.filter(
          (transp) => transp.id !== transportation.id
        );
        transportations.push(transportation);
        tripCopy.transportations = transportations;

        this.setState({
          selectedTrip: tripCopy,
        });
        alert("Your trip has been updated!");
      });
  };

  hotelEdit = (hotel, values) => {
    fetch(URL + "/hotels/" + hotel.id, {
      method: "PATCH",
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
        notes: values.notes,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        let tripCopy = { ...this.state.selectedTrip };
        let hotels = tripCopy.hotels.filter((h) => h.id !== hotel.id);
        hotels.push(hotel);
        tripCopy.hotels = hotels;

        this.setState({
          selectedTrip: tripCopy,
        });
        alert("Your trip has been updated!");
      });
  };

  placeEdit = (place, values) => {
    fetch(URL + "/places/" + place.id, {
      method: "PATCH",
      body: JSON.stringify({
        name: values.name,
        cost: values.cost,
        address1: values.address1,
        address2: values.address2,
        city: values.city,
        us_state: values.us_state,
        zip: values.zip,
        country: values.country,
        notes: values.notes,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        let tripCopy = { ...this.state.selectedTrip };
        let places = tripCopy.places.filter((p) => p.id !== place.id);
        places.push(place);
        tripCopy.places = places;

        this.setState({
          selectedTrip: tripCopy,
        });
        alert("Your trip has been updated!");
      });
  };

  eventEdit = (event, values) => {
    fetch(URL + "/events/" + event.id, {
      method: "PATCH",
      body: JSON.stringify({
        name: values.name,
        cost: values.cost,
        address1: values.address1,
        address2: values.address2,
        city: values.city,
        us_state: values.us_state,
        zip: values.zip,
        country: values.country,
        notes: values.notes,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        let tripCopy = { ...this.state.selectedTrip };
        let events = tripCopy.events.filter((e) => e.id !== event.id);
        events.push(event);
        tripCopy.events = events;

        this.setState({
          selectedTrip: tripCopy,
        });
        alert("Your trip has been updated!");
      });
  };

  createCarryOn = (bag, trip) => {
    fetch("http://localhost:3000/carryons", {
      method: "POST",
      body: JSON.stringify({
        luggage_id: bag,
        trip_id: trip,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        let tripCopy = { ...this.state.selectedTrip };
        let carryons = tripCopy.carryons.push(data);
        tripCopy.carryons = carryons;

        this.setState({
          selectedTrip: tripCopy,
        });
      });
  };

  formatTime = (time) => {
    if (time) {
      let formattedTime;
      let format = time.split(":");

      if (format[0] > 12) {
        formattedTime = format[0] - 12 + ":" + format[1] + " PM";
      } else {
        formattedTime = time + " AM";
      }
      return formattedTime;
    }
  };

  formatDate = (date) => {
    if (date) {
      let format = date.split("-");
      return format[1] + "/" + format[2] + "/" + format[0];
    }
  };

  render() {
    return (
      <div>
        {this.props.activeUser.username ? (
          <LoggedIn
            activeUser={this.props.activeUser}
            addNewTrip={this.addNewTrip}
            handleTripClick={this.handleTripClick}
            handleBackClick={this.handleBackClick}
            handleTripEditClick={this.handleTripEditClick}
            handleDeleteClick={this.handleDeleteClick}
            handleDeletedTransport={this.handleDeletedTransport}
            handleDeletedHotel={this.handleDeletedHotel}
            handleDeletedPlace={this.handleDeletedPlace}
            handleDeletedEvent={this.handleDeletedEvent}
            selectedTrip={this.state.selectedTrip}
            handleTripUpdatedEvents={this.handleTripUpdatedEvents}
            transportEdit={this.transportEdit}
            hotelEdit={this.hotelEdit}
            placeEdit={this.placeEdit}
            eventEdit={this.eventEdit}
            formatTime={this.formatTime}
            formatDate={this.formatDate}
            createCarryOn={this.createCarryOn}
          />
        ) : (
          <BasicPage activeUser={activeUser} />
        )}
      </div>
    );
  }
}

const LoggedIn = (props) => {
  return (
    <div className="double-centered">
      <Grid>
        <Grid.Column width={4}>
          <Sidebar activeUser={props.activeUser} />
        </Grid.Column>
        <Grid.Column width={12}>
          {!props.selectedTrip.id ? (
            <TripContainer
              activeUser={props.activeUser}
              addNewTrip={props.addNewTrip}
              handleTripClick={props.handleTripClick}
              formatDate={props.formatDate}
            />
          ) : (
            <SingleTripDetails
              trip={props.selectedTrip}
              handleBackClick={props.handleBackClick}
              handleTripEditClick={props.handleTripEditClick}
              handleDeleteClick={props.handleDeleteClick}
              handleDeletedTransport={props.handleDeletedTransport}
              handleDeletedHotel={props.handleDeletedHotel}
              handleDeletedPlace={props.handleDeletedPlace}
              handleDeletedEvent={props.handleDeletedEvent}
              handleTripUpdatedEvents={props.handleTripUpdatedEvents}
              transportEdit={props.transportEdit}
              hotelEdit={props.hotelEdit}
              placeEdit={props.placeEdit}
              eventEdit={props.eventEdit}
              formatTime={props.formatTime}
              formatDate={props.formatDate}
              createCarryOn={props.createCarryOn}
            />
          )}
        </Grid.Column>
      </Grid>
    </div>
  );
};

const NewTrip = (props) => {
  return (
    <Button
      fluid
      onClick={() => props.addNewTrip(props.activeUser)}
      content="Create a New Trip"
    />
  );
};

const TripContainer = (props) => {
  return (
    <div>
      <NewTrip activeUser={props.activeUser} addNewTrip={props.addNewTrip} />
      <br />
      {props.activeUser.trips.map((trip) => (
        <SingleTrip
          key={trip.id}
          handleTripClick={props.handleTripClick}
          formatDate={props.formatDate}
          trip={trip}
        />
      ))}
    </div>
  );
};

const BasicPage = (props) => {
  return (
    <div className="double-centered">
      <Dimmer.Dimmable as={Segment}>
        <Grid>
          <Grid.Column width={4}>
            <Sidebar activeUser={activeUser} />
          </Grid.Column>
          <Grid.Column width={12}>
            <NewTrip />
            <br />
            {activeUser.trips.map((trip) => (
              <SingleTrip key={trip.id} trip={trip} />
            ))}
          </Grid.Column>
        </Grid>

        <Dimmer active={true}>
          <Header inverted as="h2" icon>
            <Icon name="heart" />
            Log in or create an account to access this feature!
          </Header>
        </Dimmer>
      </Dimmer.Dimmable>
    </div>
  );
};

const activeUser = {
  username: "JohnDoe01",
  bio:
    "My name is John and I'm dedicated to travelling to every country in the world!",
  created_at: "2019-11-10 06:06:25",
  trips: [
    {
      id: 1,
      title: "The Mountains",
      miles: 500,
      photo: Mountains,
      budget: 400,
      description:
        "Just a trip to the mountains with my friends! Can't wait to go skiing.",
      start_date: "04/15/2020",
      end_date: "04/18/2020",
    },
    {
      id: 3,
      title: "Boy's Trip",
      miles: 800,
      photo: Boys,
      budget: 1000,
      description: "Boy's trip!!! Time to go biking through the dunes.",
      start_date: "06/28/2020",
      end_date: "07/02/2020",
    },
    {
      id: 4,
      title: "Milan, Italy",
      miles: 6400,
      photo: Milan,
      budget: 2000,
      description:
        "Let's go to Italy and explore Isla Bella and hop over to Copenhagen.",
      start_date: "12/07/2019",
      end_date: "12/18/2019",
    },
  ],
  luggages: ["1", "2", "3", "4", "5"],
};

export default Trips;
