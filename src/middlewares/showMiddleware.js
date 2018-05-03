import {getShowRequest} from 'actions/show';
import {getShowSuccess, getShowFailure} from '../actions/show';

// store означает передать состояние, next - выполнить проброс к следующему action
const showMiddleware = store => next => action => {
  if (action.type === getShowRequest.toString ()) {
    fetch (`http://api.tvmaze.com/shows/${action.payload}?embed=cast`, {
      method: 'GET',
      mode: 'cors',
    })
      .then (response => response.json ())
      .then (result => {
        store.dispatch (getShowSuccess (result));
      })
      .catch (error => {
        store.dispatch (getShowFailure (error));
      });
  }

  next (action);
};

export default showMiddleware;
