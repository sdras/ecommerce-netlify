<template>
  <div id="app">
    <div v-if="cartUIStatus === 'idle'" class="payment">
      <h3>Please enter your payment details:</h3>
      <label for="email">Email</label>
      <br />
      <input id="email" type="email" v-model="stripeEmail" placeholder="name@example.com" />
      <br />
      <label for="card">Credit Card</label>
      <br />
      <small>
        Test using these Stripe test credit card numbers with any CVC, postal code, and expiration date in the future:
        <ul>
          <li>
            <span class="cc-number">4242 4242 4242 4242</span>
          </li>
          <li>
            <span class="cc-number">4000 0027 6000 3184</span> (requires authentication, will trigger a pop-up)
          </li>
          <li>
            <span class="cc-number">4000 0000 0000 9995</span> (will decline with a decline code of insufficient funds)
          </li>
        </ul>
      </small>
      <card
        class="stripe-card"
        id="card"
        :class="{ complete }"
        stripe="pk_test_8ssZgwB2PiH0ajJksD2gVbsG00u7Y3IDPv"
        :options="stripeOptions"
        @change="complete = $event.complete"
      />
      <small class="card-error">{{error}}</small>
      <button
        class="pay-with-stripe button"
        @click="pay"
        :disabled="!complete || !stripeEmail || loading"
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

      <div v-else-if="cartUIStatus === 'success'" class="loadcontain">
        <h4>Success!</h4>
      </div>
    </div>
  </div>
</template>
 
<script>
import { Card, handleCardPayment } from "vue-stripe-elements-plus";

import { mapState } from "vuex";

export default {
  components: { Card },
  computed: {
    ...mapState(["cartUIStatus"])
  },
  mounted() {
    // create a PaymentIntent on Stripe with order information
    this.$store.dispatch("createPaymentIntent");
  },
  data() {
    return {
      complete: false,
      stripeOptions: {
        // you can configure that cc element. I liked the default, but you can
        // see https://stripe.com/docs/stripe.js#element-options for details
      },
      stripeEmail: "",
      error: "",
      loading: false
    };
  },
  methods: {
    pay() {
      // confirms the payment and will automatically display a
      // pop-up modal if the purchase requires authentication
      this.loading = true;
      handleCardPayment(this.$store.getters.clientSecret, {
        receipt_email: this.stripeEmail
      }).then(result => {
        this.loading = false;
        if (result.error) {
          // show the error to the customer, let them try to pay again
          this.error = result.error.message;
          setTimeout(() => (this.error = ""), 3000);
        } else if (
          result.paymentIntent &&
          result.paymentIntent.status === "succeeded"
        ) {
          // payment succeeded! show a success message
          // there's always a chance your customer closes the browser after the payment process and before this code runs so
          // we will use the webhook in handle-payment-succeeded for any business-critical post-payment actions
          this.$store.commit("updateCartUI", "success");
          setTimeout(this.clearCart, 5000);
        } else {
          this.error = "Some unknown error occured";
          setTimeout(() => (this.error = ""), 3000);
        }
      });
    },
    clearCart() {
      this.complete = false;
      this.$store.commit("clearCart");
    }
  }
};
</script> 
 
<style lang="scss" scoped>
input,
button {
  width: 100%;
}

button {
  margin-top: 20px;
}

.payment {
  margin-top: 20px;
}

.stripe-card {
  margin-top: 10px;
  width: 100%;
  border: 1px solid #ccc;
  padding: 5px 10px;
}

.stripe-card.complete {
  border-color: green;
}
</style> 