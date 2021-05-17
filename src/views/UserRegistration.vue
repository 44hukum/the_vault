<template>
  
    <MDBRow class="usersignup justify-content-around align-items-center" id="row-for-signup">
      <MDBCol md="8" class="mt-4 align-self-start">
        <!-- Prospect starts here -->
        <div>
          <div class="quotes">
            <ul class="mx-5 text-compliment think">
              <li>think</li>
            </ul>
            <ul class="text-compliment inspire">
              <li>inspire</li>
            </ul>
            <ul class="mx-5 text-compliment build">
              <li>build</li>
            </ul>
          </div>

          <p class="mt-4 text-compliment">#Every Ideas Matter</p>
          <p>
            You have an awesome creator inside you, who will change the way people use mobiles and computers.
            <br />Be a part of an evolution.
            Your #Every_Ideas actually matter, store them into: The Vault.
          </p>
          <div v-show="login">
            <p lead>
              Start from
              <a href="#" class="mb-3" @click="showSignup">here.</a>
            </p>
          </div>
          <div v-show="!login">
            <p lead>Fill the form and you are up.</p>
          </div>
        </div>
        <!-- Prospect ends here -->
      </MDBCol>
      <MDBCol md="4" class="mt-5 align-self-end">
        <Login v-show="login" />
        <Signup v-show="!login" />
        <!-- For signup -->
        <div v-show="!login" class="text-center">
          or
          <a href="#" @click="showLogin">Login</a>
        </div>
      </MDBCol>
    </MDBRow>

</template>

<script>
import Login from "../components/UserCreation/Login.vue";
import Signup from "../components/UserCreation/Signup.vue";
import { MDBRow, MDBCol } from "mdb-vue-ui-kit";

export default {
  name: "UserRegistration",
  components: {
  
    MDBRow,
    MDBCol,
    Login,
    Signup
  },
  data() {
    return {
      login: false
    };
  },
  mounted() {},
  methods: {
    // FOr login
    showLogin() {
      this.login = !this.login;
    },
    //for signup
    showSignup() {
      this.login = !this.login;
    }
  }
};
</script>

<style scoped>
.usersignup{
    margin-bottom: 12em;
}
.text-compliment {
  font-size: 44px;
  line-height: 54px;
  letter-spacing: 0px;
  font-weight: 600;
}
.quotes {
  padding: 2em;
}
ul {
  padding-left: 1em;
}

/* Share your idea */

.build {
  background: linear-gradient(
    85deg,
    #fbd786,
    #f7797d,
    #a53fc8,
    #12c2e9,
    #12c2e9,
    #f7797d
  );
  background-size: 800% 800%;

  -webkit-animation: AnimationName 23s ease infinite;
  -moz-animation: AnimationName 23s ease infinite;
  animation: AnimationName 23s ease infinite;
}

.inspire {
  background: linear-gradient(
    85deg,
    #c6ffdd,
    #f7797d,
    #a53fc8,
    #12c2e9,
    #12c2e9,
    #f7797d
  );
  background-size: 800% 800%;

  -webkit-animation: AnimationName 23s ease infinite;
  -moz-animation: AnimationName 23s ease infinite;
  animation: AnimationName 23s ease infinite;
}
.think {
  background: linear-gradient(
    85deg,
    #c6ffdd,
    #fbd786,
    #f7797d,
    #a53fc8,
    #12c2e9,
    #12c2e9,
    #f7797d
  );
  background-size: 800% 800%;

  -webkit-animation: AnimationName 23s ease infinite;
  -moz-animation: AnimationName 23s ease infinite;
  animation: AnimationName 23s ease infinite;
}
@-webkit-keyframes AnimationName {
  0% {
    background-position: 0% 76%;
  }
  50% {
    background-position: 100% 25%;
  }
  100% {
    background-position: 0% 76%;
  }
}
@-moz-keyframes AnimationName {
  0% {
    background-position: 0% 76%;
  }
  50% {
    background-position: 100% 25%;
  }
  100% {
    background-position: 0% 76%;
  }
}
@keyframes AnimationName {
  0% {
    background-position: 0% 76%;
  }
  50% {
    background-position: 100% 25%;
  }
  100% {
    background-position: 0% 76%;
  }
}
</style>