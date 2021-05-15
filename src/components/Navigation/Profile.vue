<template>
  <MDBBtn color="primary" floating class="mdb-floating-button" style="background-color: rgb(255, 172, 68);">
    P
  </MDBBtn>
</template>

<script>
  import { MDBBtn } from "mdb-vue-ui-kit";

  export default {
    name:'Profile',
    components: {
      MDBBtn,
      
    }
  };
</script>

<style scoped>
.mdb-floating-button{
    position: relative;
    float: right;
    margin: 0 -4em 0 0;
}

</style>