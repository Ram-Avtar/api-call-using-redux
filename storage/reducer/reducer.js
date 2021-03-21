import { API_FAILED, API_PENDING, API_SUCCESS } from "../action/type"
import { combineReducers } from 'redux';
const initialState = {
    matches: [],
    isFetching: false
}


export const dataFetching = (state = initialState, action) => {
    switch (action.type) {
        case API_PENDING:
            return {
                ...state,
                isFetching: true
            }
        case API_SUCCESS:
            return {
                ...state,
                isFetching: false,
                matches: action.payload
            }
        case API_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state
    }
}
const rootReducer = combineReducers({
    matchesData: dataFetching
});

export default rootReducer;