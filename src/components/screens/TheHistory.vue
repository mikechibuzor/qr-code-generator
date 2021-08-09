<template>
  <div class=" wrapper  w-screen">

      <nav-bar move="home"></nav-bar>
      <the-head text="History"></the-head>

      <div class="result-containerr px-16 py-6 gap-5 grid grid-cols-1 xl:grid-cols-3">
        <result-board v-for="index in 10" :key="index"></result-board>
      </div>
  </div>
</template>

<script>

import NavBar from '../layout/NavBar.vue';
import TheHead from '../layout/TheHead.vue';
import ResultBoard from '../layout/ResultBoard.vue';

export default {
  components:{
    NavBar,
    TheHead,
    ResultBoard,
  }
}
</script>

<style>

</style>