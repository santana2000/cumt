<template>
  <div id="app">
    <!--<img id="logo" src="./assets/bg/2.jpg">-->
    <!--<Pics></Pics>-->
    <!--<Home></Home>-->

    <router-view></router-view>

  </div>
</template>

<script>
import Home from "@/components/Home";
import Pics from "@/components/Pics";
export default {
  name: 'App',
  components: {Pics, Home}
}
</script>

<style>
  html,body {
    height: 100%;
    padding: 0;
    margin: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    height: 100%;

    text-align: center;
    color: #434240;
    background-color: #f2f2f2;
  }



</style>
