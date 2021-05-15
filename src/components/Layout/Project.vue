<template>
   <MDBCard class="c">
          <MDBCardBody rounded>
          <MDBCardTitle>Special title treatment</MDBCardTitle>
          <MDBCardText class="mt-3 idea-text">
            Idea: With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.  Idea: With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.  Idea: With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.  Idea: With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.  Idea: With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.  Idea: With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.  Idea: With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.  Idea: With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.With supporting text below as a natural lead-in to additional
            content.
          </MDBCardText>
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
        </MDBCardBody>
      </MDBCard>
    
</template>
<script>

// MDB imports
import {
  MDBCard,
  MDBIcon,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-vue-ui-kit";

export default {
  name: "Project",
  components: {
    MDBCard,
    MDBCardBody,
    MDBIcon,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,
  },
  props: {
    project:Object,
    from:String
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
   
  
};
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
.idea-text{
    text-align: initial;
    display: -webkit-box;
    max-width: 99%;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
 
  font-size: 1.3rem;
  background:inherit;
  resize: vertical;
}
.projectViewer{
    margin-right: 0.5em;
}

</style>
