import { applyMiddleware, createStore } from "redux";
import rootReducer, { dataFetching } from "../reducer/reducer";
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';
import apiMiddleware from "../middleware/apiMiddleware";
import { createLogger } from "redux-logger";


const logger = createLogger();
const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk, logger)));
console.log('subscribe state ', store.subscribe(() => store.getState()))
// console.log(" data fetching ", store.dispatch(fetchSuccess(dataFetching)));
// console.log("getting data ", store.getState())
export default store;