import { combineReducers } from "redux";
import { navbarFixedReducer } from "./reducers/navbarReducer";
import {
  displaySearchReducer,
  valueOfSearchReducer,
} from "./reducers/searchReducer";

const rootReducer = combineReducers({
  navbar_fixed: navbarFixedReducer,
  display_search: displaySearchReducer,
  valueOfSearch: valueOfSearchReducer,
});

export { rootReducer };
