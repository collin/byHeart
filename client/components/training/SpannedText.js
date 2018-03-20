import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { wordHint } from '../../utils/wordHint'
import { buildDecimationLevelArrays } from '../../utils/decimate'
import './SpannedText.css'
import { relative } from 'path'
import ReactTooltip from 'react-tooltip'
import TipText from './TipText'
export default class SpannedText extends React.Component {
  constructor(props) {
    super(props)

    // hint will be the version of the word to show
    // hint level is the current decimation level
    // vissible will be set to the id of whatever word is moused over
    // the visibilty will be used with a set time out set to this.currentTimer
    //mouse out propagates, and will remove the timer on this.currentTimer
    // remove the tool tip and set visible to null.
    this.state = {
      hintLevel: this.props.decimateLevel,
      tipDelay: 0,
      decimateLevels: buildDecimationLevelArrays(this.props.content)
    }
    this.mouseOverHint = this.mouseOverHint.bind(this)
    this.mouseOutHandler = this.mouseOutHandler.bind(this)
    this.spannifyArray = this.spannifyArray.bind(this)

  }

  componentDidMount() {
    // const decimateLevels = buildDecimationLevelArrays(content)

  }
  spannifyArray(grid) {

    const level = this.props.decimateLevel
    console.log('idPrefix ', this.props.idPrefix)
    return grid[level].map((word, i) => {
      const column = grid.map(row => row[i])
      let id = this.props.idPrefix !== undefined ? '' + this.props.idPrefix + i : i
      // onMouseOver={this.mouseOverHint} onMouseOut={this.mouseOutHandler}
      console.log('resulting ID ', id)
      return (
        <span
          key={id} data-index={id} data-tip data-event="click" data-delay-show="1000" data-for={`hint${id}`}
          className="wordStyle passageText" style={{ position: relative }
          } > {word + ' '}
          <ReactTooltip id={`hint${id}`} effect="solid" place="left" >
            <TipText hintIndex={this.props.decimateLevel} hintArray={column} />
          </ReactTooltip>
        </span>
      )
    }
    )
  }
  // mouseOverHint(e) {
  //   e.stopPropagation()
  //   const index = +e.target.id
  //   //--isWord---//
  //   const isWord = (Number.isInteger(index) &&
  //     Array.isArray(this.state.decimateLevels) &&
  //     Array.isArray(this.state.decimateLevels[this.props.decimateLevel])) &&
  //     this.state.decimateLevels[this.props.decimateLevel][index]
  //   //---end isWord---//
  //   if (isWord) {

  //   }
  // }

  mouseOutHandler(e) {
    e.stopPropagation()
    //will need this event to reset the progressive hint information in state.
  }
  render() {

    let { content, decimateLevel } = this.props
    if (content !== '') {

      content = this.state.decimateLevels[decimateLevel].join(' ')


    }

    return (content === '' ? null : (
      <div className="passageText" >
        {
          this.spannifyArray(this.state.decimateLevels)

        }

      </div>
    ))
  }
}

/**
 * PROP TYPES
 */
SpannedText.propTypes = {
  decimateLevel: PropTypes.number.isRequired,
  // content: PropTypes.string.isRequired
}

