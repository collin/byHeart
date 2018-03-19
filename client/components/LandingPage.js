import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Header, Grid, Segment, Card, CardContent, CardGroup } from 'semantic-ui-react'


const card1 = [
  'Qurious how it works? For a quick start press Try An Example and train memorizing a sonet.',
  'To start memorizing your own text press Get Started. On the next page enter the title and text of your passage and press Start.'
]
const card2 = ['Chose full text or line-by-line view']
export const LandingPage = () => {

  return (
    <Segment textAlign="center" style={{ minHeight: 700 }} vertical>
      <Grid>
        <Grid.Row>
          <Container text id="landing">
            <Header
              as="h2"
              content="It doesn't have to be hard to learn your lines"
              style={{
                fontSize: '1.7em',
                fontWeight: 'normal',
                marginTop: '2em',
              }}
            />
            <Header
              as="h1"
              content="By Heart"
              style={{
                fontSize: '4em',
                fontWeight: 'normal',
                marginTop: '0.5em',
                marginBottom: '0.5em',
              }}
            />
            <Button.Group style={{ marginBottom: '1em' }}>
              <Button basic color="purple" as={Link} to="/newpassage">Get Started</Button>
              <Button.Or />
              <Button basic color="purple" as={Link} to="/train">Try An Example</Button>
            </Button.Group>
          </Container>
        </Grid.Row>

        <Grid.Row style={{ padding: '0em', marginTop: '3em' }} vertical>
          <Grid columns={3}>
            <Grid.Column width={4}>
              <Card color="purple" style={{ minHeight: 150, fontSize: '1.3em' }}>
                <Card.Content header="Step 1" style={{fontSize: '0.7em'}} />
                <Card.Content description={card1} />
              </Card>
            </Grid.Column>
            <Grid.Column width={4}>
              <Card color="purple" style={{ minHeight: 150, fontSize: '1.3em' }}>
                <Card.Content header="Step 2" style={{fontSize: '0.7em'}} />
                <Card.Content description={card1} />
              </Card>
            </Grid.Column>
            <Grid.Column width={4}>
              <Card color="purple" style={{ minHeight: 150, fontSize: '1.3em' }}>
                <Card.Content header="Step 3" style={{fontSize: '0.7em'}} />
                <Card.Content description={card1} />
              </Card>
            </Grid.Column>
          </Grid>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default LandingPage
