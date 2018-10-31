import {
  CHANGE_ROUTE,
  CHANGE_TIME,
  CHANGE_Z_INDEX
} from '../constants.js';

export const setRoute = (toWhere) => ({
  type: CHANGE_ROUTE,
  payload: toWhere
})

export const setTime = (time) => ({
  type: CHANGE_TIME,
  payload: time
})

export const setZIndex = (indexs) => ({
  type: CHANGE_Z_INDEX,
  payload: indexs
})
