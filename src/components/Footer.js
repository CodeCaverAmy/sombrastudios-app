import React from 'react';
import {
  Grid, Row, Col,
  Glyphicon
} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

const Footer = () =>
  <Grid id="footer">
    <Row className="social-media">
      <Col xs={12} md={12} lg={12} className="text-center">
      <span>Follow us on </span>
      <a href="https://twitter.com/_sombraloco_/" target='_blank' rel="noopener noreferrer">
        <FontAwesome
          name='twitter'
        />
      </a>
      <a href="https://www.instagram.com/sombralocostudio/" target='_blank' rel="noopener noreferrer">
        <FontAwesome name='instagram'/>
      </a>
      </Col>
    </Row>

    <Row className="contact-info">
      <Col xs={12} md={4} lg={4} className="text-center">
        <h3>About Us</h3>
        <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: 60+'px'}} />
        <p>Sombra means "shade" ...</p>
        <p>so made by a shady characther</p>
      </Col>

      <Col xs={12} md={4} lg={4} className="text-center">
        <h3>Customer Service</h3>
        <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: 60+'px'}} />
        <p>Shipping & Returns</p>
        <p>Product Warranty</p>
      </Col>

      <Col xs={12} md={4} lg={4} className="text-center">
      <h3>Contact Us</h3>
        <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: 60+'px'}} />
        <p><Glyphicon glyph="glyphicon glyphicon-phone-alt" /> +1 505.288.9446</p>
        <p><Glyphicon glyph="glyphicon glyphicon-envelope" /> agregggarcia@gmail.com</p>
        <p><Glyphicon glyph="glyphicon glyphicon-map-marker" /> Albequerque • NM, US</p>
      </Col>
    </Row>

    <Row className="text-center copyright">
      <p>Sombra Studios © 2018</p>
    </Row>
  </Grid>

export default Footer;
