import {
  CHANGE_ROUTE
} from './constants.js';

export const setRoute = (toWhere) => ({
  type: CHANGE_ROUTE,
  payload: toWhere
})
