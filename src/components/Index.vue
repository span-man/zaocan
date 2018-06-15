<template>
  <div class="index">
    <h1>{{ msg }}</h1>
    <PopLayer></PopLayer>
    <button class="btn btn-warning">扫码取餐</button>

    <div class="img">
      {{array[0]}}
      <img :src="array[0]" />
    </div>
    <router-link v-for="goWhere in goWhereArray" :key="goWhere"  :to="goWhere.href">{{goWhere.text}}</router-link>
  
    <router-view></router-view>
      <MapBai></MapBai>
  </div>
</template>

<script>
import MapBai from "@/components/MapBai";
import PopLayer from "@/components/PopLayer";
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
          href: "/my",
          text: "我的"
        }
      ]
    };
  },
  methods: {
    al(_arg) {
      alert(_arg);
    }
  },
  mounted() {
    // 这里是类似使用 jq的ajax
    this.axios.post("https://www.taifa5588.com/getMainImgs").then(body => {
      this.array = body.data;
    });
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
