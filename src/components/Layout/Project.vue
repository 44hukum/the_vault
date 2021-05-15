<template>
   <MDBCard class="c">
          <MDBCardBody rounded>
          <MDBCardTitle>{{project.id}}</MDBCardTitle>
          <MDBCardText class="mt-3 " v-bind:class="showall">
            <span class="" v-if="!showall"> Idea Description: </span>
              <span class=""> Idea: </span>
              
             With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional  Idea: With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional  Idea: With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional  Idea: With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional  Idea: With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional  Idea: With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional  Idea: With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional  Idea: With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional  Idea: With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional  Idea: With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional  Idea: With supporting text below as a natural lead-in to additional
         
            {{tag}}
            
          </MDBCardText>
         <!-- Button interaction -->
         <ButtonsA v-if="tag=='gp'"/>
           
        </MDBCardBody>
      </MDBCard>
    
</template>
<script>

import ButtonsA from './UserInteraction/ButtonsA.vue'
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
    ButtonsA,
   
  
  },
  props: {
    project:Object,
    tag:String,
    showall:String,
  },
  mounted() {
   
  },
  };
</script>

<style scoped> 
  .c:hover{
    background-color: #f0f8ff;
}
 .idea-text{
    text-align: initial;
    display: -webkit-box;
    max-width: 99%;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
 
  font-size: 1.1rem;
  background:inherit;
  resize: vertical;
  padding: 0.3em;
}


</style>
