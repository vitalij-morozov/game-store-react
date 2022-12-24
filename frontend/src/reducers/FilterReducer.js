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

const FilterReducer = (state, action) => {
  if (action.type === LOAD_GAMES) {
    return { ...state, all_games: [...action.payload], filtered_games: [...action.payload] };
  }

  return state;
};

export default FilterReducer;
