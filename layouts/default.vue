<template>
  <div>
    <app-nav />
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
import AppNav from "~/components/AppNav.vue";

export default {
  components: {
    AppNav
  }
};
</script>

<style>
main {
  width: 80vw;
  margin-left: 10vw;
}
</style>
