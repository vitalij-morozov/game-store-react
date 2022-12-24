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
  if (action.type === SORT_UPDATE) {
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_GAMES) {
    const { sort, filtered_games } = state;
    let temp = [...filtered_games];
    if (sort === 'price_low') {
      temp = temp.sort((a, b) => a.price - b.price);
    }
    if (sort === 'price_high') {
      temp = temp.sort((a, b) => b.price - a.price);
    }
    if (sort === 'name_a') {
      temp = temp.sort((a, b) => {
        return a.title.localeCompare(b.name);
      });
    }
    if (sort === 'name_z') {
      temp = temp.sort((a, b) => {
        return b.title.localeCompare(a.name);
      });
    }
    return { ...state, filtered_games: temp };
  }
};

export default FilterReducer;
