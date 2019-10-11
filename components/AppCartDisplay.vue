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
            <img :src="`/products/${item.img}`" :alt="item.name" class="product-img" />
            <h3 class="product-name">{{ item.name }}</h3>
            <h5 v-if="item.size" class="product-size">Size: {{ item.size }}</h5>
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
.product-img {
  float: left;
  margin-right: 15px;
  width: 100px;
}

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

.product-name,
.product-size {
  text-align: left;
}

.product-name {
  padding-top: 36px;
}

.product-size {
  font-weight: 100;
}

.num {
  text-align: right;
}

button a {
  color: white;
  transition: 0.3s all ease;
}

@media screen and (min-width: 700px) {
  .payment {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 100px;
  }

  .total {
    width: 90%;
  }
}

@media screen and (max-width: 699px) {
  .payment {
    width: 94%;
    margin-left: 2%;
  }
}
</style>