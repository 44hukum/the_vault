<template>
  <MDBBtn color="primary" floating class="mdb-floating-button" style="background-color: rgb(255, 172, 68);">
    V
  </MDBBtn>
</template>

<script>
  import { MDBBtn } from "mdb-vue-ui-kit";

  export default {
    name:'Vault',
    components: {
      MDBBtn,
      
    }
  };
</script>

<style scoped>
.mdb-floating-button{
    position: relative;
    float: left;
    margin: 0 0 0 -2em;
}

</style>