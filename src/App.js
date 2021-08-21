import React, { useState, useEffect } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./components/Shared/history";

//components
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Navigation/Footer";
import HomeView from "./views/HomeView";
import TripsView from "./views/TripsView";
import SingleTripView from "./views/SingleTripView";
import LuggageView from "./views/LuggageView";
import SingleLuggageView from "./views/SingleLuggageView";
import PageNotFound from "./views/PageNotFound";

//styling
import "./App.css";
import { Loader } from "semantic-ui-react";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(window.location.pathname);
  const [activeUser, setActiveUser] = useState(null);

  // fetches user data once activeUser exists
  useEffect(() => {
    setActiveTab(window.location.pathname);
    let userId = localStorage.getItem("current_user_id");
    if (!userId || activeUser) return;
    setLoading(true);

    fetch(`http://localhost:3000/users/${userId}`)
      .then((resp) => resp.json())
      .then((data) => {
        setLoading(false);
        setActiveUser(data);
      });
  }, [activeUser]);

  const handleAddedBag = (bag) => {
    setActiveUser({ ...activeUser, luggages: [...activeUser.luggages, bag] });
  };

  const handleRemovedBag = (removedBag) => {
    let updatedBags = [...activeUser.luggages].filter(
      (trip) => trip.id !== removedBag.id
    );
    setActiveUser({ ...activeUser, luggages: updatedBags });
  };

  // don't render the App.js component when app is loading
  if (loading) return <Loader active />;

  return (
    <div className="App">
      <Router history={history}>
        <Navigation
          activeTab={activeTab}
          activeUser={activeUser}
          setActiveTab={setActiveTab}
          setActiveUser={setActiveUser}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <HomeView activeUser={activeUser} />}
          />
          <Route
            exact
            path="/trips"
            render={() => (
              <TripsView
                activeUser={activeUser}
                setActiveUser={setActiveUser}
              />
            )}
          />
          <Route
            exact
            path="/trips/:id"
            render={() => (
              <SingleTripView
                activeUser={activeUser}
                setActiveUser={setActiveUser}
              />
            )}
          />
          <Route
            exact
            path="/luggage"
            render={() => (
              <LuggageView
                activeUser={activeUser}
                handleAddedBag={handleAddedBag}
              />
            )}
          />
          <Route
            exact
            path="/luggage/:id"
            render={() => (
              <SingleLuggageView
                activeUser={activeUser}
                handleRemovedBag={handleRemovedBag}
              />
            )}
          />
          <Route path="*" render={() => <PageNotFound />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
