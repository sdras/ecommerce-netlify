<template>
  <div class="textlockup">
    <div class="img">
      <slot name="img">
        <!-- <img src="/shoe1.jpg" alt="shoe" /> -->
        <video playsinline="" type="video/webm" width="420" loop=""
            onloadstart="this.volume=0" onmouseover="this.play()" onmouseout="this.pause()" 
            src="https://res.cloudinary.com/sgonzalez/video/upload/c_scale,w_480/v1606716363/islaeco/islaeco.webm"
        ></video>
      </slot>
    </div>
    <div class="new">
      <slot name="new">Nuevos</slot>
    </div>
    <div class="sale">
      <slot name="sale">artículos</slot>
    </div>
    <div class="collection">
      <slot name="collection">zerowaste</slot>
    </div>
    <div class="details">
      <slot name="details">Estilo de Vida Ecoconsciente</slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.textlockup {
  display: grid;
  grid-template-columns: 50px 100px 300px 1fr;
  grid-template-rows: 50px 50px 100px 20px 240px;
  /*grid-template-columns: 50px 100px 1fr;*/
  /*grid-template-rows: 50px 50px 100px 20px 1fr;*/
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  .new {
    grid-area: 1 / 1 / 5 / 4;
    font-size: 23vmin;
    color: #efefef;
    text-transform: uppercase;
  }
  .sale {
    grid-area: 2 / 2 / 3 / 4;
    font-size: 6.5vmin;
    color: #d96528;
    font-family: "PT Serif", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, sans-serif;
  }
  .collection {
    grid-area: 3 / 3 / 4 / 4;
    font-size: 8.5vmin;
    font-family: "PT Serif", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, sans-serif;
  }
  .details {
    grid-area: 4 / 2 / 5 / 4;
    font-size: 2vmin;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }
  .img {
    max-width: 950px;
    grid-area: 1 / 4 / 6 / 5;
    img {
      width: 65%;
    }
    video {
        float: right;
        margin: 5vw;
        width: 25vw;
    }
  }
}

@media screen and (max-width: 650px) {
  .textlockup {
    grid-template-columns: 25px 25px 1fr !important;
    grid-template-rows: 6vmin 5.5vmin 10vmin 20px 1fr !important;
  }
}
</style>