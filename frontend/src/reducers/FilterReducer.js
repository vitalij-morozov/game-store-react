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
  if (action.type === SET_GRID) {
    return { ...state, grid_view: true };
  }
  if (action.type === SET_LIST) {
    return { ...state, grid_view: false };
  }
};

export default FilterReducer;
