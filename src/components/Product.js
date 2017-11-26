import React from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Thumbnail
} from 'react-bootstrap';

const Product = props =>
  <Col xs={12} md={4} lg={4} className="product-tile">
    <Thumbnail src={props.image} alt={props.name}>
      <h3>{props.name}</h3>
      <p>${props.price}</p>
    </Thumbnail>
  </Col>;

  Product.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
  }

export default Product;
