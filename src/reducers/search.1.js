// import {
//   GET_result_REQUEST,
//   GET_result_SUCCESS,
//   GET_result_FAILURE,
// } from 'actions/search';

// С использованием react-actions
import { getSearchRequest, getSearchSuccess, getSearchFailure } from 'actions/search';

const initialState = {
  result: [],
  isLoading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    // case GET_result_REQUEST:
    case getSearchRequest.toString(): // С использованием react-actions
      return { ...state, isLoading: true };
    // case GET_result_SUCCESS:
    case getSearchSuccess.toString():
      return {
        ...state,
        result: action.payload,
        // result: state.result.concat(action.payload), можно так
        isLoading: false,
      };
    // case GET_result_FAILURE:
    case getSearchFailure.toString():
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
