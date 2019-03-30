<template>
    <div>
      <!--轮播图组件-->
      <div v-for="(picURL,index) in picList" v-show="index===mark" :key="index" class="slide">
        <img id="logo" v-bind:src="picURL" />
      </div>
      <div>


      </div>
    </div>
</template>

<script>
    export default {
      name: "Pics",
      data(){
        return {
          mark: 0,
          //assets中的文件会经过webpack打包，重新编译
          picList: ['../../static/bg/1.jpg',
                    '../../static/bg/2.jpg',
                    '../../static/bg/3.jpg'],
        }

      },
      methods:{
        autoPlay(){
          this.mark ++;
          if(this.mark ==3){
            this.mark = 0
          }
        },
        play(){
          setInterval(this.autoPlay,1500)
        },
        change(i){
          this.mark = i;
        },
        // stop(){
        //   clearInterval(this.time)
        // },
        // move(){
        //   this.play();
        // },

      },
      created(){
        this.play()
      }
    }
</script>

<style scoped>
  #logo {
    max-width: 100%;
  }
</style>
