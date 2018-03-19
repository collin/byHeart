import React from 'react'
// import PropTypes from 'prop-types'
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
      menuItem: 'Passage', render: () => ( // eslint-disable-line
        <Tab.Pane key="1">
          <PassageTraining />
        </Tab.Pane>)
    },
    { menuItem: 'Lines', render: () => <Tab.Pane key="2">{<button>this is a button</button>}</Tab.Pane> }, // eslint-disable-line
    { menuItem: 'Quiz', render: () => <Tab.Pane key="3">Tab 3 Content</Tab.Pane> }, // eslint-disable-line
  ]
  return (
    <div>
      <h3 className="documentTitle">{props.title ? props.title : 'Untitled Document'}
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
    title: state.passage.title,
    isLoggedIn: !!state.user.id
  }
}

<<<<<<< HEAD
const mapDispatch = dispatch => {
  return {

  }
}
=======
// const mapDispatch = dispatch => {
//   return {
//   }
// }
>>>>>>> master

export default connect(mapState)(Training)

/**
 * PROP TYPES
 */
// Training.propTypes = {
//   isLoggedIn: PropTypes.bool.isRequired
// }
