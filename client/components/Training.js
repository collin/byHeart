import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Tab } from 'semantic-ui-react'
import PassageTraining from './training/PassageTraining'
// import { Link } from 'react-router-dom'
// import { logout } from '../store'

const Training = (props) => {

  const panes = [
    /* when we add other views such as lines, just add the comonents between
    <Tab.Pain> <Component /></Tab.Pain> see tab 2 button example.
    */
    {
      menuItem: 'Passage', render: () => (
        <Tab.Pane key="1">
          <PassageTraining />
        </Tab.Pane>)
    },
    { menuItem: 'Lines', render: () => <Tab.Pane key="2">{<button>this is a button</button>}</Tab.Pane> },
    { menuItem: 'Quiz', render: () => <Tab.Pane key="3">Tab 3 Content</Tab.Pane> },
  ]
  return (
    <div>
      <h3>Banana</h3>
      <div className="container">
        {
          <Tab panes={panes} />
        }

      </div>
    </div>
  )
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

export default connect(mapState, mapDispatch)(Training)

/**
 * PROP TYPES
 */
Training.propTypes = {
  // handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
