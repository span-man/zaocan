<template>
    <div class="number dd-row">
        <div class="minus" @click="minus" v-show="!!number">
            <img src="@/assets/img/minus.png" alt="-">
        </div>
        <div class="num" v-show="!!number">
            {{number}}
        </div>
        <div class="add" @click="add" >
            <img src="@/assets/img/add.png" alt="+">
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      number: 0
    };
  },
  methods: {
    add() {
      this.number++;
    },
    minus() {
      if (this.number - 1 < 0) {
        return;
      }
      this.number--;
    }
  }
};
</script>
<style scoped>
.number {
  justify-content: flex-end;
  background: #cccccc;
  width: 200pt;
  height: 140pt;
}
.number > div {
  flex: 1;
}
.number .num {
  background: red;
}
.add,
.minus {
  width: 12pt;
  height: 12pt;
}
</style>

