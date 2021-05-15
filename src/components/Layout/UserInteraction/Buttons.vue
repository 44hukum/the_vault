<template>
  <div class="mt-2">
            <MDBBtn
              tag="a"
              href="#"
              color="link"
              class="link"
              rounded
              >
              <MDBIcon v-if="!like" icon="hand-peace" iconStyle="far" class="icon-btn" @click="liked">
                <span class="upvotes">{{nl}}</span>
              </MDBIcon>
                <!-- show on click -->
                <MDBIcon v-if="like" icon="hand-peace" iconStyle="fas" @click="unliked">
                <span class="upvotes">{{nl}}</span>
              </MDBIcon>
              </MDBBtn
            >
            <router-link to="ViewProject" style="text-decoration: none; color: inherit;">
               <MDBBtn
              tag="a"
              href="#"
              color=""
              class="cv-btn text-right projectViewer"
              rounded
              style="background-color: rgb(255, 172, 68)" 
              ><MDBIcon icon="fas fa-eye"></MDBIcon> view project</MDBBtn>
              </router-link>      
          </div>
</template>

<script>
import {
   MDBIcon,
  MDBBtn,
  
} from "mdb-vue-ui-kit";
export default {
  name: "Buttons",
  components: {
    MDBIcon,
     MDBBtn,
  },
  
  data(){
    return{
      like:false,
      nl:11,
    }
  },
  methods:{
    liked(){
      this.nl++;
       this.like = ! this.like;
    },
    unliked(){
      this.nl--;
      this.like = !this.like
    },
  },
}
</script>

<style scoped>
    .icon-btn{
  padding:0.2em;
}

.c:hover{
    background-color: #f0f8ff;
}
.cv-btn {
  text-transform: lowercase;
  float: right;
  font-size: 1rem;
  padding: 0.6em
  
}

.link {
  color: rgb(143, 143, 143);
  font-size: 1.35rem;
  float: left;
  letter-spacing: 2px;
}
.upvotes {
  font-size: 1rem;
  margin-left: 0.3em;
}
.projectViewer{
    margin-right: 0.5em;
}
</style>