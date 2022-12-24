import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

function GameImages({ images = [''], image = '' }) {
  const carImages = [image, ...images];
  const [mainImage, setMainImage] = useState(carImages[0]);

  return (
    <Container>
      <img src={mainImage} alt='main' className='main' />
      <div className='gallery'>
        {carImages.map((img, index) => (
          <img
            src={img}
            key={index}
            alt={'gallery img'}
            onClick={() => setMainImage(carImages[index])}
            className={`${img === mainImage ? 'active' : null}`}
          />
        ))}
      </div>
    </Container>
  );
}

const Container = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }
  @media (max-width: 600px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
`;

export default GameImages;
