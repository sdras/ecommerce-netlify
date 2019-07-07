<template>
  <div>
    <h1>Your Cart</h1>
    <table>
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
      </tr>
      <tr v-for="item in cart" :key="item.id">
        <td>
          <img :src="`/products/${item.img}`" :alt="item.name" class="productimg" />
          <h3>{{ item.name }}</h3>
        </td>
        <td>
          <h4 class="price">{{ item.price }}</h4>
        </td>
        <td>
          <strong>{{ item.quantity }}</strong>
        </td>
        <td>{{ item.quantity * item.price }}</td>
      </tr>
    </table>
    <app-card />
    <app-sales-boxes />
  </div>
</template>

<script>
import AppCard from "~/components/AppCard.vue";
import AppSalesBoxes from "~/components/AppSalesBoxes.vue";
import { mapState } from "vuex";

export default {
  components: {
    AppSalesBoxes,
    AppCard
  },
  computed: {
    ...mapState(["cart"])
  }
};
</script>

<style lang="scss" scoped>
.productimg {
  float: left;
  margin-right: 15px;
  width: 140px;
}
</style>