import { FIXED, BLOCK } from "../types";

const initialNavFix = {
  status: false,
};


export function navbarFixedReducer(state = initialNavFix, action) {
  switch (action.type) {
    case FIXED:
      return { ...state, status: action.payload };
    case BLOCK:
      return { ...state, status: action.payload };
    default:
      return state;
  }
}
