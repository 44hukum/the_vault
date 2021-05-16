
<template>

   <MDBContainer id="app" fluid class="mt-5 user-select-none">
    <MDBRow gx="5">
      <MDBCol md="1">
        <div>
        <router-link to="/"> <i class="fas fa-gem fa-lg Vault-temp" style="color: #050f1f">Vault</i>  </router-link>
          
        </div>
          <!-- <button type="" class="Home-Button">V</button> -->
      </MDBCol>
      <!-- Content -->
      <MDBCol md="10">
      
                 
    
        <!-- COL bhitra hunxha so 
        just focus on content -->
       <router-view />




      </MDBCol>

      <!-- Content END -->
         <MDBCol md="1">

           <!-- <button type="" class="fancy-border-radius">Upload</button> -->
      </MDBCol>
      
    </MDBRow>
     <div style=" text-align: center; font-weight: 5" >
              &copy; 2021- All right reserved. <a href="">rocketman. </a> <a href="">aarush. </a> <a href="">creators. </a> <a href="">herald brain.</a>
         
            </div>
  </MDBContainer>
 
</template>

<script>
import { MDBContainer, MDBCol, MDBRow } from "mdb-vue-ui-kit";
// import Vault from "./components/Navigation/Vault.vue";

export default {
  name: "App",
  components: {
    // Vault,
    MDBContainer,
    MDBCol,
    MDBRow,
    
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
<style>
 
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
  background: linear-gradient(to bottom, rgba(255, 241, 235, 0.15), rgba(172, 224, 249, 0.15))
}

.Home-Button{
  border-radius: 52% 48% 48% 52% / 15% 14% 86% 85%;

  /* These are ADDITIONAL styles - add them if you want an object exactly like in the demo above */
  width: 40px;
  height: 50px;
  background: #ad5389;
  background: -webkit-linear-gradient(to right,
      #3c1053,
      #ad5389);
  background: linear-gradient(to right,
      #3c1053,
      #ad5389);
      font-size: 1.4em;
}
/* Responsive */
@media (max-width: 768px) {
}
#app{
  transform: scale(1em);
}

</style>
