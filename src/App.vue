
<template>

  <div id="nav">
 
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <router-view />
  </div>
</template>

<style>

html {
  padding: 1em;
  margin: 1em;

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
img {
  position: fixed;
}
h6 {
  position: fixed;
  margin: 1em;
  margin-left: 3em;
}
/* Responsive */
@media (max-width: 768px) {
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    position: relative;
  }

  h6 {
    position: relative;
    text-align: center;
    margin-top: -2.2em;
    margin-left: 6.5em;
  }
}

.btn{
  padding: 0;
}
</style>
