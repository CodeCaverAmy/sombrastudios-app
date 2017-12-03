import React from 'react';
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
