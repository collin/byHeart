import React from 'react'

const TextWithLineBreaks = (props) => {
  const { text } = props
  const lines = text.split('\n')
  let key = 1000
  return (
    <div>
      {lines && lines.map((line) => {
        return (
          <div key={key++}>
            {line}
          </div>
        )
      })}
    </div>
  )
}

export default TextWithLineBreaks
