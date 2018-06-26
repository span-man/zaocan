<template>
  <div class="index">
    <div>
      <h3>常用地点：</h3>
      <div class="dd-colum">
  <div class="dd-row dd-h-2side" @click="goToDetail">
        <p>智能早餐机 012 号</p>
        <p class="dd-ellipsis">地址：崇山南路崇山南路崇山南路崇山南路崇山南路</p>
      </div>  
      
      <div class="dd-row dd-h-2side">
        <p>智能早餐机 012 号</p>

        <p class="dd-ellipsis">地址：崇山南路崇山南路崇山南路崇山南路崇山南路</p>
      </div>  
      
      <div class="dd-row dd-h-2side">
        <p>智能早餐机 012 号</p>

        <p class="dd-ellipsis">地址：崇山南路崇山南路崇山南路崇山南路崇山南路</p>
      </div>

      </div>

    </div>
    <PopLayer  ref="child"></PopLayer>
    <button class="btn btn-warning" @click="show">点击我 = 点了了地图上标点的</button>
    <router-link v-for="goWhere in goWhereArray" :key="goWhere"  :to="goWhere.href">{{goWhere.text}}</router-link>
    <router-view></router-view>
      <MapBai></MapBai>
  </div>
</template>

<script>
import MapBai from "@/components/MapBai";
import PopLayer from "@/components/PopLayer";
import Vue from "vue";
export default {
  name: "Index",
  comments: {
    MapBai
  },
  data() {
    return {
      msg: "Welcome to Your paomian App",
      array: [],
      goWhereArray: [
        {
          href: "/my",
          text: "我的"
        },
        {
          href: "/my/myorder/saoma",
          text: "扫码"
        }
      ]
    };
  },
  methods: {
    alert() {
      alert(1);
    },
    show() {
      this.$refs.child.close();
    },
    // 去具体页面
    goToDetail(){
      this.$router.push('/foods')
    }
  },
  mounted() {
    // 这里是类似使用 jq的ajax
    this.axios.post("https://www.taifa5588.com/getMainImgs").then(body => {
      this.array = body.data;
    });

    console.log("77777777", this.AllData);
  },
  components: {
    MapBai,
    PopLayer
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index {
  width: 100vw;
}
.img {
  width: 100vw;
}
.img img {
  width: 100vw;
}
</style>
 