import { expect } from 'chai'
import { decimateString } from './decimate'

describe('decimateString', () => {
  const text = 'So shall I live, supposing thou art true,'

  it('should return the full text if percentage is set to 0', () => {
    expect(decimateString(text, 0)).to.equal(text)
  })

  it('should never remove the first letter of a word or the punctuation,', () => {
    expect(decimateString(text, 5)).to.match(/S. s.... I l..., s........ t... a.. t...,/)
  })

  it('should always return the same result,', () => {
    expect(decimateString(text, 1)).to.equal(decimateString(text, 1))
    expect(decimateString(text, 2)).to.equal(decimateString(text, 2))
    expect(decimateString(text, 3)).to.equal(decimateString(text, 3))
    expect(decimateString(text, 4)).to.equal(decimateString(text, 4))
    expect(decimateString(text, 5)).to.equal(decimateString(text, 5))
    expect(decimateString(text, 6)).to.equal(decimateString(text, 6))
    expect(decimateString(text, 7)).to.equal(decimateString(text, 7))
    expect(decimateString(text, 8)).to.equal(decimateString(text, 8))
    expect(decimateString(text, 9)).to.equal(decimateString(text, 9))
  })

  it('should remove all letters except for the first letters of every word if percentage is 100', () => {
    expect(decimateString(text, 10)).to.equal('S_ s____ I l___, s________ t___ a__ t___,')
  })
})
