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

  const removeItem = (id) => {
    dispatch({ type: REMOVE_FROM_CART, payload: id });
  };

  const toggleAmount = (id, value) => {
    dispatch({ type: TOGGLE_CART_ITEM_COUNT, payload: { id, value } });
  };
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  useEffect(() => {
    dispatch({ type: CART_TOTALS });
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
