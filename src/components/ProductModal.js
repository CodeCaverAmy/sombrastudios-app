import React from 'react';
import PropTypes from 'prop-types';

import {
  Modal, Button
} from 'react-bootstrap';

const ProductModal = props =>

  <Modal
    show={props.modalIsOpen}
    onClose={props.toggleModal}
  >
    <Modal.Header closeButton>
       <Modal.Title>{props.selectedProductId}</Modal.Title>
     </Modal.Header>
     <Modal.Body>
       <h4>About this {props.selectedProductId}</h4>
       <p>This will include a larger image of the product along with a description, and add to cart button.</p>
     </Modal.Body>
     <Modal.Footer>
      <Button onClick={() => props.toggleModal(0)}>Close</Button>
    </Modal.Footer>
  </Modal>

  ProductModal.propTypes = {
    modalIsOpen: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired,
    selectedProductId: PropTypes.number.isRequired
  }


export default ProductModal;
