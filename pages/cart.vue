<template>
  <div>
    <h1>Your Cart</h1>

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
</style>