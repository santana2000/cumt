<template>
    <div id="user">
      <p>用户信息</p>
      <div class="headpic">
        <img src="../assets/icon/a.svg" alt="">
      </div>
      <ul>
        <li>姓名：</li>
        <li>年龄：</li>
        <li>专业：</li>
      </ul>
      <br>
      <router-link id="backto" tag="p" to="/">返回主页</router-link>

    </div>
</template>

<script>
    export default {
        name: "User"
    }
</script>

<style scoped>

  /*#user *{
    background-color: aquamarine;
  }*/

  img{
    width: 20%;
    height: 20%;
  }
  ul{
    list-style: none;
    text-align: left;
    margin-left: 3rem;
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
