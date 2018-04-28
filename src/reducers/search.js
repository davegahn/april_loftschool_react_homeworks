import { getSearchRequest, getSearchSuccess, getSearchFailure } from 'actions/search';

const initialState = {
  result: [],
  isLoading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case getSearchRequest.toString():
      return { ...state, isLoading: true };
    case getSearchSuccess.toString():
      return {
        ...state,
        result: action.payload,
        isLoading: false,
      };
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
