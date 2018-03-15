import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Tab, Sticky } from 'semantic-ui-react'
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
  handleContextRef = contextRef => this.setState({ contextRef })
  handleInputChange = (e) => {
    this.setState({ degradationLevel: +e.target.value })
  }

  handlePaginationChange = (e, { degradationLevel }) => this.setState({ degradationLevel })
  render() {
    let { contextRef } = this.state
    return (
      <div>
        <Sticky context={contextRef} pushing>
          <div className="degredation">degradationLevel: {this.state.degradationLevel}
            <input min={0} max={10} onChange={this.handleInputChange} type="range" value={this.state.degradationLevel} />

          </div>
        </Sticky>
        <p className="passageText">
          Lorem consequat est	Pariatur aliqua sunt fugiat aliqua cillum officia mollit elit reprehenderit ipsum proident consequat. Minim do sint sint deserunt officia tempor commodo sunt labore. Minim labore cillum laborum sunt non exercitation nostrud exercitation culpa in. Cillum amet eu aute sit irure id nulla minim enim pariatur. Excepteur anim quis aute duis amet.  Laborum et dolore commodo voluptate laboris pariatur ullamco sit commodo irure cillum. Non amet laboris occaecat veniam sunt nostrud quis adipisicing dolor cupidatat deserunt. In anim veniam officia tempor laborum qui laborum sunt proident. Qui cillum mollit anim et incididunt magna ut ut veniam deserunt id pariatur amet minim.  Culpa ex sit ipsum in consequat occaecat.
          Lorem consequat est	Pariatur aliqua sunt fugiat aliqua cillum officia mollit elit reprehenderit ipsum proident consequat. Minim do sint sint deserunt officia tempor commodo sunt labore. Minim labore cillum laborum sunt non exercitation nostrud exercitation culpa in. Cillum amet eu aute sit irure id nulla minim enim pariatur. Excepteur anim quis aute duis amet.  Laborum et dolore commodo voluptate laboris pariatur ullamco sit commodo irure cillum. Non amet laboris occaecat veniam sunt nostrud quis adipisicing dolor cupidatat deserunt. In anim veniam officia tempor laborum qui laborum sunt proident. Qui cillum mollit anim et incididunt magna ut ut veniam deserunt id pariatur amet minim.  Culpa ex sit ipsum in consequat occaecat.
          Lorem consequat est	Pariatur aliqua sunt fugiat aliqua cillum officia mollit elit reprehenderit ipsum proident consequat. Minim do sint sint deserunt officia tempor commodo sunt labore. Minim labore cillum laborum sunt non exercitation nostrud exercitation culpa in. Cillum amet eu aute sit irure id nulla minim enim pariatur. Excepteur anim quis aute duis amet.  Laborum et dolore commodo voluptate laboris pariatur ullamco sit commodo irure cillum. Non amet laboris occaecat veniam sunt nostrud quis adipisicing dolor cupidatat deserunt. In anim veniam officia tempor laborum qui laborum sunt proident. Qui cillum mollit anim et incididunt magna ut ut veniam deserunt id pariatur amet minim.  Culpa ex sit ipsum in consequat occaecat.
        </p>
      </div>
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
