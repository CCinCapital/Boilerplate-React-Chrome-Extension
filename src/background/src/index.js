/* eslint-disable import/no-extraneous-dependencies */

import { createStore } from 'redux';
import { wrapStore } from 'react-chrome-redux';
import devToolsEnhancer from 'remote-redux-devtools';

import reducers from './reducers';

const store = createStore(reducers, devToolsEnhancer({ realtime: true }));

wrapStore(store, {
  portName: 'MY_APP',
});
