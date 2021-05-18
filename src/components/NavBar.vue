<template>
  <MDBRow>
    <MDBCol>
      <MDBBtn color="link" class="link cv-btn cv-btn-search" @click="show = !show" rounded>
        <MDBIcon icon="search"></MDBIcon>
      </MDBBtn>
      
      <MDBBtnGroup v-if="show">
         
        <MDBBtn color="link" class="link cv-btn" rounded>RECENT</MDBBtn>
        <MDBBtn color="link" class="link cv-btn" rounded>POPULAR</MDBBtn>
     
   
              <router-link to="/upload" >
              <MDBBtn 
              style="background-color: rgb(255, 172, 68);" color="light"  id="uploadbutton">
               
            <MDBIcon icon="upload"></MDBIcon>
                Upload
              </MDBBtn>
              </router-link>
         
      </MDBBtnGroup>
    </MDBCol>

<!-- Search Bar edit -->
    
      <MDBCol v-if="!show">
        <MDBInput label="search" type="text" size="mb"/>
      </MDBCol>
   
    <!-- End of the search bar -->
  </MDBRow>
</template>

<script>
import { MDBBtn, MDBIcon, MDBInput, MDBCol, MDBRow } from "mdb-vue-ui-kit";
export default {
  name: "NavBar",
  components: {
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput
  },
  data() {
    return {
      show: true
    };
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
 #uploadbutton{
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