<template>
 <teleport to="body">
    <div v-if="showModalhandler" class="overlay absolute left-0 bottom-0 right-0 top-0 flex items-center justify-center">
      <div class="modal mt-10 bg-white shadow-lg rounded-md px-4 py-2 relative">
          <div class="message flex flex-col items-center justify-center ">
              <h4 class="text-center font-bold text-2xl">QR Code Maxed!</h4>
              <p class="text-center">Sorry!
                  <br />
                  Cannot generate more than 10 QR Codes
              </p>
          </div>
          <div class="close-modal cursor-pointer absolute top-2 right-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="red">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
          </div>
      </div>
    </div>
 </teleport>
</template>

<script>
export default {
    props:['show'],
    computed:{
        showModalHandler(){
            return this.show;
        }
    }
}
</script>

<style scoped>
.overlay{
    background: rgba(0, 0, 0, .34);
}


svg{
    stroke: #8d2828;
}
</style>