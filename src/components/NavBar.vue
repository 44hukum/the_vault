<template>
  <MDBRow>       
       
        <MDBCol >
            <MDBBtn color="link" class="link cv-btn cv-btn-search" @click="show = !show" rounded> <MDBIcon icon="search"></MDBIcon></MDBBtn>
           <MDBBtnGroup v-if="show" >
             <MDBBtn color="link" class="link cv-btn" rounded>About</MDBBtn>
                <MDBBtn color="link" class="link cv-btn"  rounded>PROFILE</MDBBtn>
               <MDBBtn color="link" class="link cv-btn"  rounded>RECENT</MDBBtn>
             <MDBBtn color="link" class="link cv-btn" rounded>POPULAR</MDBBtn>
            
            </MDBBtnGroup>
                     
           </MDBCol>
          
           <transition name="bounce">
             <MDBCol v-if="!show">          
                 <MDBInput label="search" type="text" size="lg" autofocus/>
              </MDBCol>
            </transition>
        </MDBRow>
</template>

<script>

import { MDBBtn, MDBIcon,MDBInput,MDBCol, MDBRow } from "mdb-vue-ui-kit";
export default {
    name:'NavBar',
    components:{
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput, 
  
    },
    data(){
        return {
             show:true,
        }
}
}
</script>

<style scoped>
    /* Navigation bar Style */
    
  .cv-btn{
    font-size: 0.5rem;
     padding: 0.6em
  }
  .link{
    color: rgb(143, 143, 143);
     text-align: justify;
    font-size: 1rem;
    letter-spacing: 2px;
    
  }
  .inputSearch{
    size: 100%;
  }

h5{
  float: right;
}

.cv-btn-search{
  text-align: center;
}

/* Hide and unhide transition for search  */
  .bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.75);
  }
  100% {
    transform: scale(1);
  }
}
</style>