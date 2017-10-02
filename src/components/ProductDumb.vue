<template>
  <div class="product">
    <p class="name">{{product.name}}</p>
    <p class="price">{{product.price}}&euro;</p>
    <div class="clearfix"></div>
    <button v-if="!product.isInCart" @click="onClickOnAddProductToCart(product.id)">Add</button>
    <button v-if="product.isInCart" @click="onClickOnRemoveProductFromCart(product.id)">X</button>
    <div class="clearfix"></div>
  </div>
</template>

<script>
export default {
  props: ['product'],
  methods: {
    onClickOnAddProductToCart(productId) {
      this.$emit('onAddToCart', productId);
    },
    onClickOnRemoveProductFromCart(productId) {
      this.$emit('onRemoveFromCart', productId);
    }
  }
}
</script>

<style scoped lang="scss">
  .product {
    padding: 10px;
    background: #eee;
    .clearfix {
      float: none;
    }
    .price {
      float: right;
    }
    .name {
      font-weight: bold;
      float: left;
    }
    button {
      background: #333;
      border: 0;
      color: #fff;
      border-radius: 2px;
      float: right;
    }
  }
</style>
