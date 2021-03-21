import { fetchFailed, fetchSuccess } from "../action/action";
import { API_FAILED, API_SUCCESS } from "../action/type";
import { dataFetching } from "../reducer/reducer";
import store from "../store/store";

const apiMiddleware = ({ dispatch }) => (next) => async (action) => {

    return next(action);


}

export default apiMiddleware;