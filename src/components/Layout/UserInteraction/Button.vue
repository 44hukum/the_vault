
<template>
  <!-- lIKE AND UNLIKE BUTTON -->
  <MDBBtn color="link" class="link" rounded>
    <MDBIcon v-if="!like" icon="hand-peace" iconStyle="far" class="icon-btn" @click="liked" />

    <!-- show on click -->
    <MDBIcon v-if="like" icon="hand-peace" iconStyle="fas" class="icon-btn" @click="unliked" />
    <span class="upvotes">{{nl}}</span>
  </MDBBtn>
</template>

<script>
import { MDBBtn, MDBIcon } from "mdb-vue-ui-kit";

export default {
  name: "Button",
  components: {
    MDBIcon,
    MDBBtn
    //  project components
  },

  data() {
    return {
      like: false,
      nl: 11
    };
  },
  methods: {
    liked() {
      this.nl++;
      this.like = !this.like;
    },
    unliked() {
      this.nl--;
      this.like = !this.like;
    }
  }
};
</script>

<style scoped>
.icon-btn {
  padding: 0.2em;
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
</style>