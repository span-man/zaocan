import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import My from '@/components/My'
import Back from '@/components/Back'
import MapBai from '@/components/MapBai'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/back',
      name: 'Back',
      component: Back
    },
    {
      path: '/mapbai',
      name: 'mapbai',
      component: MapBai
    }

  ]
})
