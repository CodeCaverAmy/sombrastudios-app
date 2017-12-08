import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Row
} from 'react-bootstrap';

import Product from './Product';
import Products from '../data/products';


export default class ProductList extends Component {

  render() {
    return (
      <Grid id="product-list">
      <Row className="text-center">
        {this.props.filterCategory !== "all" ?
        (
          Products
          .filter(product => product.category === this.props.filterCategory)
          .map((product, index) =>
            <Product
              key={index}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              toggleModal={this.props.toggleModal}
            />
          )
        )
        :
        (
          Products
          .map((product, index) =>
            <Product
              key={index}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              toggleModal={this.props.toggleModal}
            />
          )
        )
      }
      </Row>
      </Grid>
    );
  }
}

ProductList.propTypes = {
  filterCategory: PropTypes.string.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired
}
