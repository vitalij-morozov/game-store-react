import React, { useContext, useReducer } from 'react';

import reducer from '../reducers/GamesReducer';
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from '../utils/actions';

const initialState = {
  isSidebarOpen: false,
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

  return <GamesContext.Provider value={{ ...state, openSidebar, closeSidebar }}>{children}</GamesContext.Provider>;
};

export const useGamesContext = () => {
  return useContext(GamesContext);
};
