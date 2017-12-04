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
       <Modal.Title>{props.productModal.title}</Modal.Title>
     </Modal.Header>
     <Modal.Body>
       <h4>About this Product</h4>
       <p>${props.productModal.price}</p>
     </Modal.Body>
     <Modal.Footer>
      <Button onClick={() => props.toggleModal(0)}>Close</Button>
    </Modal.Footer>
  </Modal>

  ProductModal.propTypes = {
    modalIsOpen: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired,
  }


export default ProductModal;
