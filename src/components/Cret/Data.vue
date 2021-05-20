<template>
  <div class="submenu">
    <h3>Menu</h3>
    <div class="first_column">
      <div class="content">
        <!-- Upload story -->
        <!-- dropdown for platform -->
        Post Idea
      </div>
    </div>
    <div class="first_column">
      <div class="content">
                      <!-- Login -->
                      <Login />
      </div>
    </div>
  </div>
</template>

<script>
import Login from "../Registration/Login.vue"


export default {
  name: "Data",
  components: {
      Login
  }
};
</script>

<style scoped>
.submenu {
  width: 100%;
  background-color: #f7f8fa;
  margin-bottom: 3em;
  padding: 1em;
  border-radius: 10px;
}
h3 {
  width: 100%;
}
.first_column {
  width: 50%;
  display: inline-flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
}
.content {
  background-color: white;
  margin-left: 1em;
  padding: 2em;
  border-radius: 10px;
}
</style>