import { AppRegistry } from 'react-native';
import React from 'react';
import { Provider, connect } from 'react-redux';
import { Router } from 'react-native-router-flux';

import 'babel-polyfill'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './containers/Root'
import configureStore from './store/configureStore'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

const RouterWithRedux = connect()(Router);
const Kernel = () => (
  <Provider  store={store} >
     <Root history={history} />
  </Provider>
);


AppRegistry.registerComponent('App', () => Kernel);
