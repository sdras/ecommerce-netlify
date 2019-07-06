<template>
  <div class="storegrid">
    <section class="content">
      <div v-for="item in storedata" :key="item.id" class="item">
        <img :src="`/products/${item.img}`" />
        <star-rating
          :rating="item.starrating"
          active-color="#000"
          :star-size="20"
          :show-rating="false"
        ></star-rating>
        <h3>{{ item.name }}</h3>
        <h4 class="price">${{ item.price }}</h4>
        <NuxtLink :to="`product/${item.id}`">
          <button class="multi-item">View Item ></button>
        </NuxtLink>
      </div>
    </section>
    <aside>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam libero iusto nemo laboriosam perferendis voluptas ullam officiis, quibusdam quas quam eveniet est fugit delectus corporis incidunt nam esse suscipit itaque?</p>
    </aside>
  </div>
</template>

<script>
import { mapState } from "vuex";
import StarRating from "vue-star-rating";

export default {
  computed: {
    ...mapState(["storedata"])
  },
  components: {
    StarRating
  }
};
</script>

<style lang="scss" scoped>
.content {
  height: 100%;
  width: 100%;
}

.item {
  max-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 100%;
  }
}

.price {
  color: #d96528;
  font-size: 20px;
  margin: 5px 0;
  font-weight: normal;
  font-family: "PT Serif", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
}

aside {
  height: 100%;
  width: 100%;
}
</style>