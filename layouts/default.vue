<template>
  <div>
    <app-nav />
    <main>
      <nuxt />
    </main>
    <app-footer />
  </div>
</template>

<script>
import AppFooter from "~/components/AppFooter.vue";
import AppNav from "~/components/AppNav.vue";

export default {
  components: {
    AppFooter,
    AppNav
  }
};
</script>

<style scoped>
main {
  padding: 40px;
  width: 80vw;
  margin-left: 7vw;
}
</style>
