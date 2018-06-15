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
                <li v-for="item in dataArray" v-bind:key="item">{{item}}</li>
            </ul>
     
        </div>

    </div>
</template>
<script>
import back from './Back';
export default {
  name: "My",
  data () {
    return {
      dataArray: [1, 2, 3]
    }
  },
  components: {
    back
  }
}
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
