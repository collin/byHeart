const piDigits = require('./pi-digits')
const whiteSpace = ' \t\n'
const excludedCharacters = '`~!@#$%^&*()-_=+[{]}\\|;:\'"“‘’”,<.>/?` \t\n'

const markStringForDecimation = (text) => {
  text = text.trim()
  if (text.length <= 1) return text

  let markedText = '#'

  for (let i = 1; i < text.length; i++) {
    if (whiteSpace.indexOf(text[i]) > -1) {
      markedText += text[i]
    } else if (excludedCharacters.indexOf(text[i]) > -1) {
      markedText += '#'
    } else if (excludedCharacters.indexOf(text[i - 1]) > -1 && excludedCharacters.indexOf(text[i]) === -1) {
      markedText += '#'
    } else {(
      markedText += piDigits[ (i + text.length) % piDigits.length ]
    )}
  }

  return markedText
}

const decimateString = (text, rate = 10) => {
  const markedText = markStringForDecimation(text)
  let decimatedText = ''
  text = text.trim()

  for (let i = 0; i < text.length; i++) {
    const char = markedText[i]
    const value = char.match(/\d/) ? Number(char) : 10
    decimatedText += (value < rate) ? '_' : text[i]
  }

  return decimatedText
}

const str = `I all alone beweep my outcast state,
And trouble deaf heaven with my bootless cries,`

console.log(decimateString(str, 0), '\n')
console.log(decimateString(str, 1), '\n')
console.log(decimateString(str, 2), '\n')
console.log(decimateString(str, 3), '\n')
console.log(decimateString(str, 4), '\n')
console.log(decimateString(str, 5), '\n')
console.log(decimateString(str, 6), '\n')
console.log(decimateString(str, 7), '\n')
console.log(decimateString(str, 8), '\n')
console.log(decimateString(str, 9), '\n')
console.log(decimateString(str, 10), '\n')

module.exports = { decimateString }
