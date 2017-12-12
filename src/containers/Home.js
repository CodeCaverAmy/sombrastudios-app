import React, { Component } from 'react';

import ProductModal from '../components/ProductModal';

import TopNav from '../components/TopNav';
import Carousel from '../components/Carousel';

import Products from '../data/products';
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

  toggleModal = productId => {
    this.getProductById(productId);
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    });
  };

  getProductById = id => {
    var keys = Object.keys(Products);
    for(var i = 0; i < keys.length; i++) {
      var product = Products[keys[i]];
      if(product.id === id) {
        this.updateProductModal(product);
      }
    }
  };

  updateProductModal = product => {
    this.setState(() => ({
      productModal: {
        productId: product.id,
        title: product.name,
        image: product.image,
        price: this.convertToCurrency(product.price),
        description: this.getDescription(product.category)
      }
    }));
  };

  convertToCurrency = number => {
    var price = number.toString();
    if (price.length <= 3) {
      return "$" + price;
    } else {
      return "$" + price.slice(0, price.length-3) + "," + price.slice(number.length-3, 3);
    }
  };

  getDescription = category => {
    var description="";

    if(category === "bracelet") {
      description = 'Small: inside diameter of 5.5 inches.\nMedium: inside diameter of 5.75 inches.\nLarge: inside diamter of 6 inches. \nMedium sizes available immediately to ship within 14 days. All other sizes may take longer.';
    } else if (category === "pendant") {
      description = '';
    } else if (category === "ring") {
      description = "Available in sizes 6 to 13 (American)";
    } else if (category === "earring") {
      description = 'Post and dangle are available.';
    }
    return description;
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
          productModal={this.state.productModal}
          toggleModal={this.toggleModal}
        />

        <CategorySelector
          filterByCategory={this.filterByCategory}
          filterCategory={this.state.filterCategory}
        />

        <ProductList
          filterCategory={this.state.filterCategory}
          modalIsOpen={this.state.modalIsOpen}
          toggleModal={this.toggleModal}
        />

        <Featured />
        <AdditionalDetails />
        <Footer />

      </div>
    );
  }
}
