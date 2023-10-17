<template>
  <div class="w-[300px] group cursor-pointer">
    <div class="relative w-[300px] h-[170px]">
      <NuxtImg format="webp" src="/img/long_video.png" alt="long_video" height="170" width="300" class="h-[170px] w-[300px]" />
      <div class="absolute right-0 bottom-0 bg-[#01060C] px-1"><span class="text-white/50 font-tt-octosquares font-normal text-base leading-none ">10:56</span></div>
    </div>
    <div class="mt-4 flex items-center h-[40px]">
      <UserAvatar class="!h-[35px] !w-[35px] flex-shrink-0" />
      <p class="ml-[10px] font-rollbox font-bold line-clamp-2 leading-tight">Herman Explains How He Made $90 Million on users get some one and</p>
    </div>
    <div class="mt-[10px] font-tt-octosquares flex text-xs items-center justify-between text-white/50 h-[20px]">
      <span class="text-sm group-hover:text-white">Nimbl.Tv</span>
       <div class="flex items-center gap-1"><Icon name="mdi:eye-outline" size="14"/> <span>46k Views</span></div>
     <div class="flex items-center gap-1"><Icon name="mdi:clock-time-three-outline" size="14"/> <span>6 Months ago</span></div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>