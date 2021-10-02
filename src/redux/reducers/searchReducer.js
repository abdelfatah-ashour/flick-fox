import {
  OPEN_SEARCH,
  CLOSE_SEARCH,
  CHNAGE_VALUE_SEARCH,
  RESET_VALUE_SEARCH,
} from "../types";

const initialNavSearch = {
  status: false,
};

const intialValueOfSecrch = "";

export function displaySearchReducer(state = initialNavSearch, action) {
  switch (action.type) {
    case OPEN_SEARCH: {
      return {
        ...state,
        status: action.payload,
      };
    }
    case CLOSE_SEARCH: {
      return {
        ...state,
        status: action.payload,
      };
    }
    default:
      return state;
  }
}

export function valueOfSearchReducer(state = intialValueOfSecrch, action) {
  switch (action.type) {
    case CHNAGE_VALUE_SEARCH:
      return action.payload;

    case RESET_VALUE_SEARCH:
      return action.payload;
    default:
      return state;
  }
}
