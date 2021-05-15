<template>
  <div class="mt-3">
    <!-- This need to be  recomposed -->
    <Button />

    <router-link to="ViewProject" style="text-decoration: none; color: inherit;">
      <MDBBtn
        class="link cv-btn text-right projectViewer"
        color="link" 
        rounded
      >
        <Icons v-bind:icon="'eye'" v-bind:iconStyle="'far'"/> 
      </MDBBtn>
    </router-link>
  </div>
</template>

<script>
import Button from "./Button.vue";
import Icons from "./Icons/Icons.vue";
import { MDBBtn } from "mdb-vue-ui-kit";

export default {
  name: "ButtonsA",
  components: {
    MDBBtn,
    Button,
    Icons
  }
};
</script>

<style scoped>
.c:hover {
  background-color: #f0f8ff;
}
.cv-btn {
  text-transform: lowercase;
  float: right;
  font-size: 1rem;
  padding: 0.6em;
}

.projectViewer {
  margin-right: 0.5em;
}

  .link{
    color: rgb(143, 143, 143);
     text-align: justify;
    font-size: 1rem;
    letter-spacing: 2px;
    
  }
</style>