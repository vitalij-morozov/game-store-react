import React from 'react';
import { useFilterContext } from '../context/FilterContext';
import styled from 'styled-components';
import { BsFillGridFill, BsList } from 'react-icons/bs';
function Sort() {
  const { filtered_games: games, grid_view: grid, setGridView, setListView, sort, updateSort } = useFilterContext();
  return (
    <Container>
      <div className='btn_container'>
        <button type='button' className={`${grid ? 'active' : null}`} onClick={setGridView}>
          <BsFillGridFill />
        </button>
        <button type='button' className={`${!grid ? 'active' : null}`} onClick={setListView}>
          <BsList />
        </button>
      </div>
      <p>{games.length} games found</p>
      <hr />
      <form>
        <label htmlFor='sort'>sort by: </label>
        <select name='sort' id='sort' className='sort_input' value={sort} onChange={updateSort}>
          <option value='price_low'>price (lowest)</option>
          <option value='price_high'>price (highest)</option>
          <option value='name_a'>name (A-Z)</option>
          <option value='name_z'>name (Z-A)</option>
        </select>
      </form>
    </Container>
  );
}
const Container = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;

  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    .btn_container {
      width: 50px;
    }
    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
  }
  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }
  .btn_container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    button {
      background: transparent;
      border: 1px solid var(--clr-black);
      color: var(--clr-black);
      width: 1.5rem;
      border-radius: var(--radius);
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        font-size: 1rem;
      }
    }
    .active {
      background: var(--clr-black);
      color: var(--clr-white);
    }
  }

  .sort_input {
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
  }
  label {
    font-size: 1rem;
    text-transform: capitalize;
  }
`;

export default Sort;
