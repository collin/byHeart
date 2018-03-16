import React, { Component } from 'react'
import { Form, Input, TextArea, Button, Label, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { gotPassage, addPassage } from '../store'
import { postPassage } from '../store/passages';

class NewPassage extends Component {

  componentWillReceiveProps() {

    if (!this.props.passage.title && localStorage.passage) {
      const passage = JSON.parse(localStorage.getItem('passage'))
      this.props.handlePassageFromLocal(passage)
    }
  }
  render() {

    const { handleSubmit, passage, handleSave, isLoggedIn, authorId } = this.props
    // console.log('passage in render: ', passage)

    const title = passage.title ? passage.title : ''
    const content = passage.content ? passage.content : ''

    return (

      <Segment style={{ marginLeft: '2%', marginRight: '2%' }}>
        <Form onSubmit={handleSubmit}>
          <Label pointing="below" size="large">Please enter the passage's title and content</Label>
          <Input defaultValue={title} style={{ width: '100%', marginLeft: '0' }} id="formTitle" name="passageTitle" placeholder="Title" />
          <TextArea defaultValue={content} id="formContent" autoHeight style={{ minHeight: 200 }} name="passageContent" label="Passage" placeholder="Passage" />
          <div style={{ width: '100%' }}>
            <Button type="submit" content="Start" floated="right" style={{ marginRight: '2%' }} />
            <Button onClick={(event) => {handleSave(authorId, passage, event)}} content="Save" floated="right" style={{ marginRight: '2%' }} />
          </div>
        </Form>
      </Segment>

    )
  }
}

function setPassageLocals(passage) {
  localStorage.setItem('passage', JSON.stringify(passage))
}

const mapState = (state) => {
  console.log('state: ', state)
  return {
    isLoggedIn: !!state.user.id,
    passage: state.passage,
    authorId: state.user.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit(event) {
      event.preventDefault()
      const passage = { title: event.target.passageTitle.value, content: event.target.passageContent.value }
      setPassageLocals(passage)
      dispatch(gotPassage(passage))
    },
    handlePassageFromLocal(passage) {
      dispatch(gotPassage(passage))
    },
    handleSave(authorId, passage, event) {
      passage.title = document.getElementById('formTitle').value
      passage.content = document.getElementById('formContent').value
      event.preventDefault()
      if (authorId && !passage.id){
        passage.authorId = authorId
        dispatch(postPassage(passage))
      }
    }
  }
}

export default connect(mapState, mapDispatchToProps)(NewPassage)
