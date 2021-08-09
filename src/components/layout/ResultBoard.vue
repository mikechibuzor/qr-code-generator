<template>
  <div class="result-board flex flex-col items-center justify-center"  >
        <div class="QR-Code-Image flex items-center justify-center  w-full h-56 rounded-md  shadow-lg mb-5">
          <img v-if="userUrl" class="w-full h-full"  alt="qr-code image"/>
          <p v-else class="text-sm xl:text-base text-center text-white">Please enter a url in the input field </p>
        </div>
        <div
          class="buttons mt-4 xl:mt-0 flex items-center justify-between px-4"
        >
          <a href="" target="_blank" download="qr-code-image" >
            <button class="xl:px-4 px-2.5 text-xs xl:text-base  grn py-1.5  text-white opacity-90 rounded-sm xl:rounded-md shadow-md  mr-5">
              Download QR Code
            </button>            
          </a>
          <button 
            class="xl:px-4 px-2.5 text-xs xl:text-base rd py-1.5 text-white opacity-90 rounded-sm xl:rounded-md shadow-md" 
            disabled = "true" 
          >
            Share QR Code
          </button>
        </div>
  </div>
</template>

<script>
export default {
  props:['userUrl'],
 
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



@media screen and (max-width: 768px) {
  .result-board {
    width: 100%;
  }
}
</style>