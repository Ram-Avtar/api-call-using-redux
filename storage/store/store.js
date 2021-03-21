import { applyMiddleware, createStore } from "redux";
import rootReducer, { dataFetching } from "../reducer/reducer";
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from "redux-logger";


const logger = createLogger();
const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk, logger)));
export default store;