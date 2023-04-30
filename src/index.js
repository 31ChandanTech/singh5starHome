import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-p0iahwcaw3z6kobw.us.auth0.com"
    clientId="CNHNMjgTymuf5lieikxzE9j1UBexioPn"
    authorizationParams={{

      redirect_uri: window.location.href

    }}
  >
    <Router>
      <App />
    </Router>
  </Auth0Provider>
);

