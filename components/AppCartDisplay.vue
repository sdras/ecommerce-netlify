<template>
  <div>
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
            <h3 class="productname">{{ item.name }}</h3>
          </td>
          <td>
            <h4 class="price">{{ item.price | dollar }}</h4>
          </td>
          <td>
            <strong>{{ item.quantity }}</strong>
          </td>
          <td>{{ item.quantity * item.price | dollar }}</td>
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
              <strong>{{ cartTotal | dollar }}</strong>
            </p>
            <p>Free Shipping</p>
            <p class="golden">{{ cartTotal | dollar }}</p>
          </div>
        </div>
      </section>
    </section>

    <section v-else class="center">
      <p>Your cart is empty, fill it up!</p>
      <button class="pay-with-stripe">
        <nuxt-link exact to="/">Back Home</nuxt-link>
      </button>
    </section>
  </div>
</template>

<script>
import AppCard from "~/components/AppCard.vue";
import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  components: {
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

.productname {
  padding-top: 36px;
  text-align: left;
}

h1 {
  margin-top: 40px;
}

.num {
  text-align: right;
}

button a {
  color: white;
  transition: 0.3s all ease;
}
</style>