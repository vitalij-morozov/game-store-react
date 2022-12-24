import React from 'react';
import styled from 'styled-components';
import { priceFormat } from '../utils/helpers';
import { Link } from 'react-router-dom';

function ListView({ games }) {
  return (
    <Container>
      {games.map((game) => {
        const { id, image, title, price, genre } = game;
        return (
          <article key={id}>
            <img src={image} alt={title} />
            <div>
              <h4>{title}</h4>
              <h5 className='price'>{priceFormat(price)}</h5>
              <p>{genre}</p>
              <Link to={`/games/${id}`} className='btn'>
                Learn More
              </Link>
            </div>
          </article>
        );
      })}
    </Container>
  );
}
const Container = styled.section`
  display: grid;
  row-gap: 3rem;
  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 400px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 1rem;
    padding: 0.5rem 0.8rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;

export default ListView;
