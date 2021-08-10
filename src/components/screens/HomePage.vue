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
        placeholder="enter url here... (www.nairaland.com)"
      />
      <button
        :disabled="historyCounter >= 10"
        :class="attachDisableClass"
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

    <!-- ModalDialogue -->
      <modal-dialogue 

        :show="showModal"
        
      ></modal-dialogue>
  </div>
</template>

<script>

import axios from "axios";
import NavBar from "../layout/NavBar.vue";
import TheHead from "../layout/TheHead.vue";
import ResultBoard from "../layout/ResultBoard.vue";
import ModalDialogue from "../layout/ModalDialogue.vue";
import { mapActions, mapGetters } from "vuex";


export default {
  components: {
    NavBar,
    TheHead,
    ModalDialogue,
    ResultBoard,
  },

  data() {
    return {
      showResult: false,
      imgSource: null,
      userEnteredUrl: "",
      downloadUrl: null,
      show: false,
    };
  },

  methods: {

    ...mapActions(["addHistoryObj", "removeHist", "historyCounterIncrease"]),

    showResultHandler() {
      if(this.historyCounter <= 10){
          this.qrCodeImageSource();
          this.showResult = true;
      }
      else{
        console.log('got here');
        this.show = true;
      }

    },

    qrCodeImageSource() {
      // if a url is entered
      if (this.userEnteredUrl) {
        /* --------
            Regex check to help remove 'http(s):// prefix as i noticed that it gives an error
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

        // increase history counter by 1
        this.historyCounterIncrease();
  
      }
      return this.imgSource;
    },

  },

  computed: {

    ...mapGetters({
      fetchHistory: "getHistory",
      historyCounter: 'getHistoryCounter',
      showModal: 'modalToggler'
    }),

    embedQrImgSource() {
      return this.imgSource;
    },

    downloadImgSource() {
      return this.downloadUrl;
    },
    attachDisableClass(){
      return{
        'disable-button': this.historyCounter === 10
      }
    },
    showC(){
      return this.show;
    }

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
  background-color: rgba(105, 110, 107, 0.884);
  transition: all 0.25s ease-out;
}

form input:hover,
form input:active {
  background-color: rgb(228, 182, 182);
}


.result-container {
  margin: auto;
  width: 30%;
}

/* disable button class */
/* for some reason, the disabled attribute is working on the button */
.disable-button{
  /* pointer-events: none; */
  cursor: not-allowed;
  opacity: .65;
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
