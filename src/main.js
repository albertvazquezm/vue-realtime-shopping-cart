import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import {storeFactory} from './state/store';

Vue.use(Vuex);

new Vue({
  el: '#app',
  store: storeFactory(),
  render: h => h(App)
});
