<template>
  <div>
    <app-cart-steps />
    <hr />
    <h1 class="center">Your Cart</h1>

    <section v-if="cartUIStatus === 'idle'">
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
    </section>
    <!--end cart state-->

    <section v-else-if="cartUIStatus === 'loading'" class="loader">
      <app-loader />
    </section>

    <section v-else-if="cartUIStatus === 'success'" class="success">
      <h2>Success!</h2>
      <p>Thank you for your purchase. You'll be receiving your items in 4 business days.</p>
      <p>Forgot something?</p>
      <button class="pay-with-stripe">
        <nuxt-link exact to="/">Back to Home</nuxt-link>
      </button>
    </section>

    <section v-else-if="cartUIStatus === 'failure'">
      <p>Oops, something went wrong. Redirecting you to your cart to try again.</p>
    </section>

    <app-sales-boxes />
  </div>
</template>

<script>
import AppCard from "~/components/AppCard.vue";
import AppLoader from "~/components/AppLoader.vue";
import AppCartSteps from "~/components/AppCartSteps.vue";
import AppSalesBoxes from "~/components/AppSalesBoxes.vue";
import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  components: {
    AppSalesBoxes,
    AppCartSteps,
    AppLoader,
    AppCard
  },
  computed: {
    ...mapState(["cart", "cartUIStatus"]),
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

.num {
  text-align: right;
}

button a {
  color: white;
  transition: 0.3s all ease;
}

//other styles
.loader {
  display: flex;
  justify-content: center;
}

.success {
  text-align: center;
}
</style>