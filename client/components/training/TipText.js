import React from 'react'

const TipText = props => {
  let { hintArray, hintIndex } = props
  let hintText = hintArray[hintIndex]
  for (let i = hintIndex; i >= 0; i--) {
    if (hintText !== hintArray[i]) {
      hintText = hintArray[i]
      break
    }
  }

  console.log(hintIndex)
  return (
    <span> {hintText} </span>
  )
}
export default TipText
