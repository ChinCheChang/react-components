import {
  CHANGE_ROUTE,
  ADD_CLOCK_LIST,
  CHANGE_Z_INDEX,
  CHANGE_SIGNIN,
  CHANGE_CALENDER_SHOW,
  CHANGE_CALENDAR
} from '../constants.js';

//Decide what page it is
const initailRoute = { route: "main"}

export const route = (state = initailRoute, action = {}) => {
  switch (action.type) {
    case CHANGE_ROUTE:
      return {...state, route: action.payload }
    default:
      return state;
  }
}

//get clockList
const initailClockList = { clockList: [] }

export const clockList = (state = initailClockList, action = {}) => {
  switch (action.type) {
    case ADD_CLOCK_LIST:
      return {...state, clockList: [...state.clockList, action.payload]};
    default:
      return state;
  }
}

//control the layers of elements
const initialZIndex = {
  ZIndexs: ["Sidenav", "SideFixPanel", "carousel", "icon-bar", "navbar", "coverBackground"]
};

export const zIndex = (state = initialZIndex, action = {}) => {
  switch (action.type) {
    case CHANGE_Z_INDEX:
      return {...state, ZIndexs: action.payload }
    default:
      return state;
  }
}

//whether state is singin or not
const initialSignin = {
  signin: false
};

export const signin = (state = initialSignin, action = {}) => {
  switch (action.type) {
    case CHANGE_SIGNIN:
      return {...state, signin: action.payload }
    default:
      return state;
  }
}

const initialCalendarShow = { calendarShow: 'none'}

export const calendarShow = (state = initialCalendarShow, action = {}) => {
  switch (action.type) {
    case CHANGE_CALENDER_SHOW:
      return {...state, calendarShow: action.payload }
    default:
      return state;
  }
}

const initialCalendar = {
  calendar: {
    calendarYear: new Date().getFullYear(),
    calendarMonth: new Date().getMonth() + 1
  }
}

export const calendar = (state = initialCalendar, action = {}) => {
  switch (action.type) {
    case CHANGE_CALENDAR:
      return {...state, calendar: action.payload }
    default:
      return state;
  }
}
