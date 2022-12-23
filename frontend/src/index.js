import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GamesProvider } from './context/GamesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <GamesProvider>
    <App />
  </GamesProvider>
);
