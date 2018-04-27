import { getSeriesRequest } from 'actions/search';
import { getSeriesSuccess, getSeriesFailure } from '../actions/search';

// store означает передать состояние, next - выполнить проброс к следующему action
const searchMiddleware = store => next => action => {
  if (action.type === getSeriesRequest.toString()) {
    fetch(`http://api.tvmaze.com/shows/180/episodes`, {
      method: 'GET',
      mode: 'cors',
    })
      .then(response => response.json())
      .then(series => {
        store.dispatch(getSeriesSuccess(series, series.length));
      })
      .catch(error => {
        store.dispatch(getSeriesFailure(error));
      });
  }

  next(action); // пробрасываем экшн по цепочке middlewares
  // return next(action);  если мы хотим вернуть результат работы middleware и в компоненте componentDidMount const result = get getSeriesRequest();
};

export default searchMiddleware;
