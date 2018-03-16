// import axios from 'axios'

/**
 * ACTION TYPES
 */
const GOT_PASSAGE = 'GOT_PASSAGE'

/**
 * INITIAL STATE
 */
const defaultPassage = {}

/**
 * ACTION CREATORS
 */
export const gotPassage = passage => ({ type: GOT_PASSAGE, passage })

/**
 * THUNK CREATORS
 */

/**
 * REDUCER
 */
export default function (state = defaultPassage, action) {
  switch (action.type) {
    case GOT_PASSAGE:
      return action.passage
    default:
      return state
  }
}
