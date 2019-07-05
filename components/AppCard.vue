<template>
  <div id="app">
    <div v-if="cartUIStatus === 'idle'" class="payment">
      <h3>Please enter your payment details:</h3>
      <label for="email">Email</label>
      <input id="email" type="email" v-model="stripeEmail" placeholder="name@example.com" />
      <label for="card">Credit Card</label>
      <p>
        Test using this credit card:
        <span class="cc-number">4242 4242 4242 4242</span>, and enter any 5 digits for the zip code
      </p>
      <card
        class="stripe-card"
        id="card"
        :class="{ complete }"
        stripe="pk_test_5ThYi0UvX3xwoNdgxxxTxxrG"
        :options="stripeOptions"
        @change="complete = $event.complete"
      />
      <button
        class="pay-with-stripe"
        @click="pay"
        :disabled="!complete || !stripeEmail"
      >Pay with credit card</button>
    </div>

    <div v-else class="statussubmit">
      <div v-if="cartUIStatus === 'failure'">
        <h3>Oh No!</h3>
        <p>Something went wrong!</p>
        <button @click="clearCart">Please try again</button>
      </div>

      <div v-else-if="cartUIStatus === 'loading'" class="loadcontain">
        <h4>Please hold, we're filling up your cart with goodies</h4>
        <p>Placeholder loader</p>
      </div>
    </div>
  </div>
</template>
 
<script>
import { Card, createToken } from "vue-stripe-elements-plus";

import { mapState } from "vuex";

export default {
  components: { Card },
  computed: {
    ...mapState(["cartUIStatus"])
  },
  data() {
    return {
      complete: false,
      stripeOptions: {
        // you can configure that cc element. I liked the default, but you can
        // see https://stripe.com/docs/stripe.js#element-options for details
      },
      stripeEmail: ""
    };
  },
  methods: {
    pay() {
      createToken().then(data => {
        const stripeData = { data, stripeEmail: this.stripeEmail };
        this.$store.dispatch("postStripeFunction", stripeData);
      });
    },
    clearCart() {
      this.complete = false;
      this.$store.commit("clearCartCount");
    }
  }
};
</script> 
 
<style>
.stripe-card {
  width: 300px;
  border: 1px solid grey;
}
.stripe-card.complete {
  border-color: green;
}
</style> 