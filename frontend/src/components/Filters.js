import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/FilterContext';
import { priceFormat, getUniqueValues } from '../utils/helpers';

function Filters() {
  const {
    filters: { text, genre, min_price, max_price, price },
    updateFilters,
    clearFilters,
    all_games,
  } = useFilterContext();

  const genres = getUniqueValues(all_games, 'genre');

  return (
    <Container>
      <div className='content'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className='form_control'>
            <input
              type='text'
              name='text'
              placeholder='Search'
              className='search_input'
              value={text}
              onChange={updateFilters}
            />
          </div>
          <div className='form_control'>
            <h5>genre</h5>
            <div>
              {genres.map((g, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    name='genre'
                    className={`${genre.toLowerCase() === g.toLowerCase() ? 'active' : null}`}
                    type='button'
                  >
                    {g}
                  </button>
                );
              })}
            </div>
          </div>
          <div className='form_control'>
            <h5>price</h5>
            <p className='price'>{priceFormat(price)}</p>
            <input type='range' name='price' onChange={updateFilters} min={min_price} max={max_price} value={price} />
          </div>
        </form>
        <button type='button' className='clear_btn' onClick={clearFilters}>
          Clear Filters
        </button>
      </div>
    </Container>
  );
}

const Container = styled.section`
  .form_control {
    margin-bottom: 1.3rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search_input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search_input::placeholder {
    text-transform: capitalize;
  }
  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-10);
    cursor: pointer;
    font-size: 0.9rem;
  }
  .active {
    border-color: var(--clr-grey-10);
  }
  .active {
    opacity: 1;
  }
  .price {
    margin-bottom: 0.25rem;
  }

  .clear_btn {
    background: var(--clr-green-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
