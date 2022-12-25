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
      return { ...state, cart: tempCart };
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
  if (action.type === REMOVE_FROM_CART) {
    const temp = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: temp };
  }
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === TOGGLE_CART_ITEM_COUNT) {
    const { id, value } = action.payload;
    const temp = state.cart.map((item) => {
      if (item.id === id) {
        if (value === 'inc') {
          let newAmount = item.amount + 1;
          return { ...item, amount: newAmount };
        }
        if (value === 'dec') {
          let newAmount = item.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          return { ...item, amount: newAmount };
        }
      } else {
        return item;
      }
    });
    return { ...state, cart: temp };
  }

  if (action.type === CART_TOTALS) {
    const { total_items, total_amount } = state.cart.reduce(
      (total, item) => {
        const { amount, price } = item;
        total.total_items += amount;
        total.total_amount += price * amount;
        return total;
      },
      { total_items: 0, total_amount: 0 }
    );
    return { ...state, total_items, total_amount };
  }
};

export default CartReducer;
