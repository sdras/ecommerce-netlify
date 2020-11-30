<template>
  <div>
    <app-textlockup />
    <app-sales-boxes />
    <app-textlockup>
      <template v-slot:img>
        <!-- <img src="/bag.jpg" alt="bag" /> -->
        <img src="ecobottle.png" alt="bag" />
      </template>
      <template v-slot:new>50%</template>
      <template v-slot:sale>Venta de</template>
      <template v-slot:collection>Verano</template>
      <template v-slot:details>Todos los utensilios</template>
    </app-textlockup>
    <app-featured-products />
  </div>
</template>

<script>
import AppTextlockup from "~/components/AppTextlockup.vue";
import AppSalesBoxes from "~/components/AppSalesBoxes.vue";
import AppFeaturedProducts from "~/components/AppFeaturedProducts.vue";

export default {
  components: {
    AppTextlockup,
    AppSalesBoxes,
    AppFeaturedProducts
  }
};
</script>

<style>
.test {
  margin: 3vh;
}

main {
  width: 75vw;
}
</style>
