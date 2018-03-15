import React from 'react'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { gotPassage } from '../store'

const NewPassage = (props) => {

  // function componentDidMount() {
  //   if (localStorage.passageTitle || localStorage.passageText) {

  //   }
  // }
  const { handleSubmit } = props

  return (
    <div id="form">
      <p>Enter your passage title and text in the fields bello and click START:</p>
      <Form size="large" onSubmit={handleSubmit}>
        <Form.Field width={12} name="passageTitle" control={Input} label="Title" placeholder="Enter a title for your passage" />
        <Form.Field width={12} name="passageContent" control={TextArea} label="Passage" placeholder="Enter or paste your passage here..." />
        <div>
          <Form.Button control={Button} content="Start" />
        </div>
      </Form>
    </div>
  )
}

function setPassageLocals(passage) {
  localStorage.setItem('passage', JSON.stringify(passage))
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit(event) {
      event.preventDefault()
      const passage = {title: event.target.passageTitle.value, content: event.target.passageContent.value}
      setPassageLocals(passage)
      dispatch(gotPassage(passage))
    }
  }
}

export default connect(null, mapDispatchToProps)(NewPassage)
