import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { gotPassage } from '../store/passage'
import history from '../history'

export const Profile = (props) => {
  const { passages, user, handleNewPassage, handleTrainPassage, handleEditPassage } = props
  const filteredPassages = passages.filter(passage => passage.authorId === user.id)

  return (
    <div>
      <h1>My Profile</h1>
      <button onClick={handleNewPassage}>New Passage</button>
      <ul>
        {filteredPassages && filteredPassages.map(passage => {
          return (
            <li key={`passage-${passage.id}`}>
              {passage.title}
              <button onClick={() => {handleTrainPassage(passage)}}>Train</button>
              <button onClick={() => {handleEditPassage(passage)}}>Edit</button>
              <button>Delete</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
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
