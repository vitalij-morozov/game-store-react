import React from 'react';
import { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useGamesContext } from '../context/GamesContext';
import { baseURL as url } from '../utils/consts';
import { Error, Loading, PageHero, GameImages, Stars, AddToCart } from '../components';
import { priceFormat } from '../utils/helpers';

const SingleGamePage = () => {
  const navigate = useNavigate();
  const { gameId } = useParams();

  const {
    single_game_loading: loading,
    single_game_error: error,
    single_game: game,
    getSingleGame,
  } = useGamesContext();

  useEffect(() => {
    getSingleGame(`${url}/products/${gameId}`);
  }, [gameId]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  }, [error]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const { title, image, genre, screenshots, price, stars } = game;

  return (
    <Container>
      <PageHero title={title} prod={game} />
      <div className='section section-center page'>
        <Link to='/games' className='btn'>
          back to all games
        </Link>
        <div className='product_center'>
          <GameImages images={screenshots} image={image} />
          <section className='content'>
            <h2>{title}</h2>
            <Stars stars={+stars} />
            <h5 className='price'>{priceFormat(price)}</h5>
            <p className='desc'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus tempore repellendus voluptatum,
              consequatur illum cum, architecto facere totam aut debitis omnis aperiam ratione! Officiis dignissimos
              fuga at voluptatibus nostrum. Voluptatibus!
            </p>
            <p className='info'>{genre}</p>
            <hr />
            <AddToCart prod={game} />
          </section>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.main`
  .product_center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  @media (min-width: 990px) {
    .product_center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.2rem;
    }
  }
`;

export default SingleGamePage;
