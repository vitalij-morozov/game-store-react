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
    let maxPrice = action.payload.map((g) => g.price);
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      all_games: [...action.payload],
      filtered_games: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
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
  if (action.type === FILTER_UPDATE) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === FILTER_GAMES) {
    const { all_games } = state;
    const { text, genre, price } = state.filters;
    let temp = [...all_games];
    if (text) {
      temp = temp.filter((game) => game.title.toLowerCase().startsWith(text));
    }
    if (genre !== 'all') {
      temp = temp.filter((game) => game.genre === genre);
    }
    temp = temp.filter((g) => g.price <= price);

    return { ...state, filtered_games: temp };
  }
  if (action.type === FILTER_CLEAR) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: '',
        genre: 'all',
        price: state.filters.max_price,
      },
    };
  }
};

export default FilterReducer;
