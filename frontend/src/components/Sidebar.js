import React from 'react';
import mainLogo from '../assets/Logo.png';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CartButtons from './CartButtons';
import styled from 'styled-components';
import { useGamesContext } from '../context/GamesContext';
import { useUserContext } from '../context/UserContext';

const navLinks = [
  { id: 1, body: 'home', url: '/' },
  { id: 2, body: 'about', url: '/about' },
  { id: 3, body: 'games', url: '/games' },
];

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useGamesContext();
  const { myUser } = useUserContext();
  return (
    <Container>
      <aside className={`${isSidebarOpen ? 'sidebar show_sidebar' : 'sidebar'}`}>
        <div className='sidebar_heading'>
          <img src={mainLogo} alt='main logo' />
          <button type='button' className='close_btn' onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className='links'>
          {navLinks.map(({ id, body, url }) => {
            return (
              <li key={id}>
                <Link to={url}>{body}</Link>
              </li>
            );
          })}
          {myUser && (
            <li>
              <Link to='/checkout' onClick={closeSidebar}>
                checkout
              </Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </aside>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  .sidebar_heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .sidebar_heading img {
    width: 250px;
  }
  .close_btn {
    font-size: 2rem;
    background-color: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
    margin-top: 0.2rem;
  }
  .close_btn:hover {
    color: var(--clr-red-light);
  }
  .logo {
    justify-self: center;
    height: 50px;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-grey-3);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }
  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-grey-10);
    color: var(--clr-grey-2);
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
    padding-left: 1rem;
  }
  .show_sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
