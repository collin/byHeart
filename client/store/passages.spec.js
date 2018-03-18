import reducer, { gotPassages, fetchPassages, updatePassage } from './passages'
import { expect } from 'chai'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('Passages store', () => {
  describe('action creators', () => {
    let passages = []
    let action = {}

    beforeEach(() => {
      passages = [ { title: 'Pictures', content: 'hello!'}, { title: 'Interesting Links', content: 'say what?' }]
      action = gotPassages(passages)
    })

    it('should return correct type', () => {
      expect(action.type).to.be.equal('GOT_PASSAGES')
    })
  })

  describe('thunks', () => {
    let store, mockAxios

    const initialState = { passages: [] }

    beforeEach(() => {
      mockAxios = new MockAdapter(axios)
      store = mockStore(initialState)
    })

    afterEach(() => {
      mockAxios.restore()
      store.clearActions()
    })

    describe('fetchPassages', () => {
      it('dispatches the GOT_PASSAGES action', () => {
        const fakePassages = [{title: 'links', id: 1}]
        mockAxios.onGet('/api/passages').replyOnce(200, fakePassages)
        return store.dispatch(fetchPassages())
          .then(() => {
            const actions = store.getActions()
            expect(actions[0].type).to.be.equal('GOT_PASSAGES')
            expect(actions[0].passages).to.deep.equal(fakePassages)
          })
      })
    })

    describe('updatePassage', () => {
      it('dispatches the GOT_UPDATED_PASSAGE action', () => {
        const fakePassage = { id: 1, title: 'My title', content: 'some lines to learn', isPublic: true, authorId: 1 }
        mockAxios.onPut('/api/passages/1').replyOnce(204, fakePassage)

      return store.dispatch(updatePassage({ id: 1, title: 'My title', content: 'some lines to learn', isPublic: true, authorId: 1 }))
          .then(() => {
            const actions = store.getActions()
            expect(actions[0].type).to.be.equal('GOT_UPDATED_PASSAGE')
            expect(actions[0].passage.title).to.equal('My title')
          })
      })
    })
  })

  describe('reducer', () => {
    let state = []
    let passages = []

    beforeEach(() => {
      state = []
      passages = [
        { id: 1, title: 'Pictures', content: 'hello!'},
        { id: 2, title: 'Interesting Links', content: 'say what?' }
      ]
    })

    describe('GOT_PASSAGES action', () => {
      it('should replace the array of passages in state with fetched passages', () => {
        const newState = reducer(state, {
          type: 'GOT_PASSAGES',
          passages
        })
        expect(newState).to.deep.equal([
          { id: 1, title: 'Pictures', content: 'hello!'},
          { id: 2, title: 'Interesting Links', content: 'say what?' }
        ])
      })
    })

    describe('ADD_PASSAGE action', () => {
      it('should add a passage to the array of passages', () => {
        state = passages
        const newPassage = { id: 3, title: 'new passage', content: 'some content' }
        const newState = reducer(state, {
          type: 'ADD_PASSAGE',
          passage: newPassage
        })
        expect(newState.length).to.equal(3)
        expect(newState).to.deep.equal([
          { id: 1, title: 'Pictures', content: 'hello!'},
          { id: 2, title: 'Interesting Links', content: 'say what?' },
          { id: 3, title: 'new passage', content: 'some content' }
        ])
      })
    })

    describe('GOT_UPDATED_PASSAGE action', () => {
      it('should update and replace a passage in the array of passages', () => {
        state = passages
        const updatedPassage = { id: 2, title: 'updated', content: 'updated' }
        const newState = reducer(state, {
          type: 'GOT_UPDATED_PASSAGE',
          passage: updatedPassage
        })
        expect(newState.length).to.equal(2)
        expect(newState).to.deep.equal([
          { id: 1, title: 'Pictures', content: 'hello!'},
          { id: 2, title: 'updated', content: 'updated' }
        ])
      })
    })

  })
})
