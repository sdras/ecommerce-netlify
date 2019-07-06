<template>
  <div class="container">
    <div class="test">
      <h1>Hello Tacoface</h1>
      <p>Yayayayaya. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iure quibusdam quos, ullam, corporis veniam aliquam cumque nulla alias magni delectus nostrum tenetur tempore porro voluptate aliquid nam temporibus provident?</p>
    </div>Hi there.
    <nuxt-link to="/women">women</nuxt-link>
    <app-card />
  </div>
</template>

<script>
import AppCard from "~/components/AppCard.vue";

export default {
  components: {
    AppCard
  }
};
</script>

<style>
.test {
  margin: 3vh;
}
</style>
