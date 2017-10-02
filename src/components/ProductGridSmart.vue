<template>
  <div>
    <h1>Product list</h1>
    <product-grid-wrapper-dumb>
      <li v-for="product in products" :key="product.name">
        <product-dumb 
          :product="product" 
          @onAddToCart="onClickOnAddProductToCart" 
          @onRemoveFromCart="onClickOnRemoveProductFromCart"
        ></product-dumb>
      </li>
    </product-grid-wrapper-dumb>
  </div>
</template>

<script>
import ProductDumb from './ProductDumb.vue';
import ProductGridWrapperDumb from './ProductGridWrapperDumb.vue';

export default {
  computed: {
    products() {
      return this.$store.state.products.filter(p => !p.isInCart);
    }
  },
  methods: {
    onClickOnAddProductToCart(productId) {
      return this.$store.dispatch('addProductToCart', productId);
    },
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
  .products {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    li {
      list-style-type: none;
    }
  }
</style>
