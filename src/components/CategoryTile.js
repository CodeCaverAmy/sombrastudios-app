import React from 'react';
import PropTypes from 'prop-types';

const CategoryTile = props =>

  <div className="category">
    <img src={props.image} alt={props.category} />
    <div className="title">{props.category}</div>
  </div>;

  CategoryTile.propTypes = {
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }

export default CategoryTile;
