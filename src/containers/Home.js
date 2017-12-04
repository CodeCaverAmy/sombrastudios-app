import React, { Component } from 'react';

import ProductModal from '../components/ProductModal';

import TopNav from '../components/TopNav';
import Carousel from '../components/Carousel';
import ProductList from '../components/ProductList';
import CategorySelector from '../components/CategorySelector';

import Featured from '../components/Featured';
import AdditionalDetails from '../components/AdditionalDetails';
import Footer from '../components/Footer';

export default class Home extends Component {
  state = {
    filterCategory: 'all',
    modalIsOpen: false,
    selectedProductId: 0,

    productModal: {
      id: 0,
      title: "Product Title",
      image: "/images/defaultModal.png",
      price: 0
    },

    products: [
      {
        id: 1,
        name: 'Atomic Daisy Bracelet',
        price: 350,
        image: '/images/bracelets/atomic-daisy-bracelet.png',
        category: 'bracelet'
      },
      {
        id: 2,
        name: 'Atomic Daisy Pendant Cuff',
        price: 300,
        image: '/images/bracelets/atomic-daisy-pendant-cuff-bracelet.png',
        category: 'bracelet'
      },
      {
        id: 3,
        name: 'Perfect Wave On Half Round',
        price: 300,
        image: '/images/bracelets/perfect-wave-on-half-round-bracelet.png',
        category: 'bracelet'
      },
      {
        id: 4,
        name: 'Perfect Wave Triangle Bracelet',
        price: 420,
        image: '/images/bracelets/perfect-wave-triangle-bracelet.png',
        category: 'bracelet'
      },
      {
        id: 5,
        name: 'Waves Coming In Sets of 3 Half Round',
        price: 1120,
        image: '/images/bracelets/waves-coming-in-sets-of-3-half-round-bracelet.png',
        category: 'bracelet'
      },
      {
        id: 6,
        name: 'Perfect Wave 3 Triangle Bracelet',
        price: 1212,
        image: '/images/bracelets/perfect-wave-3-triangle-bracelet.png',
        category: 'bracelet'
      },
      {
        id: 7,
        name: 'Perfect Wave Charm on Leather Plain',
        price: 128,
        image: '/images/bracelets/perfect-wave-charm-on-leather-plain-bracelet.png',
        category: 'bracelet'
      },
      {
        id: 8,
        name: 'Perfect Wave Charm on Leather With Stamping',
        price: 140,
        image: '/images/bracelets/perfect-wave-charm-on-leather-with-stamping-bracelet.png',
        category: 'bracelet'
      },
      {
        id: 9,
        name: 'Perfect Wave Charm Chain Bracelet',
        price: 140,
        image: '/images/bracelets/perfect-wave-charm-chain-bracelet.png',
        category: 'bracelet'
      },
      {
        id: 10,
        name: 'Big Surf Perfect Wave Bracelet',
        price: 940,
        image: '/images/bracelets/big-surf-perfect-wave-bracelet.png',
        category: 'bracelet'
      },
      {
        id: 11,
        name: 'Perfect Wave Round Wire Cuff',
        price: 484,
        image: '/images/bracelets/perfect-wave-round-wire-cuff-bracelet.png',
        category: 'bracelet'
      },
      {
        id: 12,
        name: 'Five Mountains Bracelet',
        price: 660,
        image: '/images/bracelets/five-mountains-bracelet.png',
        category: 'bracelet'
      },
      {
        id: 13,
        name: 'Two Paths Five Mountains',
        price: 530,
        image: '/images/bracelets/two-paths-five-mountains-bracelet.png',
        category: 'bracelet'
      },
      {
        id: 14,
        name: 'Fist A Cuff',
        price: 300,
        image: '/images/bracelets/fist-a-cuff-bracelet.png',
        category: 'bracelet'
      },
      {
        id: 15,
        name: 'Double Half Round Cuff',
        price: 260,
        image: '/images/bracelets/double-half-round-cuff-bracelet.png',
        category: 'bracelet'
      },
      {
        id: 16,
        name: 'When In Rome Bracelet',
        price: 230,
        image: '/images/bracelets/when-in-rome-bracelet.png',
        category: 'bracelet'
      },
      {
        id: 17,
        name: 'Atomic Daisy Pendant',
        price: 82,
        image: '/images/pendants/atomic-daisy-pendant.png',
        category: 'pendant'
      },
      {
        id: 18,
        name: 'Perfect Wave Pendant Plain',
        price: 128,
        image: '/images/pendants/perfect-wave-plain-pendant.png',
        category: 'pendant'
      },
      {
        id: 19,
        name: 'Perfect Wave Pendant Stamped',
        price: 140,
        image: '/images/pendants/perfect-wave-stamped-pendant.png',
        category: 'pendant'
      },
      {
        id: 20,
        name: 'Big I Naja Pendant',
        price: 140,
        image: '/images/pendants/big-1-naja-pendant.png',
        category: 'pendant'
      },
      {
        id: 21,
        name: 'Power Gear Naja Pendant',
        price: 96,
        image: '/images/pendants/power-gear-naja-pendant.png',
        category: 'pendant'
      },
      {
        id: 22,
        name: 'Bull Horn Naja Small',
        price: 210,
        image: '/images/pendants/bull-horn-naja-small-pendant.png',
        category: 'pendant'
      },
      {
        id: 23,
        name: 'Bull Horn Naja Large',
        price: 260,
        image: '/images/pendants/bull-horn-naja-large-pendant.png',
        category: 'pendant'
      },
      {
        id: 24,
        name: 'When In Rome Naja Pendant',
        price: 148,
        image: '/images/pendants/when-in-rome-naja-pendant.png',
        category: 'pendant'
      },
      {
        id: 25,
        name: 'World Peace',
        price: 180,
        image: '/images/pendants/world-peace-pendant.png',
        category: 'pendant'
      },
      {
        id: 26,
        name: 'Sombra Metal Works Dogtag',
        price: 44,
        image: '/images/pendants/sombra-metal-works-dogtag-pendant.png',
        category: 'pendant'
      },
      {
        id: 27,
        name: 'Atomic Daisy Earings',
        price: 108,
        image: '/images/earrings/atomic-daisy-earrings.png',
        category: 'earring'
      },
      {
        id: 28,
        name: 'Silver Cristo Post Earings',
        price: 180,
        image: '/images/earrings/silver-cristo-post-earrings.png',
        category: 'earring'
      },
      {
        id: 29,
        name: 'Atomic Daisy Ring',
        price: 120,
        image: '/images/rings/atomic-daisy-ring.png',
        category: 'ring'
      },
      {
        id: 30,
        name: 'Perfect Wave Ring',
        price: 120,
        image: '/images/rings/perfect-wave-ring.png',
        category: 'ring'
      },
      {
        id: 31,
        name: 'Sugar Skull',
        price: 150,
        image: '/images/rings/sugar-skull-ring.png',
        category: 'ring'
      },
      {
        id: 32,
        name: 'Skull with American Flag',
        price: 150,
        image: '/images/rings/skull-with-american-flag-ring.png',
        category: 'ring'
      },
      {
        id: 33,
        name: 'Badass stacked',
        price: 150,
        image: '/images/rings/badass-stacked-ring.png',
        category: 'ring'
      },
      {
        id: 34,
        name: 'Badass centered',
        price: 150,
        image: '/images/rings/badass-centered-ring.png',
        category: 'ring'
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
    ],
    items: [
      {
        id: 1
      }
    ]
  };

  filterByCategory = category => {
    var filterCategory =  category === "All" ? category.toLowerCase() : category.toLowerCase().slice(0, -1);
    this.setState({ filterCategory: filterCategory });
  };

  toggleModal = productId => {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen,
      selectedProductId: productId
    });
  }

  getNumberOfItemsInCart = () => this.state.items.length;


  onAddItemToCart = (index, quantity) => {
    this.setState.purchases[index].total += quantity;
    this.setState(this.state);
  };

  onRemoveItemFromCart = (index) => {
    this.state.purchases.splice(index, 1);
    this.setState(this.state);
  };

  render() {
    return (
      <div>
        <TopNav />
        <Carousel />

        <ProductModal
          modalIsOpen={this.state.modalIsOpen}
          toggleModal={this.toggleModal}
          selectedProductId={this.state.selectedProductId}
        />

        <CategorySelector
          categories={this.state.categories}
          filterByCategory={this.filterByCategory}
          filterCategory={this.state.filterCategory}
        />

        <ProductList
          products={this.state.products}
          filterCategory={this.state.filterCategory}
          modalIsOpen={this.state.modalIsOpen}
          toggleModal={this.toggleModal}
          selectedProductId={this.state.selectedProductId}
        />

        <Featured />
        <AdditionalDetails />
        <Footer />

      </div>
    );
  }
}
