<template>
    <div class="foodItem dd-row">
        <div class="left">
            <img src="@/assets/img/logo.png" alt="具体参数">
        </div>
         <div class="right dd-column">
            <div>煎饼</div>
            <div class="dd-row ">
                <p>月售 24</p>
            </div>
            <div class="introduce">简介：好吃的煎饼非常的好吃呀</div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.foodItem {
  z-index: 100;
  background: #ccc;
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

