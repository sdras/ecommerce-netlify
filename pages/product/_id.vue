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
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto velit dolores repudiandae animi quidem, eveniet quod dolor facilis dicta eligendi ullam error. Assumenda in fugiat natus enim similique nam itaque.</p>
        <p>
          <input type="number" v-model="quantity" />
        </p>
        <p>
          <button class="button purchase">Add to Cart</button>
        </p>
        <hr />
        <p>
          <strong>Available in additional colors:</strong>
          <span :style="`color: ${product.color}`">{{ product.color }}</span>
        </p>
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
      id: this.$route.params.id,
      quantity: 0,
      tempcart: []
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