import axios from 'axios'
import gotPassage from './passage'

const GOT_PASSAGES = 'GOT_PASSAGES'
const ADD_PASSAGE = 'ADD_PASSAGE'

const initialState = []

export const gotPassages = passages => ({
  type: GOT_PASSAGES,
  passages
})
export const addPassage = passage => ({
  type: ADD_PASSAGE,
  passage
})

export const fetchPassages = () =>
  dispatch =>
    axios.get('/api/passages')
      .then(res => res.data)
      .then(passages => {
        dispatch(gotPassages(passages))
      })

export const postPassage = (passage) =>
  dispatch =>
    axios.post('/api/passages', passage)
      .then(res => res.data)
      .then(newPassage => {
        dispatch(addPassage(newPassage))
        dispatch(gotPassage(newPassage))
      })
      .catch(err => console.error('posting new passage went wrong', err))

export default function (state = initialState, action) {
  switch (action.type) {

    case GOT_PASSAGES:
      return action.passages

    case ADD_PASSAGE:
      return [...state, action.passage]

    default:
      return state
  }
}
