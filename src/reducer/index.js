import { combineReducers } from "redux";
import navbarReducer from "./navbarReducer";

const rootReducer = combineReducers({
  nav: navbarReducer,
});

export default rootReducer;
