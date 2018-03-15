import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Tab, Sticky, Container } from 'semantic-ui-react'
import './PassageTrainer.css'

// import { Link } from 'react-router-dom'
// import { logout } from '../store'

class PassageTraining extends Component {
  constructor(props) {
    super(props)
    this.state = {
      degradationLevel: 0
    }


  }

  handleContextRef = contextRef => {
    this.setState({ contextRef })
  }
  handleInputChange = (e) => {
    this.setState({ degradationLevel: +e.target.value })
  }

  handlePaginationChange = (e, { degradationLevel }) => this.setState({ degradationLevel })
  render() {
    let { contextRef } = this.state
    return (
      <Container>

        <div id="stickyZone" ref={this.handleContextRef}>
          <Sticky context={contextRef} >
            <div className="degradation">
              <input id="slideBar" min={0} max={10} onChange={this.handleInputChange} type="range" value={this.state.degradationLevel} />
            </div>
          </Sticky>

          <div className="passageText">
            <p>Carol ate my begal! I hate Carol. She should be... Carol brought me a bagel. She is my bead friend. This is life at the two poles. </p>
            <p> Lorem consequat est	Pariatur aliqua sunt fugiat aliqua cillum officia mollit elit reprehenderit ipsum proident consequat. Minim do sint sint deserunt officia tempor commodo sunt labore. Minim labore cillum laborum sunt non exercitation nostrud exercitation culpa in. Cillum amet eu aute sit irure id nulla minim enim pariatur. Excepteur anim quis aute duis amet.  Laborum et dolore commodo voluptate laboris pariatur ullamco sit commodo irure cillum. Non amet laboris occaecat veniam sunt nostrud quis adipisicing dolor cupidatat deserunt. In anim veniam officia tempor laborum qui laborum sunt proident. Qui cillum mollit anim et incididunt magna ut ut veniam deserunt id pariatur amet minim.  Culpa ex sit ipsum in consequat occaecat.Lorem consequat est	Pariatur aliqua sunt fugiat aliqua cillum officia mollit elit reprehenderit ipsum proident consequat. Minim do sint sint deserunt officia tempor commodo sunt labore. Minim labore cillum laborum sunt non exercitation nostrud exercitation culpa in. Cillum amet eu aute sit irure id nulla minim enim pariatur. Excepteur anim quis aute duis amet.  Laborum et dolore commodo voluptate laboris pariatur ullamco sit commodo irure cillum. Non amet laboris occaecat veniam sunt nostrud quis adipisicing dolor cupidatat deserunt. In anim veniam officia tempor laborum qui laborum sunt proident. Qui cillum mollit anim et incididunt magna ut ut veniam deserunt id pariatur amet minim.  Culpa ex sit ipsum in consequat occaecat.</p>
            <p>Lorem consequat est	Pariatur aliqua sunt fugiat aliqua cillum officia mollit elit reprehenderit ipsum proident consequat. Minim do sint sint deserunt officia tempor commodo sunt labore. Minim labore cillum laborum sunt non exercitation nostrud exercitation culpa in. Cillum amet eu aute sit irure id nulla minim enim pariatur. Excepteur anim quis aute duis amet.  Laborum et dolore commodo voluptate laboris pariatur ullamco sit commodo irure cillum. Non amet laboris occaecat veniam sunt nostrud quis adipisicing dolor cupidatat deserunt. In anim veniam officia tempor laborum qui laborum sunt proident. Qui cillum mollit anim et incididunt magna ut ut veniam deserunt id pariatur amet minim.  Culpa ex sit ipsum in consequat occaecat.Lorem consequat est	Pariatur aliqua sunt fugiat aliqua cillum officia mollit elit reprehenderit ipsum proident consequat. Minim do sint sint deserunt officia tempor commodo sunt labore. Minim labore cillum laborum sunt non exercitation nostrud exercitation culpa in. Cillum amet eu aute sit irure id nulla minim enim pariatur. Excepteur anim quis aute duis amet.  Laborum et dolore commodo voluptate laboris pariatur ullamco sit commodo irure cillum. Non amet laboris occaecat veniam sunt nostrud quis adipisicing dolor cupidatat deserunt. In anim veniam officia tempor laborum qui laborum sunt proident. Qui cillum mollit anim et incididunt magna ut ut veniam deserunt id pariatur amet minim.  Culpa ex sit ipsum in consequat occaecat.</p>
            <p>Lorem consequat est	Pariatur aliqua sunt fugiat aliqua cillum officia mollit elit reprehenderit ipsum proident consequat. Minim do sint sint deserunt officia tempor commodo sunt labore. Minim labore cillum laborum sunt non exercitation nostrud exercitation culpa in. Cillum amet eu aute sit irure id nulla minim enim pariatur. Excepteur anim quis aute duis amet.  Laborum et dolore commodo voluptate laboris pariatur ullamco sit commodo irure cillum. Non amet laboris occaecat veniam sunt nostrud quis adipisicing dolor cupidatat deserunt. In anim veniam officia tempor laborum qui laborum sunt proident. Qui cillum mollit anim et incididunt magna ut ut veniam deserunt id pariatur amet minim.  Culpa ex sit ipsum in consequat occaecat.</p>
            <p> Lorem consequat est	Pariatur aliqua sunt fugiat aliqua cillum officia mollit elit reprehenderit ipsum proident consequat. Minim do sint sint deserunt officia tempor commodo sunt labore. Minim labore cillum laborum sunt non exercitation nostrud exercitation culpa in. Cillum amet eu aute sit irure id nulla minim enim pariatur. Excepteur anim quis aute duis amet.  Laborum et dolore commodo voluptate laboris pariatur ullamco sit commodo irure cillum. Non amet laboris occaecat veniam sunt nostrud quis adipisicing dolor cupidatat deserunt. In anim veniam officia tempor laborum qui laborum sunt proident. Qui cillum mollit anim et incididunt magna ut ut veniam deserunt id pariatur amet minim.  Culpa ex sit ipsum in consequat occaecat.</p>
          </div>
        </div>
      </Container>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    // handleClick() {
    //   dispatch(logout())
    // }
  }
}

export default connect(mapState, mapDispatch)(PassageTraining)

/**
 * PROP TYPES
 */
PassageTraining.propTypes = {
  // handleClick: PropTypes.func.isRequired,
}
