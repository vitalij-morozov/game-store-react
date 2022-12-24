import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AmountButtons from './AmountButtons';
import { useCartContext } from '../context/CartContext';

function AddToCart({ prod: game }) {
  const { addToCart } = useCartContext();

  const { id } = game;

  const [amount, setAmount] = useState(1);

  const increaseAmount = () => {
    setAmount((prevAmount) => prevAmount + 1);
  };

  const decreaseAmount = () => {
    setAmount((prevAmount) => {
      let temp = prevAmount - 1;
      if (temp < 1) {
        temp = 1;
      }
      return temp;
    });
  };

  return (
    <Container>
      <div className='btn_container'>
        <AmountButtons amount={amount} increase={increaseAmount} decrease={decreaseAmount} />
        <Link to='/cart' className='btn' onClick={() => addToCart(id, amount, game)}>
          Add To Cart
        </Link>
      </div>
    </Container>
  );
}

const Container = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`;

export default AddToCart;
