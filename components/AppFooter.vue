<template>
  <footer>
    <section class="callout">
      <h2>"Queremos lograr acceso a productos libre de empaques,<br> de químicos tóxicos y sobre todo sostenibles."</h2>
      <p>Isla Eco</p>
    </section>
    <app-footer-links />
    <div class="sarahstuff">
      <p>
        Basado en
        <a href="https://github.com/sdras/ecommerce-netlify">eCommerce Netlify</a>
        .
      </p>
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
  h2 {
    padding: 0 30px;
    text-align: center;
  }
}

.sarahstuff {
  background: black;
  width: 100%;
  padding: 10px 30px;
  color: white;
  text-align: center;
}

a,
a:visited,
a:active {
  color: #c4c3ec;
  font-weight: bold;
}
</style>