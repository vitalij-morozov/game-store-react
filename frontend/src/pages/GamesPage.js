import React from 'react';
import { Filters, GamesList, Sort, PageHero } from '../components';
import styled from 'styled-components';

const GamesPage = () => {
  return (
    <main>
      <PageHero title='Games' />
      <Container className='page'>
        <div className='section-center games'>
          <Filters />
          <div>
            <Sort />
            <GamesList />
          </div>
        </div>
      </Container>
    </main>
  );
};
const Container = styled.div`
  .games {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }

  @media (min-width: 768px) {
    .games {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default GamesPage;
