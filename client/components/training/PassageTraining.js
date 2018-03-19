import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Sticky, Container } from 'semantic-ui-react'
import './PassageTrainer.css'
import { decimateString } from '../../utils/decimate'
import { buildDecimationLevels } from '../../utils/tokenize'
import { SpannedText } from './SpannedText'
// import { Link } from 'react-router-dom'
// import { logout } from '../store'

class PassageTraining extends Component {
  constructor(props) {
    super(props)
    this.state = {
      decimateLevel: 0,
      decimatedArrays: [[]]
      //this.props.state.passage.content
    }
  }
  componentDidMount() {

    if (this.props.content) {

      const decimatedArrays = buildDecimationLevels(this.props.content)
      this.setState({ decimatedArrays })
    }
  }

  handleContextRef = contextRef => {
    this.setState({ contextRef })
  }
  handleInputChange = (e) => {
    this.setState({ decimateLevel: +e.target.value })
  }

  handlePaginationChange = (e, { decimateLevel }) => this.setState({ decimateLevel })
  render() {

    let { contextRef } = this.state

    // let content = !this.props.content ? '' :
    //   this.props.decimateString(this.props.content, this.state.decimateLevel)


    return (
      <div className="container">
        <div id="stickyZone" ref={this.handleContextRef}>
          <Sticky context={contextRef} >
            <div className="decimate">
              <input id="slideBar" min={0} max={10} onChange={this.handleInputChange} type="range" value={this.state.decimateLevel} />
            </div>
          </Sticky>
          <SpannedText tokenizedPassages={this.state.decimatedArrays} decimateLevel={this.state.decimateLevel} />
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
