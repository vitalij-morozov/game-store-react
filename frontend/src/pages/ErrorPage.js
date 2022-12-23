import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ErrorPage = () => {
  return (
    <Container className='page-100'>
      <section>
        <h1>404</h1>
        <h3>Page Not Found</h3>
        <Link to='/' className='btn'>
          Back to HomePage
        </Link>
      </section>
    </Container>
  );
};

const Container = styled.main`
  background-color: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`;

export default ErrorPage;
