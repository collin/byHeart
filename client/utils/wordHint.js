function spannifyGrid(arrayOfArrays) {
  return arrayOfArrays.map((arr) => {
    return arr.map((str, i) => {
      return `<span id="${i}">${str} </span>`
    })
  })
}


function wordHint(decimatedCollection, level, index) { // we can change what is fed in.
  //level is integer representing current decimation level
  // index is the index of the word in that array.
  const current = decimatedCollection[level][index]
  if (current === decimatedCollection[0][index]) {return (
    { hintLevel: 0, hint: decimatedCollection[0][index] }
  )}

  for (let i = level - 1; i > 0; i--) {
    if (current !== decimatedCollection[i][index]) {return ({
      hintLevel: i, hint: decimatedCollection[i][index]
    })}
  }
}
module.exports = { wordHint }
