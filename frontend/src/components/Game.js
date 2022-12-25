import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { priceFormat } from '../utils/helpers';
import styled from 'styled-components';

function Game({ image, title, price, id }) {
  return (
    <Container>
      <div className='container'>
        <img src={image} alt={title} />
        <Link to={`/games/${id}`} className='link'>
          <FaSearch />
        </Link>
      </div>
      <footer>
        <h5 className='title'>{title}</h5>
        <p>{priceFormat(price)}</p>
      </footer>
    </Container>
  );
}

const Container = styled.article`
  .container {
    position: relative;
    background-color: var(--clr-black);
    border-radius: var(--radius);
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title {
    font-weight: 700;
    font-size: 1.1rem;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

  footer p {
    color: var(--clr-primary-7);
    letter-spacing: var(--spacing);
    font-size: 1.1rem;
  }
`;

export default Game;
