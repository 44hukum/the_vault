
<template>

   <MDBContainer id="app" class="mt-3 user-select-none">
    <MDBRow gx="5">
      
            <!-- Content -->
      <MDBCol md="" class="">
               <div class="text-center">
        <router-link to="/"> <i class="fas fa-gem fa-lg Vault-temp" style="color: #050f1f">Vault</i>  </router-link>
          
        </div>     
    
        <!-- COL bhitra hunxha so 
        just focus on content -->
       <router-view class="mt-5" />
     </MDBCol>

    
      
    </MDBRow>
     <div style=" text-align: center; font-weight: 2" class="rights">
              &copy; 2021- All right reserved. <a href="">rocketman. </a> <a href="">aarush. </a> <a href="">creators. </a> <a href="">herald brain.</a>
         
            </div>
  </MDBContainer>
 
</template>

<script>
import { MDBContainer, MDBCol, MDBRow } from "mdb-vue-ui-kit";
// import Vault from "./components/Navigation/Vault.vue";
// import UserManagement from './components/Layout/UserInteraction/Dropdown/UserManagemnt.vue'

export default {
  name: "App",
  components: {
    // Vault,
    MDBContainer,
    MDBCol,
    MDBRow,
    // UserManagement,
 
    
  },
  data(){
    return{
      home:true
    }
  },
  mounted(){
    console.log(this.$refs.title);
  }
};
</script>
<style scoped>
 
body {
  margin: 0;
  font-family: var(--mdb-font-roboto);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  color: #131212;
  background-color: #fff;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
   /* cursor: pointer; */
    /* fallback for old browsers */
  background: #fff1eb;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to bottom, rgba(255, 241, 235, 0.15), rgba(172, 224, 249, 0.15));

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to bottom, rgba(255, 241, 235, 0.15), rgba(172, 224, 249, 0.15));
  scroll-behavior: smooth;
  background-repeat: no-repeat;
 
}

/* Responsive */
@media (max-width: 768px) {
}

.col-logo{
  height: fit-content;
}

</style>
