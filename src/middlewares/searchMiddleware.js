import { getSearchRequest } from 'actions/search';
import { getSearchSuccess, getSearchFailure } from 'actions/search';
import { search } from '../api';
// store означает передать состояние, next - выполнить проброс к следующему action
const searchMiddleware = store => next => action => {
  if (action.type === getSearchRequest.toString()) {
    search(action.payload)
      .then(result => {
        store.dispatch(getSearchSuccess(result));
      })
      .catch(error => {
        store.dispatch(getSearchFailure(error));
      });
  }

  next(action); // пробрасываем экшн по цепочке middlewares
  // return next(action);  если мы хотим вернуть результат работы middleware и в компоненте componentDidMount const result = get getSearchRequest();
};

export default searchMiddleware;
