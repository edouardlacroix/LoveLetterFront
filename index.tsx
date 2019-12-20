import React from 'react';
import { Provider } from 'react-redux';
// import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './src/app/containers/App';
import { hydrate } from 'react-dom';
import store from './src/base/store';

// const history = createBrowserHistory();
const rootElement = document.getElementById('root');

hydrate(
  <Provider store={store}>
    {/* <Router history={history} children={routes} /> */}
    <App />
  </Provider>,
  rootElement
);
