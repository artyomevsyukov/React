import getCurrentTime from "../utils/getCurrentTime.js"
// import { CLEAR_ALL_TIMES, ADD_CURRENT_TIME } from "./actionType.js"
import * as actionType from "./actionType.js"

export function addCurrentTime() {
  return {
    type: actionType.ADD_CURRENT_TIME,
    payload: getCurrentTime(),
  }
}

export function clearTimes() {
  return { type: actionType.CLEAR_ALL_TIMES }
}
