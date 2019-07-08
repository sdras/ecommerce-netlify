<template>
  <div class="storegrid">
    <section class="content">
      <div v-for="item in data" :key="item.id" class="item">
        <div class="img-contain">
          <NuxtLink :to="`product/${item.id}`">
            <img :src="`/products/${item.img}`" />
          </NuxtLink>
        </div>
        <star-rating
          :rating="item.starrating"
          active-color="#000"
          :star-size="15"
          :show-rating="false"
          style="margin: 5px 0"
        ></star-rating>
        <h3>{{ item.name }}</h3>
        <h4 class="price">{{ item.price | dollar }}</h4>
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
import StarRating from "vue-star-rating";

export default {
  props: {
    data: {
      required: true
    }
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

.img-contain {
  max-height: 200px;
  display: flex;
  align-content: center;
  align-items: center;
  img {
    width: 100%;
  }
}

.item {
  max-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px 0;
}

aside {
  height: 100%;
  width: 100%;
}
</style>