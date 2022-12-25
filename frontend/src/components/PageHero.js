import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function PageHero({ title, prod }) {
  return (
    <Container>
      <div className='section-center'>
        <h3>
          <Link to='/'>Home</Link>
          {prod && <Link to='/games'>/ Games</Link>}/ {title}
        </h3>
      </div>
    </Container>
  );
}

const Container = styled.section`
  background-color: var(--clr-primary-6);
  width: 100%;
  min-height: 15vh;
  display: flex;
  align-items: center;
  color: var(--clr-black);

  h3 {
    margin: 0;
  }
  a {
    color: var(--clr-primary-4);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`;

export default PageHero;
