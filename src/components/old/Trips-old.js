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
