<template>
    <div>
      <input type="checkbox" id="morning">
      <label for="morning">morning</label>

      <input type="checkbox" id="afternoon">
      <label for="afternoon">afternoon</label>

      <input type="checkbox" id="night">
      <label for="night">night</label>

      <form>
        <input class="content" type="text" placeholder="租借人姓名"/>
        <input class="content" type="text" placeholder="活动人数"/>
        <textarea type="textarea" placeholder="租借理由"/>
        <button id="sub">提交申请</button>
      </form>

    </div>
</template>

<script>
    export default {
        name: "HA"
    }
</script>

<style scoped>
  html,body *{
    box-sizing: border-box;
  }
  form{
    margin-top: 100px;
  }
  .content{
    display: block;
    margin: 5px auto;
    width: 200px;
    height: 30px;
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
  }
</style>
