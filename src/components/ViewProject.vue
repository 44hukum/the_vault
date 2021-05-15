<template>
  <MDBRow class="justify-content-between align-items-end">
    <MDBCol class="mt-3 mb-4" md="6">
      <Project v-bind:project="project" :tag="from"/>
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
          from:"gp"
      }
  }
 }
</script>

<style>
</style>