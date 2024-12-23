import * as actionType from "./actionType.js"

const initialState = []

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionType.ADD_CURRENT_TIME:
      return [...state, action.payload]
    case actionType.CLEAR_ALL_TIMES:
      return []
    default:
      return state
  }
}

export default reducer
