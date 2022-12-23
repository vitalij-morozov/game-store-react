import React from 'react';
import { PageHero } from '../components';
import styled from 'styled-components';

const CheckoutPage = () => {
  return (
    <main>
      <PageHero title='checkout' />
      <Container className='page'></Container>
    </main>
  );
};

const Container = styled.div``;

export default CheckoutPage;
