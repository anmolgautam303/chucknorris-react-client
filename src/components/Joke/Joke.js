import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';

const Joke = (props) => (
  <Grid fluid style={{fontFamily: 'Heebo, sans-serif'}}>
    <Row>
      <Col><img src={props.joke.icon_url}/></Col>
      <Col xs>"{props.joke.value}"</Col>
    </Row>
    <Row>
    </Row>
  </Grid>
)

export default Joke