import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import App from './src/app/containers/App';
import { hydrate } from 'react-dom';
import store from './src/base/store';
const rootElement = document.getElementById('root');

hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
