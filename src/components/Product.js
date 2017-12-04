import React from 'react';
import PropTypes from 'prop-types';
import {
  Col, Row,
  Image,
  Button, Glyphicon
} from 'react-bootstrap';


const Product = props =>
  <Col xs={6} md={4} lg={4} className="product-tile">
    <Row className="image-container">
      <div className="overlay" onClick={() => props.toggleModal(props.id)}>
        <Image src={props.image} alt={props.name} className="image" />
        <Button
          className="btn-quickview"
          bsStyle="warning"
          onClick={() => props.toggleModal(props.id)}
        >
          <Glyphicon glyph="zoom-in" /><span> Quick View</span>
        </Button>
      </div>
    </Row>

    <Row>
      <Col xs={12} md={12} lg={12} className="product-title">{props.name}</Col>
    </Row>

    <Row>
      <Col xs={6} md={6} lg={6} className="text-left"><p>${props.price}</p></Col>
    </Row>


  </Col>

  Product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    toggleModal: PropTypes.func.isRequired
  }

export default Product;
