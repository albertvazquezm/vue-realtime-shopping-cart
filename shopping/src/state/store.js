import Vuex from 'vuex';
import * as axios from 'axios';
import {Product} from '../entities/Product';
import * as socketFactory from 'socket.io-client';

const socket = socketFactory('http://localhost:3000');

export const storeFactory = () => new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    setProducts (state, products) {
      state.products = products;
    },
    addProductToCart(state, productId) {
      const product = state.products.find(p => p.id === productId);
      product.isInCart = true;
    },
    removeProductFromCart(state, productId) {
      const product = state.products.find(p => p.id === productId);
      product.isInCart = false;
    },
    updateProductPrice(state, {productId, price}) {
      const product = state.products.find(p => p.id === productId);
      product ? product.price = price : null;
    }
  },
  actions: {
    fetchProducts({commit}) {
      axios.get('http://localhost:3000/products').then(response => commit('setProducts', response.data.products.map(p => new Product(p))));
    },
    addProductToCart({commit}, productId) {
      commit('addProductToCart', productId);
    },
    removeProductFromCart({commit}, productId) {
      commit('removeProductFromCart', productId);
    },
    updateProductPrice({commit}, productId) {
      socket.on('price', ({productId, price}) => {
        commit('updateProductPrice', {productId, price});
      });
    }
  }
});