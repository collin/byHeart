// function to tokenize sentences
const { decimateString } = require('./decimate')


function tokenizePassage(stringPassage, punctuationTrue) {

  //replace breaks

  let passage = stringPassage.replace(/\r?\n|\r/g, '')
  console.log(passage)
  // tokenizes punctuation.
  if (punctuationTrue !== undefined || !false) passage = passage.replace(/[,.!?]/g, punc => ' ' + punc)
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


module.exports = { tokenizePassage, buildDecimationLevels }
