import axios from 'axios'

const GOT_PASSAGES = 'GOT_PASSAGES'

const initialState = []

export const gotPassages = passages => ({
  type: GOT_PASSAGES,
  passages
})

export const fetchPassages = () =>
  dispatch =>
    axios.get('/api/passages')
      .then(res => res.data)
      .then(passages => {
        dispatch(gotPassages(passages))
      })

export default function (state = initialState, action) {
  switch (action.type) {

    case GOT_PASSAGES:
      return action.passages

    default:
      return state
  }
}
