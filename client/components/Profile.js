import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import { NavLink } from 'react-router-dom'

export const Profile = (props) => {
  const { passages, user } = props
  const filteredPassages = passages.filter(passage => passage.authorId === user.id)

  return (
    <div>
      <h1>My Profile</h1>
      <button>New Passage</button>
      <ul>
        {filteredPassages && filteredPassages.map(passage => {
          return (
            <li key={`passage-${passage.id}`}>{passage.title}</li>
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

export default connect(mapState)(Profile)

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
