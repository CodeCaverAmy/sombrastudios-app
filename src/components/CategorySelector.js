import React from 'react';
import PropTypes from 'prop-types';

import {
  Row
} from 'react-bootstrap';

import CategoryTile from './CategoryTile';

const CategorySelector = props => (
  <Row id="product-category-button-container">
    {props.categories.map((category, index) =>
      <CategoryTile key={index} category={category.category} image={category.image} />
    )}
  </Row>
);

CategorySelector.propTypes = {
  categories: PropTypes.array.isRequired
}

export default CategorySelector;
