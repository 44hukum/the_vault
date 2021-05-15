
 <template>
  <MDBContainer>
    <!-- Nav bar heading -->
  <Profile />
    <NavBar />
  
    <Projects v-bind:projects="projects"/>
                
  </MDBContainer>

</template> 
<script>

import {MDBContainer} from 'mdb-vue-ui-kit';

// Custom imports
import Projects from "../components/Projects"
import NavBar from "../components/NavBar"
import Profile from '../components/Navigation/Profile.vue'

export default {
  name:'Home',
    components: {
       MDBContainer,
      //  user defined
      Projects,
      NavBar,
        Profile
      
    },
    data(){
      return{
       
         activeComponent:'Projects',
         projects :[
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