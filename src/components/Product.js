import React from 'react';
import PropTypes from 'prop-types';
import {
  Col, Row,
  Thumbnail,
  Button
} from 'react-bootstrap';

const Product = props =>
  <Col xs={6} md={4} lg={4} className="product-tile">
    <Thumbnail src={props.image} alt={props.name}>
      <Row>
        <Col xs={12} md={12} lg={12} className="product-title">{props.name}</Col>
      </Row>
      <Row>
        <Col xs={6} md={6} lg={6} className="text-left"><p>${props.price}</p></Col>
        <Col xs={6} md={6} lg={6} className="text-right"><Button>Add to Cart</Button></Col>
      </Row>
    </Thumbnail>
  </Col>;

  Product.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
  }

export default Product;
