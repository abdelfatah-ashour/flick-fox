import { FIXED, BLOCK, OPEN_SEARCH, CHANGE_TEXT, CLOSE_SEARCH } from "../types";

const initNavFix = false;

const initNavSearch = {
  status: false,
  type: "",
  text: "",
};

export function navbarFixedReducer(state = initNavFix, action) {
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

export function navbarSearchReducer(state = initNavSearch, action) {
  switch (action.type) {
    case OPEN_SEARCH: {
      return { ...state, status: action.payload };
    }
    case CHANGE_TEXT: {
      return { ...state, type: action.payload.type, text: action.payload.text };
    }
    case CLOSE_SEARCH: {
      return {
        ...state,
        status: action.payload,
        type: action.payload.type,
        text: action.payload.text,
      };
    }
    default:
      return state;
  }
}
