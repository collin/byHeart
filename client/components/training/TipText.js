import React from 'react'
import { individualWordHint } from '../../utils/wordHint'

class TipText extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false,
      hintLevel: this.props.decimateLevel
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseOut = this.handleMouseOut.bind(this)
    this.hintTick = this.hintTick.bind(this)
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ hintLevel: nextProps.decimateLevel })
  }

  hintTick() {
    const hintObj = individualWordHint(this.props.hintArray, this.state.hintLevel)
    this.setState({
      hover: true,
      hintLevel: hintObj.hintLevel
    })
  }

  handleMouseEnter(e) {
    this.intervalId = setInterval(this.hintTick, 1500)
  }


  handleMouseOut(e) {
    clearInterval(this.intervalId)
    this.setState({
      hover: false,
      hintLevel: this.props.decimateLevel
    })
  }


  render() {
    return (
      <span onMouseEnter={this.handleMouseEnter} onMouseOut={this.handleMouseOut}>
        {this.props.hintArray[this.state.hintLevel]}  </span>
    )
  }
}

export default TipText
