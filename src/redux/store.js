import { createStore } from "redux";
import { rootReducer } from "./combine";

const store = createStore(
  rootReducer,
  process.env.REACT_APP_NODE_ENV === "development" &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };
