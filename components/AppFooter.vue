<template>
  <footer>
    <section class="callout">
      <h2>"The surprising styles of Skyline Ivy are advanced for all seasons."</h2>
      <p>Hansel Andersen</p>
    </section>
    <app-footer-links />
    <div class="sarahstuff">
      <p>This project is on github, hosted with Netlify, and made with love by Sarah Drasner, @sarah_edo (twitter) @sdras (github)</p>
    </div>
  </footer>
</template>

<script>
import AppFooterLinks from "~/components/AppFooterLinks.vue";

export default {
  components: {
    AppFooterLinks
  }
};
</script>

<style lang="scss" scoped>
.callout {
  width: 100%;
  height: 280px;
  background: url("/callout.jpg") center center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
}

.sarahstuff {
  background: black;
  width: 100%;
  padding: 10px 30px;
  color: white;
  text-align: center;
}
</style>