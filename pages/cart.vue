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

export default {
  components: {
    AppSalesBoxes,
    AppCard
  }
};
</script>

<style lang="scss" scoped>
</style>