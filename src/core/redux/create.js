import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';
import * as reducers from './modules';

const enhancer = compose(
  applyMiddleware(thunk),
  devTools()
);

export default function configureStore(initialState) {
  const store = createStore(
    combineReducers({
      ...reducers,
    }),
    initialState,
    enhancer
  );
  return store;
}
