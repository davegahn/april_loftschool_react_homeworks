import { createStore, compose } from 'redux';
import rootReducer from './reducers';


/**
 * В аргументы могут входить также initail state, который можем хранить в
 *  localstorage, и enhansers (middleware и extensions)
 */
export default () =>
  createStore(
    rootReducer,
    compose(
      window.devToolsExtension
        ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f,
    ),
  );
