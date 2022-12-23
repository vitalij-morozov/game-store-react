import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from '../utils/actions';

const GamesReducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }
};

export default GamesReducer;
