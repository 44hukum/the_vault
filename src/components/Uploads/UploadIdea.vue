<template>
<div>
            <!-- Progress bar -->
          <MDBProgress :height="25">
           <MDBProgressBar :value="20" :min="5" :max="100" striped animated  bg="success">
               Images upload: 100% 
    </MDBProgressBar>
    <MDBProgressBar :value="20" :min="5" :max="100" striped animated bg="info">
        codebase upload: 100%
        </MDBProgressBar>
  </MDBProgress>
  <!-- end of the progress bar -->
  <form>
    
  
      <h2>Upload your content into:  The vault</h2>
    
      <p>This is dropdown</p>

      
      <MDBInput label="Title" v-model="title" type="text" required/>
      <MDBFile v-model="featuredFile" multiple label="feature images" required/>
      
      <MDBTextarea cols="30" rows="10" placeholder="About your idea" v-model="idea" required/>
     <MDBFile v-model="featuredFile" multiple label="Code Base" required/>

      <MDBBtn color="primary" type="submit" class="w-100 ">upload</MDBBtn>
  </form>
</div>
           
       
 
</template>

<script>
import {
  MDBInput,
  MDBTextarea,
  MDBFile,
  MDBBtn,
   MDBProgress,
   MDBProgressBar 
} from 'mdb-vue-ui-kit';
// import {ref} from 'vue';

 export default {
    name:'UploadIdea',
    components:{
      MDBInput,
      MDBTextarea,
      MDBFile,
      MDBBtn,
       MDBProgress,
       MDBProgressBar 
  },
  data(){
    return{
      title:'',
      idea:'',
      featuredFile:'',
      codebase:'',

    }
  }
}
</script>

<style>

</style>