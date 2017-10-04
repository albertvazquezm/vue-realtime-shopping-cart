<template>
  <div :class="['product', priceChangeClassName]">
    <p class="name">{{product.name}}</p>
    <p class="price">{{product.price}}&euro;</p>
    <div class="clearfix"></div>
    <button v-if="!product.isInCart" @click="onClickOnAddProductToCart(product.id)">Add</button>
    <button v-if="product.isInCart" @click="onClickOnRemoveProductFromCart(product.id)">X</button>
    <div class="clearfix"></div>
  </div>
</template>

<script>

const COLOR_ANIMATION_DURATION_MS = 600;

export default {
  props: ['product'],
  data() {
    return {
      hasRaised: false,
      hasFallen: false
    };
  },
  computed: {
    priceChangeClassName() {
      if(this.hasRaised) {
        return 'product--price-raised';
      } else if(this.hasFallen) {
        return 'product--price-fallen';
      }
    }
  },
  methods: {
    onClickOnAddProductToCart(productId) {
      this.$emit('onAddToCart', productId);
    },
    onClickOnRemoveProductFromCart(productId) {
      this.$emit('onRemoveFromCart', productId);
    },
  },
  watch: {
    'product.price'(newPrice, oldPrice) {
      if(newPrice > oldPrice) {
        this.hasRaised = true;
        setTimeout(() => this.hasRaised = false, COLOR_ANIMATION_DURATION_MS);
      }
      if(newPrice < oldPrice) {
        this.hasFallen = true;
        setTimeout(() => this.hasFallen = false, COLOR_ANIMATION_DURATION_MS);
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .product {
    padding: 10px;
    background-color: #eee;
    transition: background-color .3s linear;
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

    &.product--price-raised {
      background-color: #CAE8A2;
    }
    &.product--price-fallen {
      background-color: #FF8080;
    }
  }
</style>
