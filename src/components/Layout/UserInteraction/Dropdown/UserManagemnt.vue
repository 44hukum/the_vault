<template>
  <MDBDropdown v-model="dropdown1" dropstart id="dropdown">
    <MDBDropdownToggle @click="dropdown1 = !dropdown1" color="link" size="sm" >
      </MDBDropdownToggle>
    
    <MDBDropdownMenu class="dropdonMenu" color="light" :animation="false">
            
    
      <MDBDropdownItem class="mt-2">
             <router-link to="/profile">
          <MDBBtn color="link" class="link cv-btn w-100"><i class="fas fa-user-alt"></i> Profile</MDBBtn>

          
        </router-link>
       

      </MDBDropdownItem>
        <MDBDropdownItem divider />

<!--         
      <MDBDropdownItem>
            <router-link to="/user">
          <MDBBtn color="link" class="link cv-btn w-100"><i class="fas fa-comment-dots"></i> Give feedback</MDBBtn>
        </router-link>
      </MDBDropdownItem> -->
      <!-- <MDBDropdownItem>
            <router-link to="/user">
          <MDBBtn color="link" class="link cv-btn w-100"><i class="fa fa-info-circle" aria-hidden="true"></i> About</MDBBtn>
        </router-link>
      </MDBDropdownItem> -->
        <MDBDropdownItem>
            <router-link to="/user">
          <MDBBtn color="link" class="link cv-btn w-100"><i class="fa fa-question-circle" aria-hidden="true"></i> Help& Support</MDBBtn>
        </router-link>
      </MDBDropdownItem> 
    

  <MDBDropdownItem divider />
        <MDBDropdownItem class="mb-2">
            <router-link to="/user">
          <MDBBtn color="link" class="link cv-btn w-100"><i class="fas fa-sign-in-alt"></i> Logout</MDBBtn>
        </router-link>
      </MDBDropdownItem>
    
    </MDBDropdownMenu>
  </MDBDropdown>
</template>

<script>
  import { MDBBtn,MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdb-vue-ui-kit";
  import { ref } from 'vue';

  export default {
      name:'UserManagement',
    components: {
      MDBDropdown,
      MDBDropdownToggle,
      MDBDropdownMenu,
      MDBDropdownItem,
      MDBBtn
    },
    setup() {
      const dropdown1 = ref(false);

      return {
        dropdown1
      }
    }
  };
</script>

<style scoped> 
#dropdown{
        color: black !important;
}

.cv-btn {
  font-size: 0.5rem;
  padding: 0.6em;
}
.link {
  color: rgb(27, 27, 27);
  text-align: justify;
  font-size: 1em;
  padding: 0.4em;  
  text-transform: capitalize;
}
.dropdonMenu{
    justify-content: baseline;
    width: 15em;
}
</style>