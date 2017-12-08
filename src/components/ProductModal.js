import React from 'react';
import PropTypes from 'prop-types';

import {
  Row, Col,
  Modal, Button, Image
} from 'react-bootstrap';

const ProductModal = props =>

  <Modal
    show={props.modalIsOpen}
    onClose={props.toggleModal}
    bsSize='lg'
  >
    <Modal.Header closeButton>
     </Modal.Header>
     <Modal.Body>
      <Row>
        <Col xs={12} md={6} lg={6}>
          <Image src={props.productModal.image} alt={props.productModal.name} />
        </Col>
        <Col xs={12} md={6} lg={6}>
          <Modal.Title>{props.productModal.title}</Modal.Title><br />
          <p>
            {props.productModal.description.split('\n').map((item, key) => {
              return <span key={key}>{item}<br/></span>
            })}
          </p>
          <p>{props.productModal.price}</p>
        </Col>
      </Row>
     </Modal.Body>
     <Modal.Footer>
      <Button onClick={() => props.toggleModal()}>Close</Button>
    </Modal.Footer>
  </Modal>

  ProductModal.propTypes = {
    modalIsOpen: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired
  }


export default ProductModal;
