import React from 'react'
import './Card.css'

const Card = (props) => {
  const { lineAbove, currentLine, lineBelow, next } = props
  return (
    <div className="card">
      <div id="line-above" className="lines blurred">{lineAbove}</div>
      <div id="current-line" className="lines">{currentLine}</div>
      <div id="line-below" className="lines blurred">{lineBelow}</div>
      <div className="button-wrapper">
        <button className="button-next" onKeyPress={(event) => {next(event)}}>Next</button>
      </div>
    </div>
  )
}

export default Card
