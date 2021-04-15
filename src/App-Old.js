const OldApp = () => {
  handleAddedTrip = (trip) => {
    let trips = [...this.state.activeUser.trips];
    trips.push(trip);

    this.setState({
      activeUser: { ...this.state.activeUser, trips: trips },
    });
  };

  handleRemovedTrip = (removedTrip) => {
    let trips = [...this.state.activeUser.trips];
    let updatedTrips = trips.filter((trip) => trip.id !== removedTrip.id);

    this.setState({
      activeUser: { ...this.state.activeUser, trips: updatedTrips },
    });
  };

  handleAddedBag = (bag) => {
    let bags = [...this.state.activeUser.luggages];
    bags.push(bag);

    this.setState({
      activeUser: { ...this.state.activeUser, luggages: bags },
    });
  };

  handleRemovedBag = (removedBag) => {
    let bags = [...this.state.activeUser.luggages];
    let updatedBags = bags.filter((trip) => trip.id !== removedBag.id);

    this.setState({
      activeUser: { ...this.state.activeUser, luggages: updatedBags },
    });
  };
};
