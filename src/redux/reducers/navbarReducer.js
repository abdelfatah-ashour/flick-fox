import { FIXED, BLOCK, OPEN_SEARCH, CLOSE_SEARCH } from "../types";

const initNavFix = false;

const initNavSearch = false;

function navbarFixedReducer(state = initNavFix, action) {
  switch (action.type) {
    case FIXED: {
      return action.payload;
    }
    case BLOCK: {
      return action.payload;
    }
    default:
      return state;
  }
}

function navbarSearchReducer(state = initNavSearch, action) {
  switch (action.type) {
    case OPEN_SEARCH: {
      return action.payload;
    }
    case CLOSE_SEARCH: {
      return action.payload;
    }
    default:
      return state;
  }
}

export { navbarFixedReducer, navbarSearchReducer };
