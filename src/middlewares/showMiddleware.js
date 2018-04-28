import { getShowRequest } from 'actions/show';
import { getShowSuccess, getShowFailure } from '../actions/show';
// import { show } from '../api';

// store означает передать состояние, next - выполнить проброс к следующему action
const showMiddleware = store => next => action => {
  if (action.type === getShowRequest.toString()) {
    fetch(`http://api.tvmaze.com/shows/12922?embed=cast`, {
      method: 'GET',
      mode: 'cors',
    })
      .then(response => response.json())
      .then(result => {
        store.dispatch(getShowSuccess(result));
      });
    // .catch(error => {
    //   store.dispatch(getShowFailure(error));
    // });
    // show();
  }

  next(action);
};

export default showMiddleware;
