import Vuex from 'vuex';

export const storeFactory = () => new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    replaceProducts (state, products) {
      state.products = products;
    }
  },
  actions: {
    replaceProducts({commit}) {
      commit('replaceProducts');
    }
  }
});