<template>

    <div class="my">
        <back message="hello"></back>  
        <h2>my</h2>
        <div class="head dd-column ">
            <div class="pic dd-row dd-center" >
                <img src="../assets/img/logo.png" alt="">      
            </div>
            <div class="phone dd-row dd-center">15809181640</div>
        </div>
        <div class="body">

            <ul>
                <li v-for="item in dataArray" v-bind:key="item">
                  <ItemLink :itemdata="item"></ItemLink>
                </li>
            </ul>
     
        </div>
        <!-- 根据登陆状态显示不同文字 -->
        <div class="dd-row dd-center dd-fixed-bottom">
          <div class="btn btn-danger ">切换账号 / 登陆</div>
        </div>
    </div>
</template>
<script>
import back from "@/components/Back";
import ItemLink from "@/components/ItemLink";
export default {
  name: "My",
  data() {
    return {
      dataArray: [
        {
          icon: "@/assets/img/logo.png",
          title: "我的订单",
          intro: "0zhang",
          introColor: "#ccc",
          link: "/foods"
        },
        {
          icon: "@/assets/img/logo.png",
          title: "我的优惠券",
          intro: "0zhang",
          introColor: "#ccc",
          link: "/foods"
        },
        {
          icon: "@/assets/img/logo.png",
          title: "我的优惠券",
          intro: "0zhang",
          introColor: "#ccc",
          link: "/foods"
        },
        {
          icon: "@/assets/img/logo.png",
          title: "积分商城",
          intro: "0zhang",
          introColor: "#ccc",
          link: "/foods"
        },
        {
          icon: "@/assets/img/logo.png",
          title: "推荐有奖",
          intro: "每人免费送一碗面",
          introColor: "#ff0000",
          link: "/foods"
        },
        {
          icon: "@/assets/img/logo.png",
          title: "联系客服",
          intro: "0zhang",
          introColor: "#ccc",
          link: "/foods"
        },
        {
          icon: "@/assets/img/logo.png",
          title: "联系客服",
          intro: "0zhang",
          introColor: "#ccc",
          link: "/foods"
        }
      ]
    };
  },
  components: {
    back,
    ItemLink
  }
};
</script>
<style scoped>
.head > .pic {
}
.head > .pic > img {
  width: 200px;
  height: 200px;
}
.head > .phone {
  background: pink;
  /* text-align: center; */
}
</style>
