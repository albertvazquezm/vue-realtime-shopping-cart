<template>
  <ul>
    <slot></slot>
  </ul>
</template>

<script>
export default {
  
}
</script>

<style scoped lang="scss">
  ul {
    display: flex;
    margin: 0 -20px;
    padding: 0;
    flex-wrap: wrap;
    justify-content: flex-start;
    li {
      min-width: 150px;
      max-width: 200px;
      flex: 1;
      list-style-type: none;
      margin: 20px;
    }
  }
</style>
