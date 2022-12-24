import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useGamesContext } from '../context/GamesContext';
import { useCartContext } from '../context/CartContext';

function CartButtons() {
  const { closeSidebar } = useGamesContext();
  const { total_items } = useCartContext();
  return (
    <Container className='cart_btn_container'>
      <Link to='/cart' className='cart_btn' onClick={closeSidebar}>
        <span className='cart_container'>
          <FaShoppingCart />
          <span className='cart_amount'>{total_items}</span>
        </span>
      </Link>
      <button type='button' className='auth_btn'>
        Login
      </button>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 220px;

  .cart_btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;

    align-items: center;
  }
  .cart_container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart_amount {
    position: absolute;
    top: -2px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.8rem;
    color: var(--clr-white);
    padding: 10px;
  }
  .auth_btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`;

export default CartButtons;
