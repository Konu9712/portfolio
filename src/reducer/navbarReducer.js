import { combineReducers } from "redux";
import { createReducer as createReducerOrig } from "@reduxjs/toolkit";
import { createReducer } from "../helper/reduxHelper.js";
import * as Actions from "../actions/types.js";

const navReducer = createReducer({
  initialState: false,
  actionType: Actions.SET_NAVBAR,
});

const navbarReducer = combineReducers({
  isNav: navReducer,
});

export default navbarReducer;
