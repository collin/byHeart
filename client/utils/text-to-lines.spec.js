const { splitTextByNewLine, splitByWord, normalizeText } = require('./text-to-lines')
const { expect } = require('chai')

describe('splitTextByNewLine function', () => {
  it('should return an array', () => {
    expect(splitTextByNewLine('my text')).to.be.an('array')
  })

  it('should split a string into multiple lines by newline character', () => {
    expect(splitTextByNewLine('my text\nline2\nline3').length).to.equal(3)
  })

  it('should effectively treat multiple new line chars as one', () => {
    expect(splitTextByNewLine('my text\n\n\nline2\nline3').length).to.equal(3)
  })
})

describe('splitByWord function', () => {
  it('should return an array', () => {
    expect(splitByWord('my text')).to.be.an('array')
  })

  it('should split a string into multiple lines by spaces', () => {
    const splitText = splitByWord('my text. line2. line3')
    expect(splitText).to.deep.equal([ 'my', 'text.', 'line2.', 'line3' ])
    expect(splitText.length).to.equal(4)
  })

  it('should effectively treat multiple whitespace chars as one', () => {
    expect(splitByWord('my text   line2 line3').length).to.equal(4)
  })
})

describe('normalizeText function', () => {
  it('should return an array', () => {
    expect(normalizeText('my text', 80)).to.be.an('array')
  })

  it('should split a line of text into multiple segments less than targetMax', () => {
    const verse = `Blessed are those who are persecuted because of righteousness, for theirs is the kingdom of heaven.`
    const result = normalizeText(verse, 80)
    expect(result.length).to.equal(2)
    expect(result).to.deep.equal(['Blessed are those who are persecuted because of righteousness,', 'for theirs is the kingdom of heaven.'])
  })

  it('should work for larger chunks of text', () => {
    const paragraph = `Blessed are those who are persecuted because of righteousness, for theirs is the kingdom of heaven. Blessed are those who are persecuted because of righteousness, for theirs is the kingdom of heaven. Blessed are those who are persecuted because of righteousness, for theirs is the kingdom of heaven.`
    const result = normalizeText(paragraph, 80)
    expect(result.length).to.equal(4)
  })

})
