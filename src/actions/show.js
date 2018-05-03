import { createActions } from 'redux-actions';

const {
  show: { request: getShowRequest, success: getShowSuccess, failure: getShowFailure },
} = createActions(
  {
    SHOW: {
      REQUEST: null,
      SUCCESS: null,
      FAILURE: null,
    },
  },
  { namespace: '_' },
);

export { getShowRequest, getShowSuccess, getShowFailure };
