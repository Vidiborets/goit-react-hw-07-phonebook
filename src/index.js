import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import 'modern-normalize/modern-normalize.css';
import './index.css';
import App from './App';
import store from './redux/store'


ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <App />
    </Provider>
  </React.Fragment>,
  document.querySelector('#root'),
);

