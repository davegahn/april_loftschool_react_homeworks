// import {
//   GET_SERIES_REQUEST,
//   GET_SERIES_SUCCESS,
//   GET_SERIES_FAILURE,
// } from 'actions/search';

// С использованием react-actions
import {
  getSeriesRequest,
  getSeriesSuccess,
  getSeriesFailure,
} from 'actions/search';

const initialState = {
  series: [],
  isLoading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    // case GET_SERIES_REQUEST:
    case getSeriesRequest.toString(): // С использованием react-actions
      return { ...state, isLoading: true };
    // case GET_SERIES_SUCCESS:
    case getSeriesSuccess.toString():
      return {
        ...state,
        series: action.payload,
        // series: state.series.concat(action.payload), можно так
        isLoading: false,
      };
    // case GET_SERIES_FAILURE:
    case getSeriesFailure.toString():
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
