import {getSearchRequest} from 'actions/search';
import {getSearchSuccess, getSearchFailure} from 'actions/search';

// store означает передать состояние, next - выполнить проброс к следующему action
const searchMiddleware = store => next => action => {
  if (action.type === getSearchRequest.toString ()) {
    fetch (`http://api.tvmaze.com/search/shows?q=${action.payload}`, {
      method: 'GET',
      mode: 'cors',
    })
      .then (response => {
        const res = response.json ();
        return res;
      })
      .then (result => {
        store.dispatch (getSearchSuccess (result));
      })
      .catch (error => {
        store.dispatch (getSearchFailure (error));
      });
  }

  next (action); // пробрасываем экшн по цепочке middlewares
  // return next(action);  если мы хотим вернуть результат работы middleware и в компоненте componentDidMount const result = get getSearchRequest();
};

export default searchMiddleware;
