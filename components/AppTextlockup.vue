<template>
  <div class="textlockup">
    <div class="new">New</div>
    <div class="sale">Men Shoes</div>
    <div class="collection">Collection</div>
    <div class="details">Street Style New Fashion</div>
    <div class="img">
      <img src="/shoe1.jpg" alt="shoe" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.textlockup {
  display: grid;
  grid-template-columns: 50px 100px 1fr;
  grid-template-rows: 30px 50px 70px 20px 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  .new {
    grid-area: 1 / 1 / 5 / 4;
    font-size: 100px;
    color: #ccc;
    text-transform: uppercase;
  }
  .sale {
    grid-area: 2 / 2 / 3 / 4;
    font-size: 30px;
    color: orangered;
  }
  .collection {
    grid-area: 3 / 3 / 4 / 4;
    font-size: 40px;
  }
  .details {
    grid-area: 4 / 2 / 5 / 4;
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
  .img {
    grid-area: 1 / 3 / 6 / 4;
  }
}
</style>