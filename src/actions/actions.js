import {
  CHANGE_ROUTE,
  ADD_CLOCK_LIST,
  CHANGE_Z_INDEX,
  CHANGE_SIGNIN,
  CHANGE_CALENDER_SHOW,
  CHANGE_CALENDAR
} from '../constants.js';

export const setRoute = (toWhere) => ({
  type: CHANGE_ROUTE,
  payload: toWhere
})

export const addClockList = (elementName) => ({
  type: ADD_CLOCK_LIST,
  payload: elementName
})

export const setZIndex = (indexs) => ({
  type: CHANGE_Z_INDEX,
  payload: indexs
})

export const setSignIn = (signinState) => ({
  type: CHANGE_SIGNIN,
  payload: signinState
})

export const setCalendarShow = (state) => ({
  type: CHANGE_CALENDER_SHOW,
  payload: state
})

export const setCalendar = (yearMonth) => ({
  type: CHANGE_CALENDAR,
  payload: yearMonth
})
