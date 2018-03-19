import React, { Component } from 'react'
import { connect } from 'react-redux'
import './LineByLineTrainer.css'
import { decimateString } from '../../utils/decimate'
import { breakIntoLines } from '../../utils/text-to-lines'
import Card from './Card'
import StartButton from './StartButton'
import Finished from './Finished'

const TRAINING = 'TRAINING'
const FINISHED = 'FINISHED'
const WAITING_TO_BEGIN = 'WAITING_TO_BEGIN'

class LineByLineTrainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      decimationLevel: 0,
      currentLineIndex: 0,
      status: WAITING_TO_BEGIN,
      timeStarted: null,
      timeFinished: null,
    }
    this.startTraining = this.startTraining.bind(this)
    this.nextCard = this.nextCard.bind(this)
  }

  startTraining() {
    this.setState({
      ...this.state,
      currentLineIndex: 0,
      status: TRAINING,
      timeStarted: Date.now()
    })
  }

  nextCard(event) {
    console.log('event: ', event)
    if (this.state.status === TRAINING) {
      const currentLineIndex = this.state.currentLineIndex
      const numOfLines = breakIntoLines(this.props.passage.length)
      this.setState({
        ...this.state,
        currentLineIndex: (currentLineIndex + 1) % numOfLines
      })
    }
  }

  render() {
    const { decimationLevel, currentLineIndex, status } = this.state
    const { passage } = this.props

    const lines = breakIntoLines(passage.content)

    const lineAbove = (currentLineIndex > 0) ? decimateString(lines[currentLineIndex - 1], decimationLevel) : ''
    const currentLine = decimateString(lines[currentLineIndex], decimationLevel)
    const lineBelow = (currentLineIndex < lines.length - 1) ? decimateString(lines[currentLineIndex + 1], decimationLevel) : ''

    switch (status) {
      case WAITING_TO_BEGIN:
        return (
          <StartButton click={this.startTraining} />
        )
      case TRAINING:
        return (
          <Card
            lineAbove={lineAbove}
            currentLine={currentLine}
            lineBelow={lineBelow}
            next={this.nextCard}
          />
        )
      case FINISHED:
        return <Finished />
      default:
        return <div>Something went wrong</div>
    }
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    passage: state.passage
  }
}

export default connect(mapState)(LineByLineTrainer)
