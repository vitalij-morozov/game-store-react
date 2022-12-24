import React, { useContext, useEffect } from 'react';
import { useReducer } from 'react';
import {
  LOAD_GAMES,
  SET_GRID,
  SET_LIST,
  SORT_UPDATE,
  FILTER_UPDATE,
  FILTER_CLEAR,
  FILTER_GAMES,
  SORT_GAMES,
} from '../utils/actions';
import { useGamesContext } from './GamesContext';
import reducer from '../reducers/FilterReducer';

const initialState = {
  filtered_games: [],
  all_games: [],
  grid_view: false,
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { games } = useGamesContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_GAMES, payload: games });
  }, [games]);

  return <FilterContext.Provider value={{ ...state }}>{children}</FilterContext.Provider>;
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};