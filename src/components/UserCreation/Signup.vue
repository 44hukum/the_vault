<template>
<div>
    <h2>Let's get your setup for: The Vault</h2>
      <form  tag="form" class="g-3 needs-validation" novalidate @submit.prevent="checkForm">    
      <MDBInput 
            type="text" 
            size="lg" 
           id="input" 
            placeholder="username"
            v-model="username"
        invalidFeedback="username"
        validFeedback="Looks good!"
        required
            />
      <MDBInput 
      type="email"
       size="lg"
      
         id="input" 
        placeholder="email"
        v-model="email"
        invalidFeedback="email required"
        validFeedback="Looks good!"
        required
        />
        <MDBInput
        v-model="password"
        invalidFeedback="password required"
        validFeedback="Looks good!"
       
        
         type="password" size="lg" placeholder="password" required id="input"/>
        <MDBInput type="password" size="lg" placeholder="confirm-password" required id="input"/>
        <MDBCheckbox
        class="mb-4"
        label="Agree to terms and conditions"
        v-model="termsandcondidion"
        invalidFeedback="You must agree before submitting."
        validFeedback="Looks good!"
        
      />
   
          <MDBBtn color="primary" type="submit" class="w-100 mb-3" id="loginB">Sign up</MDBBtn>
                    <div class="login">
             or <a href="#">Login </a>
        
        </div>

      </form> 
     
</div>

</template>

<script>
import{
    MDBInput,
    MDBBtn,
     MDBCheckbox,
}
from 'mdb-vue-ui-kit'

import {ref} from "vue"
export default {
    name:'Signup',
    components:{
        MDBBtn,
        MDBInput,
         MDBCheckbox,
    },
    setup(){
        const checkForm = data=>{
            data.target.classList.add("was-validated");
        };
        const username=ref()
        const password=ref()
          const email=ref()
        const termsandcondidion=ref(false)
        
        return{
            username,
            password,
            email,
    termsandcondidion,
            checkForm
        }
    }
}
</script>

<style scoped>
 #input{
    width: 100%;
    height: 44px;
    border: 2px solid;
    position: relative;
  
    margin-bottom: 1em;
    border-color: #2b2b2b;
    color: #202020;
 }
 #loginB{
     background-color: #204157;
     font-size: 1em;
     text-transform: capitalize;
 }
 .passwordReset{
     text-align: center;
 }
 .login{
     text-align: center;
 }
</style>