import React from 'react';
import { useGamesContext } from '../context/GamesContext';

import styled from 'styled-components';
import Error from './Error';
import Game from './Game';
import Loading from './Loading';

function TopDeals() {
  const { games_loading: loading, games_error: error, top_games: top } = useGamesContext();
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <Container className='section'>
      <div className='title'>
        <h2>TOP GAMES</h2>
        <div className='underline'></div>
      </div>
      <div className='section-center top'>
        {top.map((game) => (
          <Game key={game.id} {...game} />
        ))}
      </div>
    </Container>
  );
}

const Container = styled.section`
  background: var(--clr-grey-10);
  .top {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 100%;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 776px) {
    .top {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default TopDeals;
