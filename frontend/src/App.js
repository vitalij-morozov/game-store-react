import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';

import {
  HomePage,
  AboutPage,
  CartPage,
  SingleGamePage,
  GamesPage,
  ErrorPage,
  CheckoutPage,
  PrivateRoute,
} from './pages';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/games' element={<GamesPage />} />
        <Route path='/games/:gameId' element={<SingleGamePage />} />
        <Route
          path='/checkout'
          element={
            <PrivateRoute>
              <CheckoutPage />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
