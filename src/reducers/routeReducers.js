import {
  CHANGE_ROUTE
} from '../constants.js';

const initailRoute = { route: "main"}

export const route = (state = initailRoute, action = {}) => {
  switch (action.type) {
    case CHANGE_ROUTE:
      return {...state, route: action.payload }
    default:
      return state;
  }
}
