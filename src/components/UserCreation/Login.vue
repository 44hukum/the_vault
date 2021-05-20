<template>
<div>
    <h2>Login in to: The Vault</h2>
      <form class="mt-4">    
      <MDBInput type="text" size="lg" required placeholder="username"/>
        <MDBInput type="password" size="lg" placeholder="password" required />
          <MDBBtn color="primary" type="submit" class="w-100 mb-3" id="loginB">Login</MDBBtn>
        <div class="passwordReset">
             <a href="#">Forget Password ? </a>
        
        </div>
        

      </form> 
     
</div>

</template>

<script>
import{
    MDBInput,
    MDBBtn
}
from 'mdb-vue-ui-kit'
export default {
    name:'login',
    components:{
        MDBBtn,
        MDBInput,
    }
}
</script>

<style scoped>

 #loginB{
     background-color: #204157;
     font-size: 1em;
     text-transform: capitalize;
 }
 .passwordReset{
     text-align: center;
 }
</style>