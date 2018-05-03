import { getShowRequest, getShowSuccess, getShowFailure } from '../actions/show';
import { show } from 'api';
// store означает передать состояние, next - выполнить проброс к следующему action
const showMiddleware = store => next => action => {
  if (action.type === getShowRequest.toString()) {
    show(action.payload)
      .then(result => {
        store.dispatch(getShowSuccess(result));
      })
      .catch(error => {
        store.dispatch(getShowFailure(error));
      });
  }

  next(action);
};

export default showMiddleware;
