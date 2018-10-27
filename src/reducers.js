import {
  CHANGE_ROUTE
} from './constants.js';
import { combineReducers } from 'redux';

const initailRoute = { route: "main"}

const route = (state = initailRoute, action = {}) => {
  switch (action.type) {
    case CHANGE_ROUTE:
      return {...state, route: action.payload }
    default:
      return state;
  }
}

export const rootReducers = combineReducers({route});
