import { createActions } from 'redux-actions';

const {
  search: { request: getSearchRequest, success: getSearchSuccess, failure: getSearchFailure },
} = createActions(
  {
    SEARCH: {
      REQUEST: null,
      SUCCESS: null,
      FAILURE: null,
    },
  },
  { namespace: '_' },
);

export { getSearchRequest, getSearchSuccess, getSearchFailure };
