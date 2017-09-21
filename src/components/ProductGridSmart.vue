<template>
  <div>
    <p>Products</p>
    <ul>
      <li v-for="product in products" :key="product.name">{{product.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProductGridSmart',
  computed: {
    products() {
      return this.$store.products;
    }
  }
}
</script>

<style lang="scss">

</style>
