import React, { useContext, useReducer } from 'react';
import { useEffect } from 'react';

import reducer from '../reducers/GamesReducer';
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_GAMES_START,
  GET_GAMES_SUCCESS,
  GET_GAMES_ERROR,
  GET_SINGLE_GAME_START,
  GET_SINGLE_GAME_SUCCESS,
  GET_SINGLE_GAME_ERROR,
} from '../utils/actions';
import { baseURL as url } from '../utils/consts';

const initialState = {
  isSidebarOpen: false,
  games_loading: false,
  games_error: false,
  games: [],
  top_games: [],
  single_game_loading: false,
  single_game_error: false,
  single_game: {},
};

const GamesContext = React.createContext();

export const GamesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const getGames = async (url) => {
    dispatch({ type: GET_GAMES_START });
    try {
      const response = await fetch(url);
      const games = await response.json();
      dispatch({ type: GET_GAMES_SUCCESS, payload: games.data });
    } catch (error) {
      dispatch({ type: GET_GAMES_ERROR });
    }
  };

  const getSingleGame = async (url) => {
    dispatch({ type: GET_SINGLE_GAME_START });
    try {
      const response = await fetch(url);
      const game = await response.json();
      console.log('2222 game ===', game);
      dispatch({ type: GET_SINGLE_GAME_SUCCESS, payload: game.data });
    } catch (error) {
      console.log('error ===', error);
      dispatch({ type: GET_SINGLE_GAME_ERROR });
    }
  };

  useEffect(() => {
    getGames(`${url}/products`);
  }, []);

  return (
    <GamesContext.Provider value={{ ...state, openSidebar, closeSidebar, getSingleGame }}>
      {children}
    </GamesContext.Provider>
  );
};

export const useGamesContext = () => {
  return useContext(GamesContext);
};
