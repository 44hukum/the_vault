<template>
<div class="mb-2">
            <!-- Progress bar -->
          <MDBProgress :height="15">
           <MDBProgressBar :value="20" :min="5" :max="100" striped animated  bg="success">
               Images uploading: 5% 
    </MDBProgressBar>
    <MDBProgressBar :value="20" :min="5" :max="100" striped animated bg="info">
        codebase uploading: 5%
        </MDBProgressBar>
  </MDBProgress>
  <!-- end of the progress bar -->
  <form class="mt-2">
    
  
      <h2>upload your content into:  The vault</h2>
    
               <select class="selection mt-2" >
                        <optgroup label="Application Type">
                            <option value="12">web application </option>
                            <option value="13">mobile application</option>
                            <option value="14">embedded system</option>
                            <option value="15">other</option>
                        </optgroup>
                    </select>

      
      <input  name=""  v-model="title" required id="input" placeholder="Title"/>
      <MDBFile v-model="featuredFile" multiple label="Upload Featured images" id="input"  required/>
      
      <MDBTextarea cols="30" rows="9" placeholder="About your idea" v-model="idea" required id="input-area"/>
     <MDBFile v-model="featuredFile" multiple label="Upload code Base (.zip)" required id="input"/>

       <MDBBtn color="primary" type="submit" class="w-100 " id="loginB">Upload</MDBBtn>
  </form>
</div>
           
       
 
</template>

<script>
import {
 
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
   #input{
    width: 100%;
    height: 44px;
    border: 2px solid;
    position: relative;
     margin-bottom: 1em;
    border-color: #242424;
    color: #252525;
    padding-left: 3px;
 }

 #input-area{
     width: 100%;
   border: 2.5px solid;
    position: relative;
  
    margin-bottom: 1em;
    border-color: #242424;
    color: #252525;
 }
 .selection{
    width: 100%;
    height: 44px;
    border: 2px solid;
    position: relative;
   margin-bottom: 1em;
    border-color: #242424;
    color: #252525;
    padding-left: 3px;
 }

  #loginB{
     background-color: #204157;
     font-size: 1em;
     text-transform: capitalize;
 }
</style>