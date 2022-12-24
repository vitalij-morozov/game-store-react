import React from 'react';

import { ADD_TO_CART, REMOVE_FROM_CART, TOGGLE_CART_ITEM_COUNT, CLEAR_CART, CART_TOTALS } from '../utils/actions';

const CartReducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, amount, game } = action.payload;
    const temp = state.cart.find((i) => i.id === id);
    if (temp) {
      const tempCart = state.cart.map((item) => {
        if (item.id === id) {
          let newAmount = item.amount + amount;
          return { ...item, amount: newAmount };
        } else {
          return item;
        }
      });
    } else {
      const newItem = {
        id: id,
        title: game.title,
        amount,
        image: game.image,
        price: game.price,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
};

export default CartReducer;
