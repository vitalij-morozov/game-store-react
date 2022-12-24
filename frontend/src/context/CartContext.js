import React, { useContext } from 'react';
import { useReducer } from 'react';
import { ADD_TO_CART, REMOVE_FROM_CART, TOGGLE_CART_ITEM_COUNT, CLEAR_CART, CART_TOTALS } from '../utils/actions';

import reducer from '../reducers/CartReducer';
import { useEffect } from 'react';

const getLocalStorage = () => {
  let cart = localStorage.getItem('cart');
  if (cart) {
    return JSON.parse(localStorage.getItem('cart'));
  } else {
    return [];
  }
};

const itinialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
};
const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, itinialState);

  const addToCart = (id, amount, game) => {
    dispatch({ type: ADD_TO_CART, payload: { id, amount, game } });
  };

  const removeItem = (id) => {};
  const toggleAmount = (id, value) => {};
  const clearCart = () => {};

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);
  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}></CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
