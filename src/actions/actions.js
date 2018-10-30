import {
  CHANGE_ROUTE,
  CHANGE_TIME
} from '../constants.js';

export const setRoute = (toWhere) => ({
  type: CHANGE_ROUTE,
  payload: toWhere
})

export const setTime = (time) => ({
  type: CHANGE_TIME,
  payload: time
})
