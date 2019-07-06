<template>
  <section>
    <h2>Featured Products</h2>
    <div class="featureditems">
      <div class="item" v-for="product in featuredProducts" :key="product.id">
        <img :src="`/products/${product.img}`" />
        <h3>{{ product.name }}</h3>
        <button class="multi-item">View Item ></button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    featuredProducts() {
      return this.$store.getters.featuredProducts;
    }
  }
};
</script>

<style lang="scss" scoped>
.featured-items {
  display: flex;
  justify-content: center;
  align-items: center;
  .item {
    border: 1px solid #ccc;
  }
}
</style>