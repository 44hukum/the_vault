
<template>

  <div id="nav">
    <router-link to="/"><vault /></router-link>
    
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <router-view />
     
  </div>
</template>

<script>
import Vault from './components/Navigation/Vault.vue'
export default {
  name:'App',
  components:{
    Vault,
  }
}
</script>
<style>

html {
  margin: 2em;
}
body{
    margin: 0;
    font-family: var(--mdb-font-roboto);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
    color: #5c5555;
    background-color: #fff;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

}


/* Responsive */
@media (max-width: 768px) {
  
}

</style>
