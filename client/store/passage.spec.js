import reducer, { gotPassage } from './passage'
import { expect } from 'chai'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('Passage Store', () => {
  describe('action creators', () => {
    describe('gotPassage', () => {
      let passage = {}

      beforeEach(() => {
        passage = { title: 'My Speach', content: 'I have a dream' }
      })

      it('should create an action with correct title', () => {
        const action = gotPassage(passage)
        expect(action.type).to.be.equal('GOT_PASSAGE')
        expect(action.passage).to.be.deep.equal({ title: 'My Speach', content: 'I have a dream' })
      })
    })
  })

  describe('reducer', () => {
    let state = []
    let passage = {}

    beforeEach(() => {
      state = [{ title: 'Old Speach', content: 'Done with that' }]
      passage = [{ title: 'My Speach', content: 'I have a dream' }]
    })

    it('should set the state with new passage object', () => {
      const newState = reducer(state, {
        type: 'GOT_PASSAGE',
        passage
      })
      expect(newState).to.be.deep.equal([{ title: 'My Speach', content: 'I have a dream' }])
    })
  })
})
