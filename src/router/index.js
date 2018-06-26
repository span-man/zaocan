import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import My from '@/components/My'
import Back from '@/components/Back'
import MapBai from '@/components/MapBai'
import Foods from '@/components/Foods'
import Pay from '@/components/Pay'
import MyOrder from '@/components/MyOrder'
import PaymentHasBeen from '@/components/orderDetails/PaymentHasBeen'  /* 已经付款 */
import Question from '@/components/questionAndAnswer/Question'  /* 取餐故障 */
import Answer from '@/components/questionAndAnswer/Answer'  /* 取餐故障 */
import Saoma from '@/components/orderDetails/Saoma.vue'  /* 扫码 */

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
      component: My,
      children:[
        
      ]
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
    },
    {
      path: '/my/myorder',
      name: 'myorder',
      component: MyOrder
    },
    {
      path: '/my/myorder/paymenthasbeen',
      name: 'PaymentHasBeen',
      component: PaymentHasBeen
    },{
      path: '/my/myorder/paymenthasbeen/question',
      name: 'Question',
      component: Question
    },{
      path: '/my/myorder/paymenthasbeen/answer',
      name: 'Answer',
      component: Answer
    },{
      path: '/my/myorder/saoma',
      name: 'Saoma',
      component: Saoma
    }
  ]
})
