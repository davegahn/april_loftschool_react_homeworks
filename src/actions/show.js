import { createActions } from 'redux-actions';

const {
  show: { request: getShowRequest, success: getShowSuccess, failure: getShowFailure },
} = createActions({
  SHOW: {
    REQUEST: [(seriesID, count) => seriesID, () => {}],
    SUCCESS: null,
    FAILURE: null,
  },
});

export { getShowRequest, getShowSuccess, getShowFailure };
