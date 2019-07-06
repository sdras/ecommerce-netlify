<template>
  <section class="boxes">
    <div v-for="(box, i) in boxes" :key="box.heading" :class="`box${i}`">
      <img :src="box.icon" alt="service icon" />
      <h4>{{ box.heading }}</h4>
      <p>{{ box.details }}</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      boxes: [
        {
          icon: "/icon-package.svg",
          heading: "Free Shipping Worldwide",
          details: "Delivery in 4 Days"
        },
        {
          icon: "/icon-cal.svg",
          heading: "24/7 Customer Service",
          details: "Call us any day, any time"
        },
        {
          icon: "/icon-service.svg",
          heading: "Easy Online Return Policy",
          details: "Send Within 30 Days"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.boxes {
  margin: 70px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 0px;
  div {
    border: 1px solid #ddd;
    padding: 40px 50px;
    min-height: 150px;
    justify-self: center;
    align-self: center;
    text-align: center;
  }
  .box1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .box2 {
    grid-area: 1 / 2 / 2 / 3;
  }
  .box3 {
    grid-area: 1 / 3 / 2 / 4;
  }
}

h4 {
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin: 0 0 10px 0;
}
</style>