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
  grid_view: true,
  sort: 'price_low',
  filters: {
    text: '',
    genre: 'all',
    min_price: 0,
    max_price: 0,
    price: 0,
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { games } = useGamesContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_GAMES, payload: games });
  }, [games]);

  useEffect(() => {
    dispatch({ type: FILTER_GAMES });
    dispatch({ type: SORT_GAMES });
  }, [games, state.sort, state.filters]);

  const setGridView = () => {
    dispatch({ type: SET_GRID });
  };
  const setListView = () => {
    dispatch({ type: SET_LIST });
  };
  const updateSort = (e) => {
    const value = e.target.value;
    dispatch({ type: SORT_UPDATE, payload: value });
  };

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === 'genre') {
      value = e.target.textContent;
    }
    if (name === 'price') {
      value = Number(value);
    }
    dispatch({ type: FILTER_UPDATE, payload: { name, value } });
  };
  const clearFilters = () => {
    dispatch({ type: FILTER_CLEAR });
  };
  return (
    <FilterContext.Provider value={{ ...state, setGridView, setListView, updateSort, updateFilters, clearFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
