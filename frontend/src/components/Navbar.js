import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import mainLogo from '../assets/Logo.png';
import styled from 'styled-components';

import { useGamesContext } from '../context/GamesContext';
import { useUserContext } from '../context/UserContext';

import CartButtons from './CartButtons';

const navLinks = [
  { id: 1, body: 'home', url: '/' },
  { id: 2, body: 'about', url: '/about' },
  { id: 3, body: 'games', url: '/games' },
];

function Navbar() {
  const { openSidebar } = useGamesContext();
  const { myUser } = useUserContext();
  return (
    <Header>
      <div className='nav_center'>
        <div className='nav_heading'>
          <Link to='/'>
            <img src={mainLogo} alt='main logo' />
          </Link>
          <button type='button' className='nav_toggle' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
      </div>
      <ul className='nav_links'>
        {navLinks.map(({ id, body, url }) => {
          return (
            <li key={id}>
              <Link to={url}>{body}</Link>
            </li>
          );
        })}
        {myUser && (
          <li>
            <Link to='/checkout'>checkout</Link>
          </li>
        )}
      </ul>
      <CartButtons />
    </Header>
  );
}

const Header = styled.header`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--clr-white);

  .nav_center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav_heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 200px;
    }
  }
  .nav_toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav_links {
    display: none;
  }
  .cart_btn_container {
    display: none;
  }

  @media (min-width: 900px) {
    padding: 0 5%;
    .nav_toggle {
      display: none;
    }
    .nav_center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav_links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart_btn_container {
      display: grid;
    }
  }
`;

export default Navbar;
