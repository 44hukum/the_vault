<template>
 <MDBContainer class="mb-5">
              <MDBRow class="justify-content-between align-items-end viewproject-row" >
                  <ButtonsC />
                <MDBCol class="mt-1 mb-4" lg="8">
                
                 <Carousel />
                   
                  
                </MDBCol> 
                
                <MDBCol class="align-self-start" lg="4">
                   
                </MDBCol>
                 <MDBCol md="8">
                 <Project v-bind:project="project" :tag="this.tag" />
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
    Carousel
     
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