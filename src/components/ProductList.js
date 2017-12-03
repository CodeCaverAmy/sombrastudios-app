import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Row
} from 'react-bootstrap';

import Product from './Product';

const ProductList = props =>
  <Grid id="product-list">
    <Row className="text-center">

      {props.filterCategory !== "all" ?
        (
          props.products
            .filter(product => product.category === props.filterCategory)
            .map((product, index) =>
            <Product key={index} name={product.name} price={product.price} image={product.image} toggleModal={props.toggleModal}/>
          )
        )
        :
        (
          props.products
            .map((product, index) =>
            <Product key={index} name={product.name} price={product.price} image={product.image} toggleModal={props.toggleModal}/>
          )
        )
      }

    </Row>
  </Grid>

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  filterCategory: PropTypes.string.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
}

export default ProductList;
