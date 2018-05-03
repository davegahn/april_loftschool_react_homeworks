import { getShowRequest, getShowSuccess, getShowFailure } from 'actions/show';

const initialState = {
  entities: [],
  isLoading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case getShowRequest.toString():
      return { ...state, isLoading: true }; //, payload: action.payload
    case getShowSuccess.toString():
      return {
        ...state,
        entities: action.payload,
        isLoading: false,
      };
    case getShowFailure.toString():
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
