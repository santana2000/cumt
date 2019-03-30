<template>
  <div>
    <!--<p>常用功能</p>-->
    <pics></pics>

    <div class="all">
      <div class="func">
        <img class="icon" src="../assets/icon/a.svg"/>
        <router-link to="/user">信息</router-link>
        <!--<a href="./Users.html">请假</a>-->
        <!--tag='a' target='_blank'-->
      </div>
      <div class="func">
        <img class="icon" src="../assets/icon/b.svg"/>
        <router-link to="/house">租借</router-link>

      </div>
      <div class="func">
        <img class="icon" src="../assets/icon/c.svg"/>
        <router-link to="/break">请假</router-link>


      </div>

    </div>
    <!--//路由组件要渲染的位置（插座）-->
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
    import Pics from "@/components/Pics";
    export default {
        name: "home",
      components: {Pics}
    }
</script>

<style scoped>
  p {
    font-size: 1rem;
  }

  .all{
    display: flex;
  }
  .func{
    flex: 1;
    background-color: #d4d4d4;
    padding: 5%;
    font-size: 1rem;
    /*border: #81c3c5 solid 1px;*/
  }
  .icon {
    display: block;
    margin: auto;
    vertical-align: middle;
    width: 50%;
    margin-bottom: 5%;
  }
  a{
    text-decoration: none;
  }
</style>
