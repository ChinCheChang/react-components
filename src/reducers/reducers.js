import {
  CHANGE_ROUTE,
  CHANGE_TIME,
  CHANGE_Z_INDEX,
  CHANGE_SIGNIN
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

//get time
const initailTime = { now: new Date() };

export const time = (state = initailTime, action = {}) => {
  switch (action.type) {
    case CHANGE_TIME:
      return {...state, now: action.payload }
    default:
      return state;
  }
}

//control the layers of elements
const initialZIndex = {
  ZIndexs: ["icon-bar", "Sidenav", "navbar", "calendar", "CoverBackground"]
};

export const zIndex = (state = initialZIndex, action = {}) => {
  switch (action.type) {
    case CHANGE_Z_INDEX:
      return {...state, ZIndexs: action.payload }
    default:
      return state;
  }
}

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
