import React from 'react';
import styled from 'styled-components';
import Game from './Game';

function GridView({ games }) {
  return (
    <Container>
      <div className='games_container'>
        {games.map((game) => {
          return <Game key={game.id} {...game} />;
        })}
      </div>
    </Container>
  );
}

const Container = styled.section`
  img {
    height: 390px;
  }
  .games_container {
    display: grid;
    gap: 2rem 1.5rem;
  }
  @media (min-width: 992px) {
    .games_container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .games_container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default GridView;
