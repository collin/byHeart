import React, { Component } from 'react'
import { Form, Input, TextArea, Button, Label, Segment, Header } from 'semantic-ui-react'
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


      <Segment style={{ marginLeft: "2%", marginRight: "2%" }}>
        <Form onSubmit={handleSubmit}>
          <Label pointing="below" size="large">Please enter the passage's title and content</Label>
          <Input style={{ width: "100%", marginLeft: "0" }} id="formTitle" name="passageTitle" placeholder="Title" />
          <TextArea id="formContent" autoHeight style={{ minHeight: 200 }} name="passageContent" label="Passage" placeholder="Passage" />          
          <div style={{width: "100%"}}>
            <Button type="submit" content="Start" floated="right" style={{ marginRight: "2%" }} />
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
