import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { CartContent, PageHero } from '../components';

const CartPage = () => {
  const { cart } = useCartContext();

  if (cart.length < 1) {
    return (
      <Container className='page-100'>
        <div className='empty'>
          <h2>Cart is Empty</h2>
          <Link to='/games' className='btn'>
            GO BACK TO SHOP
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <main>
      <PageHero />
      <Container className='page'>
        <CartContent />
      </Container>
    </main>
  );
};

const Container = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;

export default CartPage;
