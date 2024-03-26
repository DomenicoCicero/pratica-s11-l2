import { combineReducers, configureStore } from "@reduxjs/toolkit";
import preferReducer from "../reducers/preferReducer";
import resultsReducer from "../reducers/resultsReducer";

const unifiedReducer = combineReducers({
  prefer: preferReducer,
  results: resultsReducer,
});

const store = configureStore({
  reducer: unifiedReducer,
});

export default store;
