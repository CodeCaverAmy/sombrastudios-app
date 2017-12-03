import React from 'react';
import PropTypes from 'prop-types';

import {
  Grid, Row, Col,
  Glyphicon,
  Modal, Button
} from 'react-bootstrap';

const ProductModal = props =>

  <Modal show={props.modalIsOpen} onClose={props.toggleModal}>
    <Modal.Header closeButton>
       <Modal.Title>Product Title</Modal.Title>
     </Modal.Header>
     <Modal.Body>
       <h4>About this Product</h4>
       <p>This will include a larger image of the product along with a description, and add to cart button.</p>
     </Modal.Body>
     <Modal.Footer>
      <Button onClick={props.toggleModal}>Close</Button>
    </Modal.Footer>
  </Modal>


  Modal.propTypes = {
    modalIsOpen: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired,
  }


export default ProductModal;
