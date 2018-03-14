import { expect } from 'chai'
import { decimateString } from './decimate'

describe('decimateString', () => {
  const text = 'So shall I live, supposing thou art true,'

  it('should return the full text if percentage is set to 0', () => {
    expect(decimateString(text, 0)).to.equal(text)
  })

  it('should never remove the first letter of a word or the punctuation,', () => {
    expect(decimateString(text, 50)).to.match(/S. s.... I l..., s........ t... a.. t...,/)
  })

  it('should always return the same result,', () => {
    expect(decimateString(text, 10)).to.equal(decimateString(text, 10))
    expect(decimateString(text, 20)).to.equal(decimateString(text, 20))
    expect(decimateString(text, 30)).to.equal(decimateString(text, 30))
    expect(decimateString(text, 40)).to.equal(decimateString(text, 40))
    expect(decimateString(text, 50)).to.equal(decimateString(text, 50))
    expect(decimateString(text, 60)).to.equal(decimateString(text, 60))
    expect(decimateString(text, 70)).to.equal(decimateString(text, 70))
    expect(decimateString(text, 80)).to.equal(decimateString(text, 80))
    expect(decimateString(text, 90)).to.equal(decimateString(text, 90))
  })

  it('should remove all letters except for the first letters of every word if percentage is 100', () => {
    expect(decimateString(text, 100)).to.equal('S_ s____ I l___, s________ t___ a__ t___,')
  })
})
