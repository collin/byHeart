import  { expect } from 'chai'
const db = require('../db')
const Passage = db.model('passage')
const User    = db.model('user')
const app = require('../index')
const request = require('supertest')

describe('Passage routes', () => {
  beforeEach(() => {
    return db.sync({ force: true})
  })

  describe('GET /api/passages', () => {
    const passages = [
      {
        title: 'speech',
        content: 'Several paragraphs of golden words',
        isPublic: false
      },
      {
        title: 'monolog',
        content: 'Extremely dramatic lines',
        isPublic: true
      },
      {
        title: 'mark 1:2',
        content: 'Bible quotations',
        isPublic: true
      },
    ]

    beforeEach(() => Passage.bulkCreate(passages))

    it('should return all the public passages', () => {
      return request(app)
        .get('/api/passages')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array')
          expect(res.body.length).to.be.equal(2)
        })
    })
  })

  describe('POST /api/passages', () => {
    const user = { email: 't@t.com', password: '123' }
    const passage = { title: 'my title', content: 'my content' }
    let userId

    beforeEach(() => {
      return User.create(user)
        .then(newUser => {
          userId = newUser.id
          return userId
        })
    })

    it('should create a new passage', () => {
      passage.authorId = userId
      return request(app)
        .post(`/api/passages/`)
        .send(passage)
        .expect(201)
        .then(res => {
          expect(res.body.title).to.be.equal('my title')
        })
    })
  })
})
