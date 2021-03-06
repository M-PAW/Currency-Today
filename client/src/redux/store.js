import { createStore, applyMiddleware } from 'redux';
import thunkMiddlware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import {rootReducer} from './rootReducer';

const logger = createLogger();

export const store = createStore(rootReducer, applyMiddleware(thunkMiddlware,logger))