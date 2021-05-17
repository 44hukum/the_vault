<template>
  <div>
    <!-- User profile -->
    <div
      class="text-left d-md-flex flex-row align-items-baseline align-self-center mx-auto justify-content-lg-center"
      style="width: 100%;"
    >
         <div>
      <MDBBtn color="link" class="link" rounded>
        <!-- Onclick just change far --fas -->
        <MDBIcon icon="star" iconStyle="far" class="icon-btn"/>
         1.1k
        </MDBBtn>
            </div>
      <div class="text-center box">
          <!-- Star for the user -->
            
        
         <img
          class="rounded-circle img-fluid justify-content-center"
          src="https://randomuser.me/api/portraits/men/90.jpg"
          style="width: 15vh;"
          width="100%"
        />
           
    
       
         

        <!-- End of the star for the user -->
        <h3 class="text-center name">Ben Johnson</h3>
        <p class="text-center title">Bachelor in computer Science</p>
      
        <!-- Social Link -->
        <div class="d-flex justify-content-center social">
          <!-- Github -->
          <a href="#">
            <i class="fab fa-github"></i>
          </a>

          <!-- Linkdlin -->
          <a href="#">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>

        <!-- End of social link -->
      </div>

  
    </div>
<!-- Star for the user -->

    <!-- View profile and settings  -->
    <div v-if="true" class="settings mt-3 mb-3">
      <a href="#" @click="a">
        <i class="fas fa-cog"></i>
      </a>
      <MDBSwitch label="show profile" />
    </div>
  </div>
</template>

<script>
import { MDBSwitch, MDBIcon, MDBBtn } from "mdb-vue-ui-kit";
// import {ref} from 'vue'
export default {
  name: "UserProfile",
  components: {
    MDBSwitch,
    MDBIcon,
    MDBBtn
  },

  methods: {
    a() {
      alert("Hellow world");
    }
  },
  
};
</script>

<style scoped>
.social > a {
  text-decoration: none;
  color: black;
  padding-right: 1em;
}
.settings > a{
    float: right;
}
a{
    text-decoration: none;
    color: black;   
}

.link {
  color: rgb(143, 143, 143);

}

</style>