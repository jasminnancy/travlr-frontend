import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

//components
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Navigation/Footer";
import HomeView from "./views/HomeView";
import TripsView from "./views/TripsView";
import LuggageView from "./views/PageNotFound";
import PageNotFound from "./views/PageNotFound";

//styling
import "./App.css";

const history = createBrowserHistory();

const App = () => {
  const [activeTab, setActiveTab] = useState(window.location.pathname);
  const [activeUser, setActiveUser] = useState(null);

  useEffect(() => {
    setActiveTab(window.location.pathname);

    let userId = localStorage.getItem("current_user_id");
    if (!userId) return;

    fetch(`http://localhost:3000/users/${userId}`)
      .then((resp) => resp.json())
      .then((data) => setActiveUser(data));
  }, []);

  return (
    <div className="App">
      <Navigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setActiveUser={setActiveUser}
      />
      <Router history={history}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <HomeView activeUser={activeUser} setActiveTab={setActiveTab} />
            )}
          />
          <Route
            exact
            path="/trips"
            render={() => <TripsView activeUser={activeUser} />}
          />
          <Route
            exact
            path="/luggage"
            render={() => <LuggageView activeUser={activeUser} />}
          />
          <Route path="/" render={() => <PageNotFound />} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
