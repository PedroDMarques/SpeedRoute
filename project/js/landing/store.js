import { applyMiddleware, createStore } from 'redux';

import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const middleware = applyMiddleware(thunk, createLogger());

import reducer from './reducers';

export default createStore(reducer, middleware);