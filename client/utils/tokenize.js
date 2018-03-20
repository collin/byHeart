// function to tokenize sentences

function tokenizePassage(stringPassage, punctuationTrue) {

  //replace breaks

  let passage = stringPassage.replace(/\r?\n|\r/g, '')
  // tokenizes punctuation.
  if (punctuationTrue !== undefined || !false) passage = passage.replace(/[,.!?]/g, punc => ' ' + punc)
  let tokens = stringPassage.split(' ')
  tokens = tokens.filter(token => token !== '')

  return tokens
}


module.exports = { tokenizePassage }
