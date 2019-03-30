import Vue from 'vue'
import Router from 'vue-router'
import User from '@/components/User'
import House from '@/components/House'
import Break from '@/components/Break'
import Home from '@/components/Home'
import HA from '@/components/HA'
import HB from '@/components/HB'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },{
      path: '/house',
      name: 'House',
      component: House,
      children:[{
        path:'ha',
        name:'HA',
        component:HA
      }, {
        path:'hb',
        name:'HB',
        component:HB
      }]
    },{
      path: '/break',
      name: 'Break',
      component: Break
    }
  ],
  mode:'history'   //引号
})

//https://study.163.com/course/courseLearn.htm?courseId=1004711010#/learn/video?lessonId=1278543915&courseId=1004711010
