<template>
  <div class="wrapper h-screen w-screen">

      <!-- Nav Starts -->
      <nav class="flex justify-end items-center px-8 py-3  ">
          <router-link class="relative cursor-pointer tracking-widest ">History</router-link>
      </nav>
      <!-- Nav Ends -->

      <!-- Header Starts -->
      <header class="flex items-center justify-center py-10">
          <h1 class="text-xl xl:text-3xl font-bold tracking-widest">URL-QR CODE GENERATOR</h1>
      </header>
      <!-- Header Ends -->

      <!-- Form starts -->
      <form class="flex flex-col    items-center justify-center py-5">
          <input class="px-5 outline-none border-none text-white py-3 rounded-md shadoown-md w-full" type="text" placeholder="Enter URL here..." />
          <button class="xl:px-8 px-3 text-sm xl:text-base rd py-2 mb-8 text-white mt-6 opacity-90 rounded-md shadow-md" type="submit">Generate QR Code</button>
      </form>
      <!-- Form Ends -->

      <!-- QR Result Starts -->
      <div class="result-board flex flex-col items-center justify-center">
          <div class="QR-Code-Image w-full h-56 rounded-md  shadow-lg mb-5">
              <img />
          </div>
          <div class="buttons mt-4 xl:mt-0 flex items-center justify-between px-4">
              <button class="xl:px-4 px-2.5 text-xs xl:text-base  grn py-1.5  text-white opacity-90 rounded-sm xl:rounded-md shadow-md  mr-5">Download QR Code</button>
              <button class="xl:px-4 px-2.5 text-xs xl:text-base rd py-1.5 text-white opacity-90 rounded-sm xl:rounded-md shadow-md">Share QR Code</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.wrapper{
    background-color:#FFEAC9;
}

nav router-link::after{
    position: absolute;
    content: '';
    height: .4rem;
    width: .4rem;
    border-radius: 50%;
    background: #8D2828;
    bottom: -.2rem;
    left: 45%;
    transition: all .2s ease-in;
}

nav router-link:hover::after{
    border-radius: 0%;
    left: 0%;
    right: 0%;
    height: .2rem;
    width: 100%;
}

form{
    width: 40%;
    margin: 0 auto;
}

form input{
    background-color: rgba(118, 130, 122, .76);
}

::placeholder{
    color: white;
}

button.rd{
    background-color:#8D2828;
}

button{
    opacity: .87;
    transition: all .3s ease-in;
}

button:hover{
    opacity: 1;
}

button.grn{
    background-color: rgba(15, 126, 57, .86);
}

.result-board{
    width: 30%;
    margin: 0 auto;
}

.QR-Code-Image{
    background-color: #8D2828;
}



@media screen and (max-width: 768px){
    form,
    .result-board{
        width: 85%;
    }
}
</style>