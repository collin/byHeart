import React from 'react'
import { Button, Icon, Label, Segment } from 'semantic-ui-react'
import timer from '../../utils/timer'

const Finished = (props) => {

  let time = timer(props.time)

  return (
    <Segment clearing>
      <Label basic color="purple" size="big">
        <Icon name="time" /> {time}
      </Label>
      <Button onClick={props.startOver} floated="right" style={{ marginLeft: '0.5em' }}>Start Over</Button>
      <Button onClick={props.startHarder} floated="right" style={{ marginLeft: '0.5em' }}>Make Harder</Button>
      <Button onClick={props.startEasier} floated="right" style={{ marginLeft: '0.5em' }}>Make Easier</Button>
    </Segment>
  )
}

export default Finished
