<template>
  <div>
    <div id="logo"><p>场地预约</p></div>
    <hr>
    <router-link to="/house/ha" exct>场地A</router-link>
    <router-link to="/house/hb" exct>场地B</router-link>
    <!--<router-link to="/house/hc" exct>场地C</router-link>-->

    <hr>
    <div class="tell">
      说明：红色表示该场地已被租用，请选择其他场地
    </div>
    <router-view></router-view>

    <router-link id="backto" tag="p" to="/" exct>返回主页</router-link>

  </div>
</template>

<script>
    export default {
        name: "House"
    }
</script>

<style scoped>
  html,body *{
    box-sizing: border-box;
  }
  #logo{
    display: inline-block;
    vertical-align: middle;
    height: 60px;
  }
  .tell{
    width: 60%;
    margin: 10px auto;
    font-size: 16px;
  }
  form{
    margin-top: 100px;
  }

  textarea{
    display: block;
    margin: 5px auto;
    width: 200px;
    height: 80px;
  }
  button{
    /*margin-left: 100px;*/
  }
  a{
    text-decoration: none;
    display: inline-block;
    background-color: #c5c5c5;
    /*border: #666666 solid 0.5px;*/
    padding: 2px 4px;
    color: #4c4c4c;
  }
  .router-link-active{
    background-color: #505050;
    color: #d4d4d4;
  }
  #backto{
    position: fixed;
    bottom: 0 ;
    left: 35%;
    width: 30%;
    margin: 0 auto;
    padding: 3px;
  }
</style>
