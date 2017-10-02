<template>
  <div id="app">
    <div class="container">
      <product-grid-smart></product-grid-smart>
    </div>
    <shopping-cart-smart></shopping-cart-smart>
  </div>
</template>

<script>

import ProductGridSmart from './components/ProductGridSmart.vue';
import ShoppingCartSmart from './components/ShoppingCartSmart.vue';

export default {
  components: {
    ProductGridSmart,
    ShoppingCartSmart
  },
  created() {
    this.$store.dispatch('fetchProducts');
    this.$store.dispatch('startListeningForPrices');
  }
}
</script>

<style lang="scss">

</style>
