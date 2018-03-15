import React, { Component } from 'react'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { gotPassage } from '../store'

class NewPassage extends Component {

  componentDidMount() {
    if (!this.props.isLoggedIn && localStorage.passage) {
      document.getElementById('formTitle').value = JSON.parse(localStorage.getItem('passage')).title
      document.getElementById('formContent').value = JSON.parse(localStorage.getItem('passage')).content
    }
  }
  render() {

    const { handleSubmit } = this.props

    return (
      <div id="form">
        <p>Enter your passage title and text in the fields bello and click START:</p>
        <Form fluid="true" onSubmit={handleSubmit}>
          <Form.Field id="formTitle"  name="passageTitle" control={Input} label="Title" placeholder="Enter a title for your passage" />
          <Form.Field id="formContent" name="passageContent" control={TextArea} label="Passage" placeholder="Enter or paste your passage here..." />
          <div>
            <Form.Button control={Button} content="Start" />
          </div>
        </Form>
      </div>
    )
  }
}

function setPassageLocals(passage) {
  localStorage.setItem('passage', JSON.stringify(passage))
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit(event) {
      event.preventDefault()
      const passage = { title: event.target.passageTitle.value, content: event.target.passageContent.value }
      setPassageLocals(passage)
      dispatch(gotPassage(passage))
    }
  }
}

export default connect(mapState, mapDispatchToProps)(NewPassage)
