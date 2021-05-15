<template>
  <MDBCarousel
    v-model="carousel"
    :items="items"
  />
</template>

<script>
  import { ref } from "vue";
  import { MDBCarousel } from "mdb-vue-ui-kit";

  export default {
    components: {
      MDBCarousel
    },
    setup() {
      const items = [
        {
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg",
          alt: "...",
          label: "First slide label",
          caption: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        },
        {
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg",
          alt: "...",
          label: "Second slide label",
          caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg",
          alt: "...",
          label: "Third slide label",
          caption:
            "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
        }
      ];
      const carousel = ref(0);

      return {
        items,
        carousel
      };
    }
  };
</script>