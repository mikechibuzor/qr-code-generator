<template>
  <header class="flex items-center justify-center py-10">
      <h1 :class="{ relative: text === 'History'}" class="text-xl xl:text-3xl font-bold tracking-widest">
        {{ text }}
      </h1>
  </header>
</template>

<script>
export default {
    props:['text']
}
</script>

<style scoped>
.relative{
  position: relative;
}
/* h1::before{
 position: absolute;
 content: '';
 height: .2rem;
 border-radius: .2rem;
 left: 30%;
 right: 30%;
 bottom: -.5rem;
 background-color:#8d2828; 
} */
</style>