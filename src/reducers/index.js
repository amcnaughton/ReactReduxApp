import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


import trails from './trails';
import updates from './updates';
import users from './users';

const rootReducer = combineReducers({trails, updates, users, routing: routerReducer });

export default rootReducer;
