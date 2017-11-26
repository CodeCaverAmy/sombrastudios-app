import React from 'react';
import {
  Grid, Row, Col, Button
} from 'react-bootstrap';

const Featured = () =>

  <Grid id="featured">
      <Row>
        <Col sm={12} md={12} lg={12} className="text-center">
          <h1>Featured Pieces</h1>
          <p>Write something for this to draw you user in.</p><br />
          <p><Button>Show Now</Button></p>
        </Col>
      </Row>
  </Grid>

export default Featured;
