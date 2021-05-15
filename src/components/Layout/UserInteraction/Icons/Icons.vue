

<template>
  <!-- Vuejs Icon -->
  <MDBIcon v-bind:icon="icon" v-bind:iconStyle="iconStyle"></MDBIcon> 
</template>

<script>
import {
   MDBIcon,
} from "mdb-vue-ui-kit";

export default {
    name:'Icons',
    components:{
      MDBIcon,
    },
    data(){
        return{
            // type:'fas fa-eye',
           
        }
    },
    props:{
        icon:String,
        iconStyle:String,
  }
}
</script>

<style>

</style>