<template>
   <MDBCard class="c">
          <MDBCardBody rounded>
          <MDBCardTitle>Special title treatment</MDBCardTitle>
          <MDBCardText class="mt-3 idea-text">
            Idea: With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            
          </MDBCardText>
         <!-- Button interaction -->
         <Buttons />
        </MDBCardBody>
      </MDBCard>
    
</template>
<script>
import Buttons from './UserInteraction/Buttons.vue'
// MDB imports
import {  
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  
} from "mdb-vue-ui-kit";

export default {
  name: "Project",
  components: {
    MDBCard,
    MDBCardBody,   
    MDBCardTitle,
    MDBCardText,
    Buttons
  
  },
  props: {
    project:Object,
    from:String
  }};
</script>

<style scoped>  .idea-text{
    text-align: initial;
    display: -webkit-box;
    max-width: 99%;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
 
  font-size: 1.3rem;
  background:inherit;
  resize: vertical;
}


</style>
