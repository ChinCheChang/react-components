import {
  CHANGE_ROUTE,
  CHANGE_TIME,
  CHANGE_Z_INDEX
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

const initailTime = { now: new Date() };

export const time = (state = initailTime, action = {}) => {
  switch (action.type) {
    case CHANGE_TIME:
      return {...state, now: action.payload }
    default:
      return state;
  }
}

const initialZIndex = {
  ZIndexs: ["icon-bar", "mySidenav", "navbar", "calendar", "CoverBackground"]
};

export const zIndex = (state = initialZIndex, action = {}) => {
  switch (action.type) {
    case CHANGE_Z_INDEX:
      return {...state, ZIndexs: action.payload }
    default:
      return state;
  }
}
