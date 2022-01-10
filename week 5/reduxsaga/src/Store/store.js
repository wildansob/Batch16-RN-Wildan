import {applyMiddleware, createStore}  from 'redux'
import logger from 'redux-logger';
import { allReducers } from './allReducer'


const allMiddleware = applyMiddleware(logger);
export const store = createStore(allReducers, allMiddleware);