import React from 'react';
import { PageHero } from '../components';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import { useEffect } from 'react';

const CheckoutPage = () => {
  const { clearCart } = useCartContext();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <main>
      <PageHero title='checkout' />
      <Container className='page'>
        <h1>Thanks. Purchase Completed.</h1>
        <Link to='/games' className='btn'>
          Go Back
        </Link>
      </Container>
    </main>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export default CheckoutPage;
