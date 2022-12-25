import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import CartColumns from './CartColumns';
import CartItem from './CartItem';
import CartTotals from './CartTotals';

function CartContent() {
  const { cart, clearCart } = useCartContext();
  console.log('cart ===', cart);
  return (
    <Container className='section section-center'>
      <CartColumns />
      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <hr />
      <div className='link_container'>
        <Link to='/games' className='link_btn'>
          Back To Shopping
        </Link>
        <button type='button' className='link_btn clear_btn' onClick={clearCart}>
          Clear Cart
        </button>
      </div>
      <CartTotals />
    </Container>
  );
}
const Container = styled.section`
  .link_container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link_btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear_btn {
    background: var(--clr-black);
  }
`;

export default CartContent;
