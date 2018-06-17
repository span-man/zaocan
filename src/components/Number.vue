<template>
    <div class="number dd-row">
        <div class="minus" @click="minus" >
            <img v-show="!!num" src="@/assets/img/minus.png" alt="-">
        </div>
        <div class="num" >
          <p v-show="!!num">
            {{num}}            
          </p>
        </div>
        <div class="add" @click="add" >
            <img src="@/assets/img/add.png" alt="+">
        </div>
    </div>
</template>
<script>
export default {
  data(){
    return{
      num: 0
    }
  },
  methods: {
    add() {
      this.num++;
      this.$emit('refreshbizlines',this.num)
    },
    minus() {
      if (this.num - 1 < 0) {
        return;
      }
      this.num--;
      this.$emit('refreshbizlines',this.num)
    }
  }
};
</script>
<style scoped>
.number {
  justify-content: flex-end;
  background: #cccccc;
  width: var(--number-width);
  height: var(--number-height);
}
.number > div {
  flex: 1;
}
.number .num {
    align-items: center;
    align-self: center;
    text-align: center;
}
/* 加减 */
.add,
.minus {
  width: 8pt;
  height: 8pt;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
}

.add img,
.minus img{
  width: 8pt;
  height: 8pt;
}
</style>

