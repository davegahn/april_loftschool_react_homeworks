export const GET_SERIES_REQUEST = 'GET_SERIES_REQUEST';
export const GET_SERIES_SUCCESS = 'GET_SERIES_SUCCESS';
export const GET_SERIES_FAILURE = 'GET_SERIES_FAILURE';

export const getSeriesRequest = () => ({
  type: GET_SERIES_REQUEST,
});

export const getSeriesSuccess = payload => ({
  type: GET_SERIES_SUCCESS,
  payload,
});

export const getSeriesfailure = error => ({
  type: GET_SERIES_FAILURE,
  error,
});
