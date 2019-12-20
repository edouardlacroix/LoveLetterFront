import rootReducer from '../reducers';
import { applyMiddleware, compose, createStore } from 'redux';
import reduxReqMiddleware from 'redux-req-middleware';

function configureStore(history, initialState) {
  let composeEnhancer = compose;
  let middleware;

  if (process.env.NODE_ENV === 'development') {
    middleware = applyMiddleware(reduxReqMiddleware());
    composeEnhancer =
      (typeof window !== 'undefined' &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
      compose;
  } else {
    middleware = applyMiddleware(reduxReqMiddleware());
  }
  const enhancer = composeEnhancer(middleware);
  const store = createStore(rootReducer, initialState, enhancer);

  if ((module as any).hot) {
    (module as any).hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

export default configureStore;
