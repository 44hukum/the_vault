<template>
 <MDBContainer class="mb-5">
              <MDBRow class="justify-content-between align-items-center viewproject-row" >
                  <ButtonsC class="order-2 order-lg-1 "/>
                  <!-- Featured Images -->
                <MDBCol class="mt-1 mb-4 order-4 order-lg-2" lg="8">
                 <Project v-bind:project="project" :tag="this.tag" />
                
                                  
                </MDBCol> 
                <!-- Profiles -->
                <MDBCol class="order-1 order-lg-3" lg="4">
                   
                    <UserProfile v-bind:show="false"/>
                    <!-- Chatting option availablr -->
                    
                </MDBCol>

                <!-- Description -->
                 <MDBCol md="8" class="order-5 order-lg-4">
                 <Carousel />
                </MDBCol>  
             </MDBRow>

              <MDBRow>
               
                
             </MDBRow>
  </MDBContainer>
  
  
</template>

<script>
import ButtonsC from './Layout/UserInteraction/ButtonsC.vue'
import Carousel from './Layout/UserInteraction/Carousel/Featuredfiles.vue'
import Project from "./Layout/Project"
import UserProfile from "../components/Layout/User/UserProfile.vue"
// Featured files

import {
  MDBCol,
  MDBRow,
  MDBContainer

  } 
  from "mdb-vue-ui-kit";


export default {
  name:'viewProjects',
  components:{
    Project,
    MDBRow,
    MDBCol,
     ButtonsC,
     MDBContainer,
    Carousel,
    UserProfile

  },
  data(){
      return{
          project:{
            id:'This is the thing man'
          },
          tag:"sp"
      }
  }
 }
</script>

<style>
  
</style>