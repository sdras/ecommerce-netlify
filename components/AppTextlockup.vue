<template>
  <div class="textlockup">
    <div class="img">
      <img src="/shoe1.jpg" alt="shoe" />
    </div>
    <div class="new">New</div>
    <div class="sale">Men Shoes</div>
    <div class="collection">Collection</div>
    <div class="details">Street Style New Fashion</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.textlockup {
  width: 80vw;
  margin-left: 10vw;
  display: grid;
  grid-template-columns: 50px 100px 1fr;
  grid-template-rows: 50px 50px 100px 20px 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  .new {
    grid-area: 1 / 1 / 5 / 4;
    font-size: 280px;
    color: #efefef;
    margin-top: -50px;
    text-transform: uppercase;
  }
  .sale {
    grid-area: 2 / 2 / 3 / 4;
    font-size: 60px;
    color: #d96528;
    font-family: "PT Serif", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, sans-serif;
  }
  .collection {
    grid-area: 3 / 3 / 4 / 4;
    font-size: 80px;
    font-family: "PT Serif", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, sans-serif;
  }
  .details {
    grid-area: 4 / 2 / 5 / 4;
    font-size: 20px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }
  .img {
    grid-area: 1 / 3 / 6 / 4;
  }
}
</style>