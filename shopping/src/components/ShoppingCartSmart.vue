<template>
  <div class="shoppingcart">
    <div class="container">
      <h2>Shopping cart ({{products.length}})</h2>
      <product-grid-wrapper-dumb>
        <li v-for="product in products" :key="product.name">
          <product-dumb 
            :product="product" 
            @onRemoveFromCart="onClickOnRemoveProductFromCart"
          ></product-dumb>
        </li>
      </product-grid-wrapper-dumb>
    </div>
  </div>
</template>

<script>
import ProductDumb from './ProductDumb.vue';
import ProductGridWrapperDumb from './ProductGridWrapperDumb.vue';

export default {
  computed: {
    products() {
      return this.$store.state.products.filter(p => p.isInCart);
    }
  },
  methods: {
    onClickOnRemoveProductFromCart(productId) {
      return this.$store.dispatch('removeProductFromCart', productId);
    }
  },
  components: {
    ProductDumb,
    ProductGridWrapperDumb
  }
}
</script>

<style scoped lang="scss">
  .shoppingcart {
    position: fixed;
    padding: 10px 0;
    bottom: 0;
    background: #ED1C40;
    left: 0;
    right: 0;
  }
</style>
