<template>
  <MDBRow tag="form" class="g-2 needs-validation justify-content-center" novalidate @submit.prevent="checkForm">
     <h5>Start tracking your ideas >> with</h5>
    <MDBCol md="8">
       
      <MDBInput
         v-model="input1"
        invalidFeedback="username **"
        validFeedback="Looks good!"
        placeholder="username"
        required
      />
    </MDBCol>
    <MDBCol col="md-8">
      <MDBInput
        v-model="input2"
        invalidFeedback="password***"
        validFeedback="Looks good!"
        placeholder="password"
        required
      />
    </MDBCol>
      
    <MDBCol col="md-8">
      <MDBBtn type="submit" color="link" class="link w-100 login_button" >Login</MDBBtn>
    </MDBCol>
    <MDBCol col="md-8" class="text-center">
     <a href="" >Forget password ?</a>
    </MDBCol>
  </MDBRow>
</template>

<script>
import { MDBCol, MDBRow, MDBInput,  MDBBtn } from "mdb-vue-ui-kit";
import { ref } from "vue";
export default {
  components: {
    MDBCol,
    MDBRow,
    MDBInput,
    
    MDBBtn
  },
  setup() {
    const checkForm = e => {
      e.target.classList.add("was-validated");
    };
    const input1 = ref();
    const input2 = ref();
     return {
      input1,
      input2,
     
      checkForm
    };
  }
};
</script>

<style scoped>
.login_button{
    background-color: #112e41;
    color: #f0e6e6;
    text-transform: capitalize;
}

</style>