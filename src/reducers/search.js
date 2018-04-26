import {
  GET_SERIES_REQUEST,
  GET_SERIES_SUCCESS,
  GET_SERIES_FAILURE,
} from 'actions/search.js';

const initialState = {
  series: null,
  isLoading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SERIES_REQUEST:
      return { ...state, isLoading: true };
    case GET_SERIES_SUCCESS:
      return {
        ...state,
        series: action.payload,
        isLoading: false,
      };
    case GET_SERIES_FAILURE:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};
