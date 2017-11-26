import React from 'react';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';

const AdditionalDetails = () =>
    <Grid id="additional-details">
      <Row>
        <Col xs={12} md={4} className="text-center">
          <img src="/images/categories/all.png" alt="Silver" width="50px" height="67px" />
          <h5>0.925 Sterling Silver</h5>
          <p>One line description here</p>
        </Col>
        <Col xs={12} md={4} className="text-center">
          <img src="/images/icon-shipping.png" alt="Shipping" />
          <h5>Free Shipping</h5>
          <p>More details about this here</p>
        </Col>
        <Col xs={12} md={4} className="text-center">
          <img src="/images/icon-satisfaction.png" alt="Satisfaction Guaranteed" />
          <h5>Satisfaction Guaranteed</h5>
          <p>Tell visitor a litte more here</p>
        </Col>
      </Row>
    </Grid>

export default AdditionalDetails
