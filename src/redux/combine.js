import { combineReducers } from "redux";
import { navbarFixedReducer } from "./reducers/navbarReducer";
import { navbarSearchReducer } from "./reducers/navbarReducer";

const rootReducer = combineReducers({
  navbar_fixed: navbarFixedReducer,
  navbar_search: navbarSearchReducer,
});

export { rootReducer };
