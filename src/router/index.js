import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import My from '@/components/My'
import Back from '@/components/Back'
import MapBai from '@/components/MapBai'
import Foods from '@/components/Foods'
import Pay from '@/components/Pay'

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
    },
    {
      path: '/foods',
      name: 'foods',
      component: Foods
    },
    {
      path: '/pay',
      name: 'pay',
      component: Pay
    }

  ]
})
