// export const GET_SERIES_REQUEST = 'GET_SERIES_REQUEST';
// export const GET_SERIES_SUCCESS = 'GET_SERIES_SUCCESS';
// export const GET_SERIES_FAILURE = 'GET_SERIES_FAILURE';

// export const getSeriesRequest = () => ({
//   type: GET_SERIES_REQUEST,
// });

// export const getSeriesSuccess = payload => ({
//   type: GET_SERIES_SUCCESS,
//   payload,
// });

// export const getSeriesfailure = payload => ({
//   type: GET_SERIES_FAILURE,
//   payload,
// });

/**
 * Перепишем с redux-actions
 */

//redux-actions нужен чтобы убрать дублирование в actions и actionCreators. Он вшивает типы в actionCreators.
//getSeriesRequest() вернет объект с типом type: GET_SERIES_REQUEST. Чтобы получить доступ к типу  - getSeriesRequest.toString()
// getSeriesSuccess({data: 'some data'}) - автоматически создаст экшен с payload  - {type: GET_SERIES_REQUEST, payload: {data: 'some data'}}

import { createActions } from 'redux-actions';

// const { getSeriesRequest, getSeriesSuccess, getSeriesfailure } = createActions({
//   GET_SERIES_REQUEST: null,
//   GET_SERIES_SUCCESS: null,
//   GET_SERIES_FAILURE: null,
// });

// export { getSeriesRequest, getSeriesSuccess, getSeriesfailure };

/**
 * C использованием namespace
 * getSeriesRequest() вернет {type: "SERIES/REQUEST"}
 */
const {
  series: { request: getSeriesRequest, success: getSeriesSuccess, failure: getSeriesFailure },
} = createActions({
  SERIES: {
    // payload creators
    REQUEST: null, //null означает что дополниельной информации к payload нет
    // массив с 2мя ф-циями, 1 ф-ция ответчает за массив payload. Положить в нее только series
    // 2я - за поле meta, в него объект с полем pageCount
    SUCCESS: [(series, count) => series, (series, pageCount) => ({ pageCount })],
    FAILURE: null,
  },
});

getSeriesSuccess([1, 2, 3, 4], 20);
// вернет {type: "SERIES/SUCCESS", payload: [1, 2, 3, 4], meta: { pageCount: 20 }}

export { getSeriesRequest, getSeriesSuccess, getSeriesFailure };
