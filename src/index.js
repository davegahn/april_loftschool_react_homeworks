import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'components/App';
import { Provider } from 'react-redux';
import createStore from './store';

<<<<<<< HEAD
ReactDOM.render(<App />, document.getElementById('root'));
=======
const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
>>>>>>> 33e4e3a5075b70739d46b53e72a03b29eaa18a39
