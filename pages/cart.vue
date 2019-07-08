<template>
  <div>
    <app-cart-steps />
    <hr />
    <h1 class="center">Your Cart</h1>

    <section v-if="cartCount > 0">
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
            <h4 class="price">${{ item.price }}</h4>
          </td>
          <td>
            <strong>{{ item.quantity }}</strong>
          </td>
          <td>${{ item.quantity * item.price }}</td>
        </tr>
      </table>

      <section class="payment">
        <app-card />
        <div class="total">
          <div class="caption">
            <p>
              <strong>Subtotal:</strong>
            </p>
            <p>Shipping:</p>
            <p class="golden">Total:</p>
          </div>
          <div class="num">
            <p>
              <strong>${{ cartTotal }}</strong>
            </p>
            <p>Free Shipping</p>
            <p class="golden">${{ cartTotal }}</p>
          </div>
        </div>
      </section>
    </section>

    <section v-else class="center">
      <p>Your cart is empty, fill er up!</p>
      <button>
        <nuxt-link exact to="/">Back Home</nuxt-link>
      </button>
    </section>

    <app-sales-boxes />
  </div>
</template>

<script>
import AppCard from "~/components/AppCard.vue";
import AppCartSteps from "~/components/AppCartSteps.vue";
import AppSalesBoxes from "~/components/AppSalesBoxes.vue";
import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  components: {
    AppSalesBoxes,
    AppCartSteps,
    AppCard
  },
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["cartCount", "cartTotal"])
  }
};
</script>

<style lang="scss" scoped>
.productimg {
  float: left;
  margin-right: 15px;
  width: 100px;
}

.payment,
.total {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 100px;
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

.golden {
  background: #f2eee2;
  font-weight: bold;
  padding: 10px;
}

h1 {
  margin-top: 40px;
}

.center {
  text-align: center;
}
</style>