import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Row, Col,
  Modal, Button, Image
} from 'react-bootstrap';

export default class ProductModal extends Component {

  propTypes: {
    toggleModal: PropTypes.func.isRequired
  };

  render() {
    return (
      <Modal
        show={this.props.modalIsOpen}
        onClose={this.props.toggleModal}
        bsSize='lg'
      >
        <Modal.Header closeButton>
         </Modal.Header>
         <Modal.Body>
          <Row>
            <Col xs={12} md={6} lg={6}>
              <Image src={this.props.productModal.image} alt={this.props.productModal.name} />
            </Col>
            <Col xs={12} md={6} lg={6}>
              <Modal.Title>{this.props.productModal.title}</Modal.Title><br />
              <p>
                {this.props.productModal.description.split('\n').map((item, key) => {
                  return <span key={key}>{item}<br/></span>
                })}
              </p>
              <p>{this.props.productModal.price}</p>
            </Col>
          </Row>
         </Modal.Body>
         <Modal.Footer>
          <Button onClick={() => this.props.toggleModal()}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
