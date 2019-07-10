<template>
  <div>
    <app-cart-steps />
    <hr />
    <h1 class="center">Your Cart</h1>

    <section v-if="cartUIStatus === 'idle'">
      <app-cart-display />
    </section>

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
import AppLoader from "~/components/AppLoader.vue";
import AppCartSteps from "~/components/AppCartSteps.vue";
import AppSalesBoxes from "~/components/AppSalesBoxes.vue";
import AppCartDisplay from "~/components/AppCartDisplay.vue";
import { mapState } from "vuex";

export default {
  components: {
    AppCartDisplay,
    AppSalesBoxes,
    AppCartSteps,
    AppLoader
  },
  computed: {
    ...mapState(["cartUIStatus"])
  }
};
</script>

<style lang="scss" scoped>
.loader {
  display: flex;
  justify-content: center;
}

.success {
  text-align: center;
}
</style>