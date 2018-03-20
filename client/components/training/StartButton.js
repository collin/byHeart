import React from 'react'
import './StartButton.css'

const StartButton = (props) => {
  const { click } = props
  return (
    <div className="button-wrapper">
      <button className="start" onClick={click}>start</button>
    </div>
  )
}

export default StartButton
