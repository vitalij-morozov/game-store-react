import React, { useContext, useReducer } from 'react';
import { useEffect } from 'react';

import reducer from '../reducers/GamesReducer';
import { SIDEBAR_OPEN, SIDEBAR_CLOSE, GET_GAMES_START, GET_GAMES_SUCCESS, GET_GAMES_ERROR } from '../utils/actions';
import { baseURL as url } from '../utils/consts';

const initialState = {
  isSidebarOpen: false,
  games_loading: false,
  games_error: false,
  games: [],
  top_games: [],
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
      console.log('response ===', response);
      dispatch({ type: GET_GAMES_SUCCESS, payload: games.data });
    } catch (error) {
      dispatch({ type: GET_GAMES_ERROR });
    }
  };

  useEffect(() => {
    getGames(`${url}/products`);
  }, []);

  return <GamesContext.Provider value={{ ...state, openSidebar, closeSidebar }}>{children}</GamesContext.Provider>;
};

export const useGamesContext = () => {
  return useContext(GamesContext);
};
