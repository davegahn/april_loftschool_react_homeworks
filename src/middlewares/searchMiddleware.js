import { GET_SERIES_REQUEST } from 'actions/search';
import { getSeriesSuccess, getSeriesfailure } from '../actions/search';

// store означает передать состояние, next - выполнить проброс к следующему action
const searchMiddleware = store => next => action => {
  if (action.type === GET_SERIES_REQUEST) {
    fetch(`http://api.tvmaze.com/shows/180/episodes`, {
      method: 'GET',
      mode: 'cors',
    })
      .then(response => response.json())
      .then(series => {
        store.dispatch(getSeriesSuccess(series));
      })
      .catch(error => {
        store.dispatch(getSeriesfailure(error));
      });
  }

  next(action);
};

export default searchMiddleware;
