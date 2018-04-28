// export const GET_result_REQUEST = 'GET_result_REQUEST';
// export const GET_result_SUCCESS = 'GET_result_SUCCESS';
// export const GET_result_FAILURE = 'GET_result_FAILURE';

// export const getSearchRequest = () => ({
//   type: GET_result_REQUEST,
// });

// export const getSearchSuccess = payload => ({
//   type: GET_result_SUCCESS,
//   payload,
// });

// export const getSearchFailure = payload => ({
//   type: GET_result_FAILURE,
//   payload,
// });

/**
 * Перепишем с redux-actions
 */

//redux-actions нужен чтобы убрать дублирование в actions и actionCreators. Он вшивает типы в actionCreators.
//getSearchRequest() вернет объект с типом type: GET_result_REQUEST. Чтобы получить доступ к типу  - getSearchRequest.toString()
// getSearchSuccess({data: 'some data'}) - автоматически создаст экшен с payload  - {type: GET_result_REQUEST, payload: {data: 'some data'}}

import { createActions } from 'redux-actions';

// const { getSearchRequest, getSearchSuccess, getSearchFailure } = createActions({
//   GET_result_REQUEST: null,
//   GET_result_SUCCESS: null,
//   GET_result_FAILURE: null,
// });

// export { getSearchRequest, getSearchSuccess, getSearchFailure };

/**
 * C использованием namespace
 * getSearchRequest() вернет {type: "result/REQUEST"}
 */
const {
  result: { request: getSearchRequest, success: getSearchSuccess, failure: getSearchFailure },
} = createActions({
  result: {
    // payload creators
    REQUEST: null, //null означает что дополниельной информации к payload нет
    // массив с 2мя ф-циями, 1 ф-ция ответчает за массив payload. Положить в нее только result
    // 2я - за поле meta, в него объект с полем pageCount
    SUCCESS: [(result, count) => result, (result, pageCount) => ({ pageCount })],
    FAILURE: null,
  },
});

getSearchSuccess([1, 2, 3, 4], 20);
// вернет {type: "result/SUCCESS", payload: [1, 2, 3, 4], meta: { pageCount: 20 }}

export { getSearchRequest, getSearchSuccess, getSearchFailure };
