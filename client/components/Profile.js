import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { gotPassage, fetchPassages } from '../store/'
import { Card, Button } from 'semantic-ui-react'
import history from '../history'
import './Profile.css'

export class Profile extends Component {

  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const { passages, user, handleNewPassage, handleTrainPassage, handleEditPassage } = this.props
    const filteredPassages = passages.filter(passage => passage.authorId === user.id)

    return (
      <div className="main">
        <h1>My Profile</h1>
        <Card.Group className="passage-cards" itemsPerRow={2}>
          {filteredPassages && filteredPassages.map(passage => {
            return (
              <Card key={`passage-${passage.id}`} className="card" basic color="purple">
                <Card.Content header={passage.title} />
                <Card.Content description={passage.content.slice(0, 40).concat('(...)')} />
                <Card.Content extra>
                  <Button onClick={() => { handleTrainPassage(passage) }}>Train</Button>
                  <Button onClick={() => { handleEditPassage(passage) }}>Edit</Button>
                  <Button>Delete</Button>
                </Card.Content>
              </Card>
            )
          })}
        </Card.Group>
        <div>
          <Button onClick={handleNewPassage}>New Passage</Button>
        </div>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    passages: state.passages,
    user: state.user
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleNewPassage() {
      localStorage.clear()
      dispatch(gotPassage({}))
      history.push('/newpassage')
    },
    handleEditPassage(passage) {
      localStorage.setItem('passage', JSON.stringify(passage))
      dispatch(gotPassage(passage))
      history.push('/newpassage')
    },
    handleTrainPassage(passage) {
      localStorage.setItem('passage', JSON.stringify(passage))
      dispatch(gotPassage(passage))
      history.push('/train')
    },
    loadInitialData() {
      dispatch(fetchPassages())
    }
  }
}

export default connect(mapState, mapDispatch)(Profile)

Profile.propTypes = {
  passages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      content: PropTypes.string,
      isPublic: PropTypes.bool,
      authorId: PropTypes.number
    })
  )
}
