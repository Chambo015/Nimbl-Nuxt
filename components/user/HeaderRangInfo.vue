<template>
    <div class="flex items-center ">
      <div class="w-[200px]">
          <div class="flex items-center">
              <p class="flex-shrink-0 font-rollbox text-[22px] font-bold leading-tight">Adilkhan</p>
              <span class="lvl_text "
                  >15 lvl</span
              >
          </div>
          <div class="h-3 w-full bg-[#333333] relative mt-2">
            <div class="w-[30%] h-full bg-[url('/img/frame-cell.png')] shadow-[0_0_3px_1px_#7885D0] "></div>
            <NuxtImg
                format="webp"
                src="/img/rating-design1.png"
                alt="rating-design1"
                height="34"
                width="37.5"
                class="absolute right-0 top-1/2 h-[34px] w-[37.5px] -translate-y-1/2 translate-x-1/2 select-none pointer-events-none" />
          </div>
      </div>
      <userAvatar primary class="w-[55px] h-[55px] flex-shrink-0 ml-4" />
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.lvl_text {
    @apply relative before:absolute before:-left-3 before:top-1/2 before:block before:h-[5px] before:w-[5px] before:rounded-full before:bg-[#8744AE] gradient-text ml-5 flex-shrink-0 font-tt-octosquares text-lg leading-tight before:-translate-y-1/2;
}
</style>
