<template>
<div class="modal-wrapper -z-10">
    <teleport to="body">
        <transition name="fade-in">
            <div v-if="show" @click="toggleModal" class="overlay   absolute left-0 bottom-0 right-0 top-0 flex items-center justify-center">
            <div class="modal mt-10 bg-white shadow-lg rounded-md px-4 py-2 relative">
                <div class="message flex flex-col items-center justify-center ">
                    <h4 class="text-center font-bold text-2xl">QR Code Maxed!</h4>
                    <p class="text-center">Sorry!
                        <br />
                        Cannot generate more than 10 QR Codes
                    </p>
                </div>
                <div @click.stop="toggleModal" class=" z-20 close-modal cursor-pointer absolute top-2 right-2">
                    <svg  class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="red">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
            </div>
            </div>
        </transition>
    </teleport>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
   methods:{
       ...mapActions(['modalToggler']),
       toggleModal(){
           this.modalToggler();
       }
   },
   computed:{
       ...mapGetters(['showModal']),
       show(){
           return this.showModal;
       }
   },
   created(){
       console.log(this.showModal);
   }
}
</script>

<style scoped>
.overlay{
    background: rgba(0, 0, 0, .34);
    z-index: 5;
}

.modal{
    background-color: white;
    z-index: 200;
}

/* animation for result slide in */
@keyframes fade-in {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  70% {
    transform: scale(.7);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.slide-in-enter-active {
  animation: fade-in 0.5s ease-in-out;
}


svg{
    stroke: #8d2828;
}
</style>