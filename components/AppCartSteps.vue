<template>
  <section>
    <div class="shopping">
      <h2>01</h2>
      <h4>Shopping Cart</h4>
    </div>
    <div class="checkout">
      <h2>02</h2>
      <h4>Check out</h4>
    </div>
    <div class="order">
      <h2>03</h2>
      <h4>Order Complete</h4>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
section {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 100px;
  grid-row-gap: 0px;
  text-align: center;
  width: 80%;
  margin: 0 auto;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

h2 {
  width: 80px;
  height: 80px;
  border-radius: 1000px;
  border: 1px solid #ccc;
  padding-top: 21px;
  color: #555;
}

h4 {
  margin-top: 20px;
  color: #555;
}
</style>