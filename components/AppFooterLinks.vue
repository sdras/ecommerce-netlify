<template>
  <section>
    <ul>
      <li>About</li>
      <li>Company</li>
      <li>Locations</li>
      <li>Contact</li>
      <li>Hours</li>
    </ul>
    <ul>
      <li>Twitter</li>
      <li>Facebook</li>
      <li>Instagram</li>
      <li>LinkedIn</li>
    </ul>
    <ul>
      <h4>Newsletter:</h4>
      <input type="text" />
    </ul>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
section {
  width: 80%;
  margin-left: 10%;
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

ul {
  list-style: none;
}

input {
  width: 100%;
}
</style>