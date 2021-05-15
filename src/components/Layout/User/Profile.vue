<template>
  <MDBRow class="justify-content-between align-items-start viewproject-row" >
    <MDBCol class="mt-3 mb-4" md="6" >
      <Project v-bind:project="project" :tag="this.tag"/>
      <Project v-bind:project="project" :tag="this.tag"/>
      <Project v-bind:project="project" :tag="this.tag"/>
     </MDBCol> <MDBCol class="mt-3 mb-4 align-self-center" md="6" >
        ajsjdhasdjkfhjhasdfjhdsjfhjdh
     </MDBCol>
  </MDBRow>
</template>

<script>

import Project from "./Layout/Project"
import {
  MDBCol,
  MDBRow,
  } 
  from "mdb-vue-ui-kit";


export default {
  name:'viewProjects',
  components:{
    Project,
    MDBRow,
    MDBCol    
  },data(){
      return{
          project:{},
          tag:"sp"
      }
  }
 }
</script>

<style>
.viewproject-row{
  height: 80vh;
}
</style>