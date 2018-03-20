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
      <Button floated="right" style={{ marginLeft: '0.5em' }}>Start Over</Button>
      <Button floated="right" style={{ marginLeft: '0.5em' }}>Make Harder</Button>
    </Segment>
  )
}

export default Finished
