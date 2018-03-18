import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { wordHint } from '../../utils/wordHint'
import './PassageTrainer.css'
import './SpannedText.css'
import { relative } from 'path'
import ReactTooltip from 'react-tooltip'

export class SpannedText extends React.Component {
  constructor(props) {
    super(props)

    // hint will be the version of the word to show
    // hint level is the current decimation level
    // vissible will be set to the id of whatever word is moused over
    // the visibilty will be used with a set time out set to this.currentTimer
    //mouse out propagates, and will remove the timer on this.currentTimer
    // remove the tool tip and set visible to null.
    this.state = {
      hint: '',
      hintLevel: this.props.decimateLevel,
      tipDelay: 650
    }
    this.mouseOverHint = this.mouseOverHint.bind(this)
    this.mouseOutHandler = this.mouseOutHandler.bind(this)
    this.spannifyArray = this.spannifyArray.bind(this)

  }


  spannifyArray(arr) {
    return arr.map((word, i) => {
      if (word == '<br/>') { return (<br />) }
      else {
        return (

          <span
            key={i} id={i} data-delay-show={this.state.tipDelay} data-for={`hint`}
            className="wordStyle passageText" style={{ position: relative }
            } > {word + ' '}
            <ReactTooltip id={`hint`} effect="solid" place="left" html={true} >
              {`<h2 className="hintBox"> Hint:   ${this.state.hint} </h2>`}
            </ReactTooltip>
          </span>
        )
      }
    })
  }
  mouseOverHint(e) {
    e.stopPropagation()
    // console.log()
    const index = +e.target.id
    //--isWord---//
    const isWord = (Number.isSafeInteger(index) &&
      Array.isArray(this.props.tokenizedPassages) &&
      Array.isArray(this.props.tokenizedPassages) &&
      typeof this.props.decimateLevel === 'number')
    //---end isWord---//
    if (isWord) {
      let element = document.getElementById(index)

      let toBeHint = wordHint(
        this.props.tokenizedPassages,
        this.props.decimateLevel,
        index
      )
      this.setState({
        hint: toBeHint.hint,
        hintLevel: toBeHint.hintLevel
      })

    }
  }

  mouseOutHandler(e) {
    e.stopPropagation()

  }
  render() {
    let content = this.props.tokenizedPassages[this.props.decimateLevel]

    return (
      <div className="passageText" onMouseOver={this.mouseOverHint} onMouseOut={this.mouseOutHandler}>
        {
          this.spannifyArray(content)
        }

      </div>
    )
  }
}

/**
 * PROP TYPES
 */
SpannedText.propTypes = {
  decimateLevel: PropTypes.number.isRequired,
  tokenizedPassages: PropTypes.arrayOf(PropTypes.array).isRequired
}


// function mouseOverHint(e) {
//   console.log('hint', this.props.tokenizedPassages[e.target.id])

// }
