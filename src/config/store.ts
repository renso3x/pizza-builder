import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducers } from '../reducers';

let composeEnhancers = compose;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

if (process.env.NODE_ENV !== 'production') {
  if (
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  }
}

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducers, enhancer)