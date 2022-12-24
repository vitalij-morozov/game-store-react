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
`;

export default ListView;
