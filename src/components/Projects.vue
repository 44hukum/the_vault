<template>
  <MDBRow class="justify-content-between align-items-start">
    <MDBCol class="mt-3 mb-4" md="4" v-for="project in projects" :key="project.id">
      <Project :project="project" :tag="this.tag" :showall="'idea-text'"/>
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
     tag:'gp'
   }
 }
}
</script>

<style>
</style>