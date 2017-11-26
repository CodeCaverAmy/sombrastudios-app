import React from 'react';
import {
  Grid,
  Carousel,
  Button
} from 'react-bootstrap';

const HeaderCarousel = () =>
<Grid>
  <Carousel indicators={false}>
  <Carousel.Item>
    <img alt="Sobmbr Studio - Perfect Wave" src="/images/header-bracelet.jpg" />
    <Carousel.Caption>
      <h1 className="display-1">More than a piece of Jewelry</h1>
      <p>Witty tagline to go underneath the main title</p>
      <Button bsSize="large" bsStyle="warning">Learn More</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img alt="Sobmbr Studio - Pendants" src="/images/header-pendants.jpg" />
    <Carousel.Caption>
      <h1 className="display-1">More than a piece of Jewelry</h1>
      <p>Witty tagline to go underneath the main title</p>
      <Button bsSize="large" bsStyle="warning">Learn More</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img alt="Sobmbr Studio - Bracelets" src="/images/header-bracelets.jpg" />
    <Carousel.Caption>
      <h1 className="display-1">More than a piece of Jewelry</h1>
      <p>Witty tagline to go underneath the main title</p>
      <Button bsSize="large" bsStyle="warning">Learn More</Button>
    </Carousel.Caption>
  </Carousel.Item>
 </Carousel>
</Grid>

export default HeaderCarousel;
