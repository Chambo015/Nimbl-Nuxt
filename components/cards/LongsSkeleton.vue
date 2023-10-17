<template>
  <div class="w-[300px] group cursor-pointer">
    <div class="relative w-[300px] h-[170px]">
      <USkeleton class="h-[170px] w-[300px]" />
    </div>
    <div class="mt-4 flex items-center h-[40px]">
      <USkeleton class="h-[35px] w-[35px] flex-shrink-0" />
      <USkeleton class="h-[40px] flex-grow flex-shrink-0 ml-[10px] " />
    </div>
    <div class="mt-[10px] flex text-xs items-center justify-between">
      <USkeleton class="h-[20px] w-[88px] flex-shrink-0" />
      <USkeleton class="h-[20px] w-[60px] flex-shrink-0" />
      <USkeleton class="h-[20px] w-[60px] flex-shrink-0" />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>