<template>
  <div class="mt-2">
    

    <router-link to="ViewProject" style="text-decoration: none; color: inherit">
      <MDBBtn
        color
        class="cv-btn text-right projectViewer"
       
        style="background-color: rgb(255, 172, 68); padding: 0.4em;"
      >
        <Icons v-bind:icon="'file-archive'" v-bind:iconStyle="'far'" /> download
      <MDBIcon icon="file-archive" iconStyle="far" />
      </MDBBtn>
    </router-link>
  </div>
</template>

<script>
import { MDBBtn } from "mdb-vue-ui-kit";
import Icons from "./Icons/Icons.vue"
export default {
  name: "ButtonsC",
  components: {
     MDBBtn,
    Icons,
  },

};
</script>

<style scoped>
.icon-btn {
 
}

.c:hover {
  background-color: #f0f8ff;
}
.cv-btn {
  text-transform: lowercase;
  float: right;
  font-size: 1rem;
  padding: 0.6em;
}

.link {
  color: rgb(143, 143, 143);
  font-size: 1.35rem;
  float: left;
  letter-spacing: 2px;
}
.upvotes {
  font-size: 1rem;
  margin-left: 0.3em;
}
.projectViewer {
  margin-right: 0.5em;
}
</style>