import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Tab } from 'semantic-ui-react'
import { fetchPassage } from '../store'
import PassageTraining from './training/PassageTraining'
import LineByLineTrainer from './training/LineByLineTrainer'
import './Training.css'
import history from '../history'


export class Training extends Component {

  componentWillMount() {
    if (this.props.match && this.props.match.params.id) {
      this.props.loadInitialData(this.props.match.params.id)
    } else if (!this.props.content) {
      history.push('/passages/new')
    }
  }

  render () {
    const panes = this.props.content && [
      /* when we add other views such as lines, just add the comonents between
      <Tab.Pain> <Component /></Tab.Pain> see tab 2 button example.
      */
      {
        menuItem: 'Passage', render: () => ( // eslint-disable-line
          <Tab.Pane key="1">
            <PassageTraining />
          </Tab.Pane>)
      },
      { menuItem: 'Lines', render: () => <Tab.Pane key="2"><LineByLineTrainer /></Tab.Pane> }, // eslint-disable-line
      { menuItem: 'Quiz', render: () => <Tab.Pane key="3">Check back soon!</Tab.Pane> }, // eslint-disable-line
    ]
    return (
      <div>
        <h3 className="documentTitle">{this.props.title ? this.props.title : 'Untitled Document'}
        </h3>
        <div className="container">
          {
            <Tab panes={panes} />
          }

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
    title: state.passage.title,
    content: state.passage.content,
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData(passageId) {
      dispatch(fetchPassage(passageId))
    },
  }
}

export default connect(mapState, mapDispatch)(Training)

