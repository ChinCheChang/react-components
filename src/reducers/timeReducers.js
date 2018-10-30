import {
  CHANGE_TIME
} from '../constants.js'

const initailRoute = { now: new Date() };

export const time = (state = initailRoute, action = {}) => {
  switch (action.type) {
    case CHANGE_TIME:
      return {...state, now: action.payload }
    default:
      return state;
  }
}
