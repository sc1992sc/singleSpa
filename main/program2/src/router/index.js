import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/page/HelloWorld'
import main from '@/page/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/program2/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/program2',
      name: 'program',
      component: main
    }
  ]
})
