import React, { Component } from 'react'
import { connect } from 'react-redux'
import history from '../history'
import { fetchPassage, updatePassage, gotPassage, postPassage } from '../store'
import { Form, Input, TextArea, Button, Label, Segment } from 'semantic-ui-react'
import './PassageForm.css'

class PassageForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ' ',
      content: ' '
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    if (this.props.match) {
      this.props.loadInitialData(this.props.match.params.id)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.passage && nextProps.passage.title) {
      console.log('nextProps: ', nextProps)
      this.setState({
        title: nextProps.passage.title,
        content: nextProps.passage.content
      })
    }
  }

  handleChange(event, key) {
    this.setState({
      [key]: event.target.value
    })
  }

  render() {
    // console.log('this.props: ', this.props)

    const { handleSubmit, handleSave, authorId, handleUpdate, passage } = this.props
    const { title, content } = this.state

    return (

      <Segment style={{ marginLeft: '2%', marginRight: '2%' }}>
        <Form onSubmit={handleSubmit}>
          <Label pointing="below" size="large">What do you want to memorize?</Label>
          <Input value={title} onChange={(event) => {this.handleChange(event, 'title')}} id="formTitle" style={{ width: '100%', marginLeft: '0' }} name="passageTitle" placeholder="Title" />
          <TextArea value={content} onChange={(event) => {this.handleChange(event, 'content')}} id="formContent" autoHeight style={{ minHeight: 200 }} name="passageContent" label="Passage" placeholder="Passage" />
          <div style={{ width: '100%' }}>
          <Button type="submit" content="Start" floated="right" style={{ marginRight: '2%' }} />
            {(authorId && !passage.id)
              ? <Button onClick={(event) => { handleSave(authorId, passage, event) }} content="Save" floated="right" style={{ marginRight: '2%' }} />
              : null
            }
            {(passage.id && authorId && passage.authorId === authorId)
              ? <Button onClick={(event) => {handleUpdate(passage, event)}} content="Update" floated="right" style={{ marginRight: '2%' }} />
              : null
            }
          </div>
        </Form>
      </Segment>
    )
  }
}

const mapState = state => {
  return {
    passage: state.passage,
    userId: state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData(passageId) {
      dispatch(fetchPassage(passageId))
    },
    handleSubmit(event) {
      event.preventDefault()
      const passage = {
        title: event.target.passageTitle.value,
        content: event.target.passageContent.value
      }
      dispatch(gotPassage(passage))
      history.push('/train/')
    },
    handleSave(authorId, passage, event) {
      passage.title = document.getElementById('formTitle').value
      passage.content = document.getElementById('formContent').value
      event.preventDefault()
      if (authorId && !passage.id) {
        passage.authorId = authorId
        dispatch(postPassage(passage))
      }
    },
    handleUpdate(passage, event) {
      passage.title = document.getElementById('formTitle').value
      passage.content = document.getElementById('formContent').value
      event.preventDefault()
      if (passage.id) {
        dispatch(updatePassage(passage))
      }
    }
  }
}


export default connect(mapState, mapDispatch)(PassageForm)
