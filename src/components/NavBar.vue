<template>
  <MDBRow>
    <MDBCol v-if="!show" class="d-flex flex-row">
      <MDBBtn color="link" class="link cv-btn cv-btn-search" @click="show = !show">
        <MDBIcon icon="search"></MDBIcon>
      </MDBBtn>
      <MDBInput class="w-100" label="search" type="text" autofocus />
    </MDBCol>
    <MDBCol>
      <MDBBtnGroup v-if="show">
        <MDBBtn color="link" class="link cv-btn cv-btn-search" @click="show = !show" rounded>
          <MDBIcon icon="search"></MDBIcon>
        </MDBBtn>
        <MDBBtn color="link" class="link cv-btn" rounded>RECENT</MDBBtn>
        <MDBBtn color="link" class="link cv-btn" rounded>POPULAR</MDBBtn>

        <MDBBtn
          color="link"
          class="link"
          id="uploadbutton"
          @click="submenu =! submenu, dropdown=!dropdown"
          aria-controls="submenuContent"
          :aria-expanded="submenu"
          rounded
         >
          <MDBIcon v-if="!dropdown" icon="caret-down" iconStyle="fas" size="lg"/>
          <MDBIcon v-if="dropdown" icon="caret-up" iconStyle="fas" size="lg" />
        </MDBBtn>
        <MDBCollapse id="submenuContent"  v-model="submenu" :duration="100">
          <div class="mt-3">
            <Data />
          </div>
        </MDBCollapse>
      </MDBBtnGroup>
      <!-- Data bar -->
      
    </MDBCol>

    <!-- Search Bar edit -->

    <!-- End of the search bar -->
  </MDBRow>
</template>

<script>
import Data from "./Cret/Data.vue";
import { MDBBtn, MDBIcon, MDBInput, MDBCol, MDBRow,  MDBCollapse, } from "mdb-vue-ui-kit";
import {ref} from "vue";
export default {
  name: "NavBar",
  components: {
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput,
    Data,
      MDBCollapse,
  },
  data() {
    return {
      show: true,
      dropdown:false
    };
  },
   setup() {
      const submenu = ref(false);

      return {
        submenu
      }
    }
};
</script>

<style scoped>
/* Navigation bar Style */

.cv-btn {
  font-size: 0.5rem;
  padding: 0.6em;
}
.link {
  color: rgb(143, 143, 143);
  text-align: justify;
  font-size: 1rem;
  letter-spacing: 2px;
}

h5 {
  float: right;
}

.cv-btn-search {
  text-align: center;
}
#uploadbutton {
  align-items: center;
  /* left: 50em; */
  float: right;
}

/* Responsive */
/* @media (min-width: 768px) {
  
 #uploadbutton{
 
    left: 10em;
 }
} */
/* Responsive */
/* @media (min-width: 548px) {
   
 #uploadbutton{
 
   left: 16em;
 }
} */
</style>