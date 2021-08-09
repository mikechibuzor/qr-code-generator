<template>
  <div class=" wrapper  w-screen">

      <nav-bar move="home"></nav-bar>
      <the-head text="History"></the-head>

      <div class="result-containerr  px-16 py-6 gap-5 grid place-items-center grid-cols-1 xl:grid-cols-3">
        <result-board 
        v-for="history in fetchHistory"
        :key="history.id"
        :userUrl="history.userEnteredUrl"
        :imgSrc="history.imgUrl"
        ></result-board>
      </div>

  </div>
</template>

<script>

import NavBar from '../layout/NavBar.vue';
import TheHead from '../layout/TheHead.vue';
import ResultBoard from '../layout/ResultBoard.vue';
import { mapGetters } from 'vuex';

export default {
  components:{
    NavBar,
    TheHead,
    ResultBoard,
  },
  computed:{
    ...mapGetters({
      fetchHistory: 'getHistory'
    })
  }
}
</script>

<style>

</style>