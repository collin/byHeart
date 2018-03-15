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
// export const me = () =>
//   dispatch =>
//     axios.get('/auth/me')
//       .then(res =>
//         dispatch(getUser(res.data || defaultUser)))
//       .catch(err => console.log(err))

// export const auth = (email, password, method) =>
//   dispatch =>
//     axios.post(`/auth/${method}`, { email, password })
//       .then(res => {
//         const user = res.data
//         console.log('this thing')
//         dispatch(getUser(user))
//         dispatch(fetchUserCartOnLogin(user))
//         //yay
//         history.push('/')
//       }, authError => { // rare example: a good use case for parallel (non-catch) error handler
//         dispatch(getUser({ error: authError }))
//       })
//       .catch(dispatchOrHistoryErr => console.error(dispatchOrHistoryErr))

// export const logout = () =>
//   dispatch =>
//     axios.post('/auth/logout')
//       .then(_ => {
//         dispatch(removeUser())
//         logOutOfCart() //clears cartId and Token
//         history.push('/')
//       })
//       .catch(err => console.log(err))

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
