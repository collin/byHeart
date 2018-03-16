// function to tokenize sentences
const { decimateString } = require('./decimate')
const original = `When, in disgrace with fortune and men’s eyes,
I all alone beweep my outcast state,
And trouble deaf heaven with my bootless cries,
And look upon myself, and curse my fate,
Wishing me like to one more rich in hope,
Featur’d like him, like him with friends possess’d,
Desiring this man’s art and that man’s scope,
With what I most enjoy contented least;
Yet in these thoughts myself almost despising,
Haply I think on thee, and then my state,
Like to the lark at break of day arising
From sullen earth, sings hymns at heaven’s gate;
For thy sweet love remember’d such wealth brings
That then I scorn to change my state with kings.`


function tokenizePassage(stringPassage) {
  let tokens = stringPassage.split(' ')
  tokens = tokens.filter(token => token !== '')
  return tokens
}
function buildDecimationLevels(stringPassage, levels = 10) {

  const decimatedArrays = [tokenizePassage(stringPassage)]
  for (let i = 1; i <= levels; i++) {

    decimatedArrays.push(tokenizePassage(decimateString(stringPassage, i)))

  }
  return decimatedArrays
}

function wordHint(decimatedCollection, level, index) { // we can change what is fed in.
  //level is integer representing current decimation level
  // index is the index of the word in that array.
  const current = decimatedCollection[level][index]
  if (current === decimatedCollection[0][index]) return decimatedCollection[0][index]
  for (let i = level - 1; i > 0; i--) {
    if (current !== decimatedCollection[i][index]) return decimatedCollection[i][index]
  }


}
module.exports = { tokenizePassage, buildDecimationLevels, wordHint }
