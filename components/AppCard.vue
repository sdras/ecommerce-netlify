<template>
  <div id="app">
    <div v-if="!submitted" class="payment">
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
      <div v-if="status === 'failure'">
        <h3>Oh No!</h3>
        <p>Something went wrong!</p>
        <button @click="clearCart">Please try again</button>
      </div>

      <div v-else class="loadcontain">
        <h4>Please hold, we're filling up your cart with goodies</h4>
        <p>Placeholder loader</p>
      </div>
    </div>
  </div>
</template>
 
<script>
import { Card, createToken } from "vue-stripe-elements-plus";
import axios from "axios";
import uuidv1 from "uuid/v1";
//const uuidv1 = require('uuid/v1');

export default {
  data() {
    return {
      submitted: false,
      complete: false,
      status: "",
      response: "",
      stripeOptions: {
        // you can configure that cc element. I liked the default, but you can
        // see https://stripe.com/docs/stripe.js#element-options for details
      },
      stripeEmail: ""
    };
  },
  components: { Card },
  methods: {
    pay() {
      createToken().then(data => {
        this.submitted = true;
        console.log(data.token); //this is a token we would use for the stripeToken below
        axios
          .post(
            "https://ecommerce-netlify.netlify.com/.netlify/functions/index",
            {
              stripeEmail: this.stripeEmail,
              stripeToken: "tok_visa", //testing token
              stripeAmt: 50,
              stripeIdempotency: uuidv1()
            },
            {
              headers: {
                "Content-Type": "application/json"
              }
            }
          )
          .then(response => {
            this.status = "success";
            //this.$emit("successSubmit");
            //this.$store.commit("clearCartCount");
            //console logs for you :)
            this.response = JSON.stringify(response, null, 2);
            console.log(this.response);
          })
          .catch(error => {
            this.status = "failure";
            //console logs for you :)
            this.response = "Error: " + JSON.stringify(error, null, 2);
            console.log(this.response);
          });
      });
    },
    clearCart() {
      this.submitted = false;
      this.status = "";
      this.complete = false;
      this.response = "";
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