import React from 'react';
import styled from 'styled-components';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

function Stars({ stars }) {
  const temp = Array.from({ length: 5 }, (_, index) => {
    const num = index + 0.5;
    return <span key={index}>{stars >= index + 1 ? <BsStarFill /> : stars >= num ? <BsStarHalf /> : <BsStar />}</span>;
  });
  return (
    <Container>
      <div className='stars'>{temp}</div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  span {
    color: yellow;
    font-size: 1rem;
    margin-right: 0.3rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
`;

export default Stars;
