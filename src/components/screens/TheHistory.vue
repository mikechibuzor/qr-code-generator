<template>
  <div class=" wrapper  w-screen relative">

    <!-- refresh button starts-->
      <div @click="historyReset" class="refresh-button flex items-center justify-center absolute cursor-pointer top-3 right-5">
        <span class="flex items-center justify-center mr-0.5 xl:mr-2">
          <svg  class="xl:h-5 h-3 w-3 xl:w-5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </span>
        <span class="text-xs xl:text-sm tracking-widest">
          Refresh
        </span>
      </div>
    <!-- refresh button ends -->

      <nav-bar move="home"></nav-bar>
      <the-head text="History"></the-head>

      <div class="result-containerr  px-16 py-6 gap-12 grid place-items-center grid-cols-1 xl:grid-cols-3">
        <result-board 
        v-for="history in fetchHistory"
        :key="history.id"
        :id="history.id"
        :validatee="history.validation"
        :userUrl="history.userEnteredUrl"
        :imgSrc="history.imgUrl"
        historyMode="yes"
        ></result-board>
      </div>

  </div>
</template>

<script>

import NavBar from '../layout/NavBar.vue';
import TheHead from '../layout/TheHead.vue';
import ResultBoard from '../layout/ResultBoard.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  components:{
    NavBar,
    TheHead,
    ResultBoard,
  },
  methods:{
    ...mapActions(['historyReset']),
    reverseFetchedHistoryHandler(){
     const fetchedHistory = this.fetchHistory;
     const reversedHistory = fetchedHistory.reverse();
     return reversedHistory; 
    }
  },
  computed:{
    ...mapGetters({
      fetchHistory: 'getHistory',
    }),
    reversedFetchedHistory(){
      console.log(this.reverseFetchedHistoryHandler())
      return this.reverseFetchedHistoryHandler();
    }
  },
}
</script>

<style scoped>
.refresh-button:hover span svg{
  transform: rotate(-360deg);
}

</style>