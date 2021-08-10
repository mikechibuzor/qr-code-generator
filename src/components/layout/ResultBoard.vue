<template>
  <div class="result-board w-full flex flex-col items-center justify-center relative mb-10 "  >

        <!-- Generated QR Code Image goes here -->
        <div class="QR-Code-Image flex items-center justify-center  w-full h-56 rounded-md  shadow-lg mb-5">
          <img v-if="userUrl" class="w-full h-full" :src="imgSrc" alt="qr-code image"/>
          <p v-else class="text-sm xl:text-base text-center text-white">Please enter a url in the input field </p>
        </div>

        <!-- Buttons -->
        <div
          class="buttons mt-4 xl:mt-0 flex items-center justify-between px-4"
        >
          <a href="" target="_blank" download="qr-code-image" >
            <button @click="removeQrImage" class="xl:px-4 px-2.5 text-xs xl:text-base  grn py-1.5  text-white opacity-90 rounded-sm xl:rounded-md shadow-md  mr-5">
              Download QR Code
            </button>            
          </a>
          <button v-if="historyMode"
            class="xl:px-4 px-2.5 text-xs xl:text-base flex items-center rd py-1.5 text-white opacity-90 rounded-sm xl:rounded-md shadow-md" 
            disabled = "true" 
            @click="removeQrImage"
          >
              <span class="mr-2">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
              </span>
              <span>Delete</span>
          </button>
        </div>

        <!-- User Entered Url -->
        <div class="user-entered-url absolute w-full -bottom-14 flex items-center justify-center px-4 py-1.5 left-0 right-0  italic">
          <p>{{ userUrl }}</p>
        </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props:['userUrl', 'imgSrc', 'historyMode'],
  methods:{
    ...mapActions({
      removeQrImage: 'removeHistoryObj'
    }),
    removeQrImages(){
      console.log('gooot heeeree');
    }
  },

 
}
</script>

<style >
button.rd {
  background-color: #8d2828;
}

button {
  opacity: 0.87;
  transition: all 0.3s ease-in;
}

button:hover {
  opacity: 1;
}

button.grn {
  background-color: rgba(15, 126, 57, 0.86);
}

.QR-Code-Image {
  background-color: #8d2828;
}

.user-entered-url p{
    border-bottom: 2px solid #fff;
}
@media screen and (max-width: 768px) {
  .result-board {
    width: 100%;
  }
}
</style>