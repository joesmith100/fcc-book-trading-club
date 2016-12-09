import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import rootReducer from '../reducers';

export default (initialState) => {
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ));

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../reducers', () =>
      /* eslint-disable global-require */
      store.replaceReducer(require('../reducers').default),
      /* eslint-disable global-require */
    );
  }

  return store;
};