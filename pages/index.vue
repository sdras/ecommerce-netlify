<template>
  <main>
    <app-textlockup />
    <app-sales-boxes />
  </main>
</template>

<script>
import AppTextlockup from "~/components/AppTextlockup.vue";
import AppSalesBoxes from "~/components/AppSalesBoxes.vue";

export default {
  components: {
    AppTextlockup,
    AppSalesBoxes
  }
};
</script>

<style>
.test {
  margin: 3vh;
}

main {
  width: 80vw;
}
</style>
