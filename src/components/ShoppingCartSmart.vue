<template>
  <div class="shoppingcart">
    <div class="container">
      <h2>Shopping cart ({{totalProductsPrice}}&euro;)</h2>
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
    },
    totalProductsPrice() {
      return this.products.map(p => p.price).reduce((acc, val) => acc + (!isNaN(val) ? val : 0), 0);
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
    background: #FFC800;
    left: 0;
    right: 0;
  }
</style>
