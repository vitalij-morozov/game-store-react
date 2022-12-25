import React from 'react';
import { PageHero } from '../components';
import styled from 'styled-components';

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Container className='page section section-center'>
        <img
          src='https://images.unsplash.com/photo-1603201667141-5a2d4c673378?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1496&q=80'
          alt='team'
        />
        <article>
          <div className='title'>
            <h2>We Are The Team Behind GameBuy!</h2>
            <div className='underline'></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolore iure? Reiciendis, nulla. Quisquam
              debitis ipsum asperiores quidem veniam totam voluptate expedita distinctio rem labore reprehenderit eos
              corrupti nulla molestias, aliquam temporibus? Quisquam officiis nesciunt reprehenderit obcaecati nihil
              temporibus doloremque!
            </p>
          </div>
        </article>
      </Container>
    </main>
  );
};

const Container = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-10);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 990px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default AboutPage;
