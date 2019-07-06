<template>
  <div>
    <app-store-grid :data="women" />
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
    ...mapGetters(["women"])
  }
};
</script>

<style lang="scss" scoped>
</style>