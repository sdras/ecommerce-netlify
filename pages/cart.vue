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
          <h3 style="padding-top: 36px; text-align: left">{{ item.name }}</h3>
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

    <section class="payment">
      <app-card />
      <div class="total">
        <h3>Cart Totals</h3>
        <div class="caption">
          <p>Subtotal:</p>
          <p>Shipping:</p>
          <p>Total</p>
        </div>
        <div class="num">
          <p>Subtotal: num</p>
          <p>Shipping: free shipping</p>
          <p class="golden">Total: num</p>
        </div>
      </div>
    </section>

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
  width: 100px;
}

.payment {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 30px;
}

table {
  width: 100%;
  margin-top: 20px;
}

tr {
  text-align: center;
}

th {
  padding: 10px 0;
}

td,
th {
  border-bottom: 1px solid #ccc;
}
</style>