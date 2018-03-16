import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Tab } from 'semantic-ui-react'
import PassageTraining from './training/PassageTraining'
import './Training.css'
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
  const titleReady = props.passage && props.passage.title
  return (
    <div>
      <h3 className="documentTitle">{titleReady ? props.passage.title : 'Untitled Document'}
      </h3>
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
  }
}

export default connect(mapState, mapDispatch)(Training)

/**
 * PROP TYPES
 */
Training.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}
