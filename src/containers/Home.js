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
      productId: 0,
      title: "Product Title",
      image: "/images/defaultModal.png",
      description: "All of our jewelry is handcrafeted by Andres Greggario Garcia",
      price: 0
    },

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
          productModal={this.state.productModal}
        />

        <CategorySelector
          filterByCategory={this.filterByCategory}
          filterCategory={this.state.filterCategory}
        />

        <ProductList
          filterCategory={this.state.filterCategory}
          modalIsOpen={this.state.modalIsOpen}
        />

        <Featured />
        <AdditionalDetails />
        <Footer />

      </div>
    );
  }
}
