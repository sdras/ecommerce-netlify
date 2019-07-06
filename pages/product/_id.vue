<template>
  <div>
    <section class="item-contain">
      <section class="img">
        <img :src="`/products/${product.img}`" />
      </section>
      <section class="product-info">
        <h1>{{ product.name }}</h1>
        <star-rating
          :rating="product.starrating"
          active-color="#000"
          :star-size="15"
          :show-rating="false"
          style="margin: 5px 0"
        ></star-rating>
        <h4 class="price">${{ product.price }}</h4>
        <p>{{ product.description }}</p>
        <hr />Available in additional colors:
        <span class="color">{{ product.color }}</span>
        <hr />
      </section>
    </section>
    <app-sales-boxes />
    <app-featured-products />
  </div>
</template>

<script>
import { mapState } from "vuex";
import StarRating from "vue-star-rating";
import AppSalesBoxes from "~/components/AppSalesBoxes.vue";
import AppFeaturedProducts from "~/components/AppFeaturedProducts.vue";

export default {
  components: {
    StarRating,
    AppSalesBoxes,
    AppFeaturedProducts
  },
  data() {
    return {
      id: this.$route.params.id
    };
  },
  computed: {
    ...mapState(["storedata"]),
    product() {
      return this.storedata.find(el => el.id === this.id);
    }
  }
};
</script>

<style lang="scss" scoped>
.item-contain {
  margin-left: 8%;
  width: 80%;
  display: grid;
  justify-content: space-around;
  grid-template-columns: 1fr 2fr;
}
</style>