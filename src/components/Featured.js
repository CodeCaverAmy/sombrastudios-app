import React from 'react';
import {
  Grid, Row, Col,
  Image
} from 'react-bootstrap';

const Featured = () =>

  <Grid id="featured">
      <Row className="flex-container">
        <Col sm={3} md={3} lg={3} className="bottom">
          <Image src="/images/featured/beauty-of-sacrifice-outlined.png" responsive className="text-center"/>
        </Col>
        <Col sm={6} md={6} lg={6} className="text-center middle">
          <h1>The Beauty of Sarifice</h1>
          <p>Large wall hanging Cristo</p>
          <p>6 inches • 14kt • Sterling Silver • $1,200</p><br />
          <p>Contact us to order by calling: +1 505.288.9446</p>
          <p>or emailing us at <a href="mailto:agregggarcia@gmail.com">agregggarcia@gmail.com</a></p>
        </Col>
        <Col sm={3} md={3} lg={3}></Col>
      </Row>
  </Grid>

export default Featured;
