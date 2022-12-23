import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <Container className='section-center'>
      <article className='content'>
        <h1>
          Buy Games <br />
          And Have Fun!
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi incidunt itaque dicta nobis reprehenderit
          natus doloremque, laboriosam ex? Numquam deserunt minima cum non aut impedit.
        </p>
        <Link to='/games' className='btn hero_btn'>
          Buy Games
        </Link>
      </article>
      <article className='img_container'>
        <img
          src='https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
          alt='hero one'
          className='main_img'
        />
        <img
          src='https://images.unsplash.com/photo-1585857188892-93512a3a0efd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
          alt='hero one'
          className='accent_img'
        />
      </article>
    </Container>
  );
}

const Container = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;

  .img_container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-white);
    font-size: 1rem;
  }

  @media (min-width: 990px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;

    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.2rem;
    }
    .hero_btn {
      padding: 0.8rem 1.5rem;
      font-size: 1rem;
    }
    .img_container {
      display: block;
      position: relative;
    }
    .main_img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent_img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;

export default Hero;
