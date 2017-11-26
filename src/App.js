import React, { Component } from 'react';
import {
  Grid,
  Row
} from 'react-bootstrap';

import TopNav from './components/TopNav';
import Carousel from './components/Carousel';
import ProductList from './components/ProductList';
import CategorySelector from './components/CategorySelector';

import Featured from './components/Featured';
import AdditionalDetails from './components/AdditionalDetails';
import Footer from './components/Footer';

class App extends Component {

  state = {
    products: [
      {
        name: 'Atomic Daisy Bracelet',
        price: 350,
        image: '/images/bracelets/atomic-daisy-bracelet.png',
        cagegory: 'bracelet'
      },
      {
        name: 'Atomic Daisy Pendant Cuff',
        price: 300,
        image: '/images/bracelets/atomic-daisy-pendant-cuff-bracelet.png',
        cagegory: 'bracelet'
      },
      {
        name: 'Perfect Wave On Half Round',
        price: 300,
        image: '/images/bracelets/perfect-wave-on-half-round-bracelet.png',
        cagegory: 'bracelet'
      },
      {
        name: 'Perfect Wave Triangle Bracelet',
        price: 420,
        image: '/images/bracelets/perfect-wave-triangle-bracelet.png',
        cagegory: 'bracelet'
      },
      {
        name: 'Waves Coming In Sets of 3 Half Round',
        price: 1120,
        image: '/images/bracelets/waves-coming-in-sets-of-3-half-round-bracelet.png',
        cagegory: 'bracelet'
      },
      {
        name: 'Perfect Wave 3 Triangle Bracelet',
        price: 1212,
        image: '/images/bracelets/perfect-wave-3-triangle-bracelet.png',
        cagegory: 'bracelet'
      },
      {
        name: 'Perfect Wave Charm on Leather Plain',
        price: 128,
        image: '/images/bracelets/perfect-wave-charm-on-leather-plain-bracelet.png',
        cagegory: 'bracelet'
      },
      {
        name: 'Perfect Wave Charm on Leather With Stamping',
        price: 140,
        image: '/images/bracelets/perfect-wave-charm-on-leather-with-stamping-bracelet.png',
        cagegory: 'bracelet'
      },
      {
        name: 'Perfect Wave Charm Chain Bracelet',
        price: 140,
        image: '/images/bracelets/perfect-wave-charm-chain-bracelet.png',
        cagegory: 'bracelet'
      },
      {
        name: 'Big Surf Perfect Wave Bracelet',
        price: 940,
        image: '/images/bracelets/big-surf-perfect-wave-bracelet.png',
        cagegory: 'bracelet'
      },
      {
        name: 'Perfect Wave Round Wire Cuff',
        price: 484,
        image: '/images/bracelets/perfect-wave-round-wire-cuff-bracelet.png',
        cagegory: 'bracelet'
      },
      {
        name: 'Five Mountains Bracelet',
        price: 660,
        image: '/images/bracelets/five-mountains-bracelet.png',
        cagegory: 'bracelet'
      },
      {
        name: 'Two Paths Five Mountains',
        price: 530,
        image: '/images/bracelets/two-paths-five-mountains-bracelet.png',
        cagegory: 'bracelet'
      },
      {
        name: 'Fist A Cuff',
        price: 300,
        image: '/images/bracelets/fist-a-cuff-bracelet.png',
        cagegory: 'bracelet'
      },
      {
        name: 'Double Half Round Cuff',
        price: 260,
        image: '/images/bracelets/double-half-round-cuff-bracelet.png',
        cagegory: 'bracelet'
      },
      {
        name: 'When In Rome Bracelet',
        price: 230,
        image: '/images/bracelets/when-in-rome-bracelet.png',
        cagegory: 'bracelet'
      },
      {
        name: 'Atomic Daisy Pendant',
        price: 82,
        image: '/images/pendants/atomic-daisy-pendant.png',
        cagegory: 'pendant'
      },
      {
        name: 'Perfect Wave Pendant Plain',
        price: 128,
        image: '/images/pendants/perfect-wave-plain-pendant.png',
        cagegory: 'pendant'
      },
      {
        name: 'Perfect Wave Pendant Stamped',
        price: 140,
        image: '/images/pendants/perfect-wave-stamped-pendant.png',
        cagegory: 'pendant'
      },
      {
        name: 'Big I Naja Pendant',
        price: 140,
        image: '/images/pendants/big-1-naja-pendant.png',
        cagegory: 'pendant'
      },
      {
        name: 'Power Gear Naja Pendant',
        price: 96,
        image: '/images/pendants/power-gear-naja-pendant.png',
        cagegory: 'pendant'
      },
      {
        name: 'Bull Horn Naja Small',
        price: 210,
        image: '/images/pendants/bull-horn-naja-small-pendant.png',
        cagegory: 'pendant'
      },
      {
        name: 'Bull Horn Naja Large',
        price: 260,
        image: '/images/pendants/bull-horn-naja-large-pendant.png',
        cagegory: 'pendant'
      },
      {
        name: 'When In Rome Naja Pendant',
        price: 148,
        image: '/images/pendants/when-in-rome-naja-pendant.png',
        cagegory: 'pendant'
      },
      {
        name: 'World Peace',
        price: 180,
        image: '/images/pendants/world-peace-pendant.png',
        cagegory: 'pendant'
      },
      {
        name: 'Sombra Metal Works Dogtag',
        price: 44,
        image: '/images/pendants/sombra-metal-works-dogtag-pendant.png',
        cagegory: 'pendant'
      },
      {
        name: 'Atomic Daisy Earings',
        price: 108,
        image: '/images/earrings/atomic-daisy-earrings.png',
        cagegory: 'earrings'
      },
      {
        name: 'Silver Cristo Post Earings',
        price: 180,
        image: '/images/earrings/silver-cristo-post-earrings.png',
        cagegory: 'earrings'
      },
      {
        name: 'Atomic Daisy Ring',
        price: 120,
        image: '/images/rings/atomic-daisy-ring.png',
        cagegory: 'ring'
      },
      {
        name: 'Perfect Wave Ring',
        price: 120,
        image: '/images/rings/perfect-wave-ring.png',
        cagegory: 'ring'
      },
      {
        name: 'Sugar Skull',
        price: 150,
        image: '/images/rings/sugar-skull-ring.png',
        cagegory: 'ring'
      },
      {
        name: 'Skull with American Flag',
        price: 150,
        image: '/images/rings/skull-with-american-flag-ring.png',
        cagegory: 'ring'
      },
      {
        name: 'Badass stacked',
        price: 150,
        image: '/images/rings/badass-stacked-ring.png',
        cagegory: 'ring'
      },
      {
        name: 'Badass centered',
        price: 150,
        image: '/images/rings/badass-centered-ring.png',
        cagegory: 'ring'
      }
    ],
    categories: [
      {
        category: 'All',
        image: '/images/categories/all.png'
      },
      {
        category: 'Bracelets',
        image: '/images/categories/bracelets.png'
      },
      {
        category: 'Pendants',
        image: '/images/categories/pendants.png'
      },
      {
        category: 'Earrings',
        image: '/images/categories/earrings.png'
      },
      {
        category: 'Rings',
        image: '/images/categories/rings.png'
      }
    ]
  };

  totalItems = () => this.state.products.length;

  render() {
    return (
      <div>
        <TopNav />

        <Carousel />

        <Grid id="product-selector">
            <Row className="text-center"><h1>Our Products</h1></Row>
          <CategorySelector categories={this.state.categories} />
        </Grid>

        <ProductList products={this.state.products} />
        <Featured />
        <AdditionalDetails />
        <Footer />

      </div>
    );
  }
}

export default App;
