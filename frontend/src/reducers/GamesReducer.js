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

const GamesReducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }
  if (action.type === GET_GAMES_START) {
    return { ...state, products_loading: true };
  }
  if (action.type === GET_GAMES_SUCCESS) {
    const top_games = action.payload.filter((game) => game.id < 4);
    return { ...state, products_loading: false, games: action.payload, top_games: top_games };
  }
  if (action.type === GET_GAMES_ERROR) {
    return { ...state, products_loading: false, games_error: true };
  }
  if (action.type === GET_SINGLE_GAME_START) {
    return { ...state, single_game_error: false, single_game_loading: true };
  }
  if (action.type === GET_SINGLE_GAME_SUCCESS) {
    return { ...state, single_game_loading: false, single_game: action.payload };
  }
  if (action.type === GET_SINGLE_GAME_ERROR) {
    return { ...state, single_game_error: true, single_game_loading: false };
  }
};

export default GamesReducer;
