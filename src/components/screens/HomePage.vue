<template>
  <div class="wrapper h-screen w-screen">
    <!-- Nav Starts -->
    <nav-bar move="history"></nav-bar>
    <!-- Nav Ends -->

    <!-- Header Starts -->
    <the-head text="URL-QR CODE GENERATOR"></the-head>
    <!-- Header Ends -->

    <!-- Form starts -->
    <form class="flex flex-col    items-center justify-center py-5">
      <input
        v-model.trim="userEnteredUrl"
        class="px-5 outline-none border-none text-white py-3 rounded-md shadoown-md w-full"
        type="text"
        placeholder="Enter URL here..."
      />
      <button
        @click.prevent="showResultHandler"
        class="xl:px-8 px-3 text-sm xl:text-base rd py-2 mb-8 text-white mt-6 opacity-90 rounded-md shadow-md"
        type="submit"
      >
        Generate QR Code
      </button>
    </form>
    <!-- Form Ends -->

    <!-- QR Result Starts -->
    <div class="result-container flex items-center justify-center">
      <transition name="slide-in">
        <result-board
          :userUrl="userEnteredUrl"
          :imgSrc="imgSource"
          v-if="showResult"
        ></result-board>
      </transition>
    </div>
  </div>
</template>

<script>

import axios from "axios";
import NavBar from "../layout/NavBar.vue";
import TheHead from "../layout/TheHead.vue";
import ResultBoard from "../layout/ResultBoard.vue";
import { mapActions, mapGetters } from "vuex";


export default {
  components: {
    NavBar,
    TheHead,
    ResultBoard,
  },

  data() {
    return {
      showResult: false,
      imgSource: null,
      userEnteredUrl: "",
      downloadUrl: null,
    };
  },

  methods: {

    ...mapActions(["addHistoryObj", "removeHist"]),

    showResultHandler() {
      this.qrCodeImageSource();
      this.showResult = true;

      const testShow = this.fetchHistory;
      console.log(testShow);
    },

    qrCodeImageSource() {
      // if a url is entered
      if (this.userEnteredUrl) {
        /* --------
            Regex check to help remove 'http(s) prefix as i noticed that it gives an error
            when it is attached to the entered url
            -------
        */
        const regexHttpCheck = /https?:\/\//gi;
        this.userEnteredUrlTrimmed = this.userEnteredUrl.replace(regexHttpCheck, '');
        console.log(this.userEnteredUrl);
        
        const historyObject = {
          id: this.fetchHistory.length,
          userEnteredUrl: this.userEnteredUrl,
          imgUrl: `https://qrtag.net/api/qr_50.png?url=https://${this.userEnteredUrlTrimmed}`,          
        };
        this.addHistoryObj(historyObject);      

        /* ----- 
            logic here is that the result board on the homepage always show the last entered url
        */
        this.imgSource = this.fetchHistory[this.fetchHistory.length - 1].imgUrl;
  
      }
      return this.imgSource;
    },

  },

  computed: {

    ...mapGetters({
      fetchHistory: "getHistory",
    }),

    embedQrImgSource() {
      return this.imgSource;
    },

    downloadImgSource() {
      return this.downloadUrl;
    },

  },

  mounted() {
    axios
      .get(
        "https://young-falls-95531.herokuapp.com/https://www.qrtag.net/api/qr_4.png?url=https://nairaland.com"
      )
      .then((response) => {
        console.log(response);
      });
  },
};
</script>

<style>
.wrapper {
  background-color: #ffeac9;
}

form {
  width: 40%;
  margin: 0 auto;
}

form input {
  background-color: rgba(118, 130, 122, 0.76);
  transition: all 0.25s ease-out;
}

form input:hover,
form input:active {
  background-color: rgb(228, 182, 182);
}

::placeholder {
  color: white;
}

.result-container {
  margin: auto;
  width: 30%;
}

/* animation for result slide in */
@keyframes slide-in {
  0% {
    transform: translateY(-15rem);
    opacity: 0;
  }
  70% {
    transform: translateY(2rem);
    opacity: 0.8;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.slide-in-enter-active {
  animation: slide-in 0.3s ease-in-out;
}

@media screen and (max-width: 768px) {
  form,
  .result-container {
    width: 85%;
  }
}
</style>
