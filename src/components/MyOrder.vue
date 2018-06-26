<template>
    <div class="myOrder dd-column">
        <h1>1111</h1>
        <OrderItem v-for="(item,index) in orderItemData" :key="index" :orderItem="item"></OrderItem>
    </div>
</template>
<script>
import OrderItem from "@/components/OrderItem";
export default {
  data() {
    return {
      orderItemData: []
    };
  },
  mounted() {
    this.axios.get("http://localhost:8889/").then(body => {
      console.log("body.data.myOrderData--->", body.data.myOrderData);
      this.orderItemData = body.data.myOrderData;
    });
  },
  components: {
    OrderItem
  }
};
</script>
<style scoped>
</style>
