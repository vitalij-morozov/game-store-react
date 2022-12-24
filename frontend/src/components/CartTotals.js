import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/CartContext';
import { priceFormat } from '../utils/helpers';
import { Link } from 'react-router-dom';

function CartTotals() {
  const { total_amount } = useCartContext();

  return (
    <Container>
      <div>
        <article>
          <h4>
            total: <span>{priceFormat(total_amount)}</span>
          </h4>
          <hr />
        </article>
        <Link to='/checkout' className='btn'>
          Proceed to Checkout
        </Link>
      </div>
    </Container>
  );
}

const Container = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }

  h5 {
    display: grid;
    grid-template-columns: 200px 1fr;
  }

  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`;

export default CartTotals;
