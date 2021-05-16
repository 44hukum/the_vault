
 <template>
  <MDBContainer>
    <MDBRow>
        <NavBar />

    </MDBRow>
    <Projects v-bind:projects="projects" class="mt-3"/>
                
  </MDBContainer>

</template> 
<script>

import {MDBContainer,MDBRow} from 'mdb-vue-ui-kit';

// Custom imports
import Projects from "../components/Projects"
import NavBar from "../components/NavBar"
// import Profile from '../components/Navigation/Profile.vue'

export default {
  name:'Home',
    components: {
       MDBContainer,
       MDBRow,
      //  user defined
      Projects,
      NavBar,
        // Profile
      
    },
    data(){
      return{
       
         activeComponent:'Projects',
         projects :[
        {
          id:"This it thie thing ",
        },
         {
          id:1,
        },
         {
          id:1,
        },
        {
          id:1,
        },
         {
          id:1,
        },
         {
          id:1,
        },{
          id:1,
        },
         {
          id:1,
        },
         {
          id:1,
        } 
      ]
      }
    }
  };
</script>
<style scoped>

/** */
</style>