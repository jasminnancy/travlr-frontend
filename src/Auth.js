import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { Router } from 'react-router-dom';

// Components
import history from "./utils/history";
import config from "./auth_config.json";
import App from "./App";

const Auth = () => {
  // A function that routes the user to the right place
  // after login
  const onRedirectCallback = (appState) => {
    history.push(
      appState && appState.returnTo
        ? appState.returnTo
          : window.location.pathname
    );
  };

  return (
    <Auth0Provider
      domain={config.domain}
      clientId={config.clientId}
      redirectUri={"https://localhost:3001"}
      onRedirectCallback={onRedirectCallback}
    >
      <Router history={history}>
        <App />
      </Router>
    </Auth0Provider>
  )
}

export default Auth