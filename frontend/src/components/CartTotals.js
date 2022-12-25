import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/CartContext';
import { priceFormat } from '../utils/helpers';
import { Link } from 'react-router-dom';

import { useUserContext } from '../context/UserContext';

function CartTotals() {
  const { total_amount } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();
  return (
    <Container>
      <div>
        <article>
          <h4>
            total: <span>{priceFormat(total_amount)}</span>
          </h4>
          <hr />
        </article>
        {myUser ? (
          <Link to='/checkout' className='btn'>
            Proceed to Checkout
          </Link>
        ) : (
          <button onClick={loginWithRedirect} className='btn' type='button'>
            Sign In
          </button>
        )}
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
