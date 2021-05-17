<template>
<div>
    <!-- Shows the user profile -->
  <UserProfile v-bind:show="true"/>

  <!-- End of the user profile -->
  <!-- Projects by the user -->
  <h3 class="mt-5">Ideas: </h3>
    <Projects v-bind:projects="projects"/>
  </div>
</template>

<script>
    import Projects from '../components/Projects.vue'
    import UserProfile from '../components/Layout/User/UserProfile.vue'

export default {
  name: "Profile",
  components: {
      Projects,
      UserProfile
  },
  data(){
      return{
          projects :[
        {
          id:"Decentralized digital college ",
        }, {
          id:"Decentralized digital college ",
        },
         {
          id:"Cook food with our heat",
        }]
        
      }
  }
};
</script>

<style scoped>
</style>