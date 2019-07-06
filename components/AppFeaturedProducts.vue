<template>
  <section>
    <h2>
      <span>Featured Products</span>
    </h2>
    <div class="featureditems">
      <div class="item" v-for="product in featuredProducts" :key="product.id">
        <img :src="`/products/${product.img}`" />
        <h3>{{ product.name }}</h3>
        <h4>$50.00</h4>
        <NuxtLink :to="`product/${product.id}`">
          <button class="multi-item">View Item ></button>
        </NuxtLink>
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
.featureditems {
  margin: 20px 0 70px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 0px;
  .item {
    border: 1px solid #eee2dc;
    box-shadow: 0 3px 10px 0px #eee;
    border-radius: 40px;
    padding: 30px 50px 40px;
    min-height: 150px;
    justify-self: center;
    align-self: center;
    text-align: center;
  }
}

h4 {
  color: #d96528;
  margin: 10px 0;
}

h2 {
  color: #d96528;
  text-align: center;
  overflow: hidden;
}
h2 span {
  display: inline-block;
  position: relative;
}
h2 span:after,
h2 span:before {
  content: " ";
  display: block;
  height: 1px;
  width: 1000px;
  background: #e6baa4;
  position: absolute;
  top: 50%;
}
h2 span:before {
  left: -1010px;
}
h2 span:after {
  right: -1010px;
}
</style>