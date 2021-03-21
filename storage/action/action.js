import { dataFetching } from "../reducer/reducer"
import { API_FAILED, API_PENDING, API_SUCCESS } from "./type"

export const fetchPending = () => {
    return {
        type: API_PENDING,
    }
}

export const fetchData = (data) => {
    return {
        type: API_SUCCESS,
        payload: data
    }
}

export const fetchFailed = (error) => {
    return {
        type: API_FAILED,
        payload: error
    }
}

export const fetchSuccess = (url) => {
    return async (dispatch) => {
        dispatch(fetchPending());

        console.log("api calling ");
        try {
            const response = await fetch(url);
            if (!response.ok) {
                const error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
            const info = await response.json();
            dispatch(fetchData(info.matches));
        }
        catch (error) {
            dispatch(fetchFailed(error.message));
        }
    }
}


