<template>
    
    <nav class="flex justify-end items-center px-8 py-3  ">
      <router-link
        :to="move"
        class="relative cursor-pointer tracking-widest flex items-center justify-center"
        >
        <span>
            <svg v-if=" move === 'home'"  class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
        </span>
        <span>{{ move }}</span>
      </router-link>
    </nav>
   
</template>

<script>
export default {
    props:['move']
}
</script>

<style >
nav a{
    text-transform: capitalize;
}
nav a::after {
  position: absolute;
  content: "";
  height: 0.4rem;
  width: 0.4rem;
  border-radius: 50%;
  background: #8d2828;
  bottom: -0.2rem;
  left: 45%;
  transition: all 0.2s ease-in;
}

nav a:hover::after {
  border-radius: 0%;
  left: 0%;
  right: 0%;
  height: 0.2rem;
  width: 100%;
}
</style>