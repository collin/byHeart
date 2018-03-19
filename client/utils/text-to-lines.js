const Tokenizer = require('sentence-tokenizer')
const passages = require('../../script/passages')

const splitTextByNewLine = (text) => {
  return text.split('\n').filter(line => line !== '')
}

const splitByWord = (text) => {
  return text.split(/\s+/)
}

const normalizeText = (text, targetMax) => {
  const slices = Math.ceil(text.length / targetMax)
  const targetLength = Math.ceil(text.length / slices)
  let remainder = text
  let currentSlice = 1
  let result = []

  while (currentSlice < slices) {
    let nextIndex = remainder.indexOf(' ', targetLength)
    result.push(remainder.slice(0, nextIndex))
    remainder = remainder.slice(nextIndex + 1)
    currentSlice++
  }

  result.push(remainder)

  return result
}

const breakIntoLines = (text, targetMax) => {
  let byNewLine = splitTextByNewLine(text)
  let result1 = []
  const tokenized = new Tokenizer()

  byNewLine.forEach(line => {
    tokenized.setEntry(line)
    result1 = [...result1, ...tokenized.getSentences()]
  })

  let result2 = []

  result1.forEach(line => {
    if (line.length < targetMax) {
      result2.push(line)
    } else {
      result2 = [...result2, ...normalizeText(line, targetMax)]
    }
  })

  return result2
}

console.log(breakIntoLines(passages[2].content, 75))

module.exports = {
  splitTextByNewLine,
  splitByWord,
  normalizeText
}
