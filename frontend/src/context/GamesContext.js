import React, { useContext, useReducer } from 'react';
import { useEffect } from 'react';
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from '../utils/actions';

const initialState = {
  isSidebarOpen: false,
};

const GamesContext = React.createContext();

export const GamesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  useEffect(() => {});

  return <GamesContext.Provider value={{ ...state, openSidebar, closeSidebar }}>{children}</GamesContext.Provider>;
};

export const useGamesContext = () => {
  return useContext(GamesContext);
};
