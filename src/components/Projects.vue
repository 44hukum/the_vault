<template>
  <MDBRow class="justify-content-between align-items-end">
    <MDBCol class="mt-3 mb-4" md="6" v-for="project in projects" :key="project.id">
      <Project :project="project" :tag="from"/>
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
  name:'Projects',
  components:{
    Project,
    MDBRow,
    MDBCol    
  },
  props:{
    projects: Array,
 },
 data(){
   return{
     from:'gp'
   }
 }
}
</script>

<style>
</style>