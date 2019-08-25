<template>
  <div>
    <app-store-grid :data="men" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AppStoreGrid from "~/components/AppStoreGrid.vue";

export default {
  components: {
    AppStoreGrid
  },
  computed: {
    ...mapGetters(["men"])
  }
};
</script>

<style lang="scss" scoped>
</style>