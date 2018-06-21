// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import jquery from 'jquery'
import './assets/bootstrap/css/bootstrap.min.css'
import './assets/css/dd-reset.css'
import './assets/css/dd-init.css'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.config.productionTip = false
Vue.use(VueAxios, axios)
/* eslint-disable no-new */


Vue.prototype.AllData={
  /* 从index 页面 点击地图标点过来的早餐机的数据 */
  goods: [],
  /* 放入购物车的 */
  InTheBuyCar: [],
  // 弹出的具体参数
  popIntro: {},
  //总价格
  totalMoney: 0

}

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  mounted() {
    // 这里是类似使用 jq的ajax
    this.axios.get("http://localhost:8888").then(body => {
  
      Vue.prototype.AllData.goods = body.data.goods;

      console.log(
        "1111111111111111111111111111111111111111111111->",
        this.goods
      );
      console.log(
        "2222222222222222->",
        Vue.prototype.AllData.goods
      );
    });
  }


})
