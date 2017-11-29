import React from 'react';
import PropTypes from 'prop-types';

import {
  Grid, Row
} from 'react-bootstrap';

import CategoryTile from './CategoryTile';

const CategorySelector = props =>
  <Grid id="product-selector">
    <Row className="text-center"><h1>Our Products</h1></Row>
    <Row id="product-category-button-container">
      {props.categories.map((category, index) =>
        <CategoryTile
          key={index}
          category={category.category}
          image={category.image}
          filterByCategory={props.filterByCategory}
        />
      )}
    </Row>
  </Grid>


CategorySelector.propTypes = {
  categories: PropTypes.array.isRequired,
  filterByCategory: PropTypes.func.isRequired
}

export default CategorySelector;
