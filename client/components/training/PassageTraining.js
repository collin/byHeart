import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Tab, Sticky, Container } from 'semantic-ui-react'
import './PassageTrainer.css'
import { decimateString } from '../../utils/decimate'

// import { Link } from 'react-router-dom'
// import { logout } from '../store'

class PassageTraining extends Component {
  constructor(props) {
    super(props)
    this.state = {
      decimateLevel: 0
      //this.props.state.passage.content
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
    let content = !this.props.passage.content ? '' :
      this.props.decimateString(this.props.state.passage.content, this.state.decimateLevel)


    return (
      <Container>
        <div id="stickyZone" ref={this.handleContextRef}>
          <Sticky context={contextRef} >
            <div className="decimate">
              <input id="slideBar" min={0} max={10} onChange={this.handleInputChange} type="range" value={this.state.decimateLevel} />
            </div>
          </Sticky>

          <div className="passageText">
            <p>{
              content
            }</p>
          </div>
        </div>
      </Container >
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    passage: state.passage,
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    decimateString: (text, level) => decimateString(text, level)
  }
}

export default connect(mapState, mapDispatch)(PassageTraining)

/**
 * PROP TYPES
 */
PassageTraining.propTypes = {
  // handleClick: PropTypes.func.isRequired,
}
