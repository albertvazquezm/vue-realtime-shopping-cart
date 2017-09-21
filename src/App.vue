<template>
  <div id="app">
    <product-grid-smart></product-grid-smart>
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
  }
}
</script>

<style lang="scss">

</style>
