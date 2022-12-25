import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GamesProvider } from './context/GamesContext';
import { FilterProvider } from './context/FilterContext';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain='dev-hxcwdpiz7ask8tkd.us.auth0.com'
    clientId='bdBc56We7GRfF8gwM2Jx2oSwLohost6f'
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <UserProvider>
      <GamesProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </GamesProvider>
    </UserProvider>
  </Auth0Provider>
);
