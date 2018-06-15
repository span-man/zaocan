<template>
    <div class="mechineNumber dd-row dd-v-center" >
        <div class="left dd-side-r">
            <img src="@/assets/img/logo.png" alt="">
        </div>
        <div class="right dd-column">
            <div>智能早餐机 012 号</div>
            <div class="dd-row dd-h-2side">
                <p>月售 24</p>
                <p>距离： 12646456km</p>
            </div>
            <div class="introduce">位置： 朝鲜苍术啊 阿朝鲜苍术啊 阿朝鲜苍术啊 阿朝鲜苍术啊 阿萨德按时地点</div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
.mechineNumber {
  z-index: 100;
  background: #000;
}
.left {
    flex: 1;
}
.left img {
  width: 20pt;
  height: 20pt;
}
.right{
    width: 250pt;
    color: #fff;
    font-size: 12pt;
}
.right .introduce{

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

}
</style>
