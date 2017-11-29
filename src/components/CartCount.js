import React from 'react';
import PropTypes from 'prop-types';
import {
  Glyphicon
} from 'react-bootstrap';

const CartCount = props => (
  <div>
    <Glyphicon bsSize="lage" glyph="glyphicon glyphicon-shopping-cart" />
    <span className="count">42</span>
  </div>
);


export default CartCount;
