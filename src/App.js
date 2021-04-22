import React, { useState, useEffect } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./components/Shared/history";

//components
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Navigation/Footer";
import HomeView from "./views/HomeView";
import TripsView from "./views/TripsView";
import SingleTripView from "./views/SingleTripView";
import LuggageView from "./views/PageNotFound";
import PageNotFound from "./views/PageNotFound";

//styling
import "./App.css";
import { Loader } from "semantic-ui-react";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(window.location.pathname);
  const [activeUser, setActiveUser] = useState(null);

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
              <LuggageView loading={loading} activeUser={activeUser} />
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
