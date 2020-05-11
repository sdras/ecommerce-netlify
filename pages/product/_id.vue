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
          :star-size="15"
          :show-rating="false"
          active-color="#000"
          style="margin: 5px 0"
        ></star-rating>
        <h4 class="price">{{ product.price | dollar }}</h4>
        <p>{{ product.description }}</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto velit dolores repudiandae animi quidem, eveniet quod dolor facilis dicta eligendi ullam error. Assumenda in fugiat natus enim similique nam itaque.</p>
        <p class="quantity">
          <button class="update-num" @click="quantity > 0 ? quantity-- : quantity = 0">-</button>
          <input type="text" pattern="\d+" v-model="quantity" required />
          <button class="update-num" @click="quantity++">+</button>
        </p>
        <p>
          Available in additional colors:
          <strong>
            <span :style="`color: ${product.color}`">{{ product.color }}</span>
          </strong>
        </p>
        <p>
          <button class="button purchase" @click="cartAdd">Add to Cart</button>
        </p>
      </section>
    </section>
    <hr />
    <div class="review">
      <h2>Reviews</h2>
      <!-- maybe an image of a person? -->
      <star-rating
        :rating="product.starrating"
        active-color="#000"
        :star-size="15"
        :show-rating="false"
        style="margin: 5px 0"
      ></star-rating>
      <p>{{ product.review }}</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iusto placeat consequatur voluptas sit mollitia ratione autem, atque sequi odio laborum, recusandae quia distinctio voluptatibus sint, quae aliquid possimus exercitationem.</p>
    </div>
    <app-featured-products />
  </div>
</template>

<script>
import { mapState } from "vuex";
import StarRating from "vue-star-rating/src/star-rating.vue";
import AppFeaturedProducts from "~/components/AppFeaturedProducts.vue";

export default {
  components: {
    StarRating,
    AppFeaturedProducts
  },
  data() {
    return {
      id: this.$route.params.id,
      quantity: 1,
      tempcart: [] // this object should be the same as the json store object, with an additional param, quantity
    };
  },
  computed: {
    ...mapState(["storedata"]),
    product() {
      return this.storedata.find(el => el.id === this.id);
    }
  },
  methods: {
    cartAdd() {
      let item = this.product;
      item.quantity = parseInt(this.quantity);
      this.tempcart.push(item);
      this.$store.commit("addToCart", {...item});
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

input {
  width: 60px;
  font-size: 25px;
  margin: 0 10px;
  padding: 5px 10px;
}

.update-num {
  background: black;
  border-color: black;
  color: white;
  font-size: 20px;
  width: 45px;
}

.quantity {
  display: flex;
}

@media screen and (max-width: 650px) {
  .img img {
    width: 100%;
  }

  .item-contain {
    margin-left: 0 !important;
    width: 95% !important;
  }

  .review {
    width: 90%;
    margin-left: 4%;
  }
}
</style>
