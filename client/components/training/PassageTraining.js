import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Sticky, Checkbox, Container } from 'semantic-ui-react'
import './PassageTrainer.css'
import { decimateString } from '../../utils/decimate'
import { buildDecimationLevels } from '../../utils/tokenize'
import TextWithLineBreaks from './TextWithLineBreaks'
// import { Link } from 'react-router-dom'
// import { logout } from '../store'

class PassageTraining extends Component {
  constructor(props) {
    super(props)
    this.state = {
      decimateLevel: 0,
      hideHardSpace: true
      //this.props.state.passage.content
    }
  }

  componentDidMount() {
    this.slideBar.focus()
  }

  handleContextRef = contextRef => {
    this.setState({ contextRef })
  }
  handleInputChange = (e) => {
    this.setState({ decimateLevel: +e.target.value })
  }

  handleToggleHardSpace = () => {
    this.setState({
      ...this.state,
      hideHardSpace: !this.state.hideHardSpace
    })
    this.slideBar.focus()
  }

  handlePaginationChange = (e, { decimateLevel }) => this.setState({ decimateLevel })


  render() {
    let { contextRef, hideHardSpace } = this.state

    let content = !this.props.content ? '' :
      this.props.decimateString(this.props.content, this.state.decimateLevel)

      console.log('this.state.hideHardSpace: ', this.state.hideHardSpace)
    if (this.state.hideHardSpace) {
      content = content.replace(/_/g, '')
    }

    return (
      <div className="container">
        <div id="stickyZone" ref={this.handleContextRef}>
          <Sticky context={contextRef} >
            <div className="decimate">
              <input
                id="slideBar"
                min={0}
                max={10}
                onChange={this.handleInputChange}
                type="range"
                value={this.state.decimateLevel}
                ref={(input) => { this.slideBar = input }}
              />
              <Checkbox label="No space?" onChange={this.handleToggleHardSpace} checked={hideHardSpace} />
            </div>
          </Sticky>

          <div className="passageText">
            <TextWithLineBreaks text={content} />
          </div>
        </div>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    content: state.passage.content,
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    decimateString: (text, level) => decimateString(text, level),
    buildDecimationLevels: (text, level) => buildDecimationLevels(text, level),
  }
}

export default connect(mapState, mapDispatch)(PassageTraining)

/**
 * PROP TYPES
 */
// PassageTraining.propTypes = {

// }
