<template>
    <header class="flex h-[82px] items-center border-b border-[#38004B] bg-header-bg px-5">
        <div class="flex items-center">
            <NuxtImg format="webp" src="/img/logo.png" alt="logo" height="65" width="65" class="h-[65px] w-[65px]" />
            <span class="gradient-text ml-2 min-w-[115px] font-ethnocentric text-[27px] font-extrabold leading-none"
                >NIMBL</span
            >
        </div>
        <label
            class="relative ml-9 w-[280px] py-[14px] pl-5 pr-[100px] transition-all delay-300 duration-500 focus-within:w-[580px] hover:w-[580px] hover:delay-0 isolate">
            <masksMaskBorder class="absolute inset-0 h-full w-full bg-[#221E2E] z-20" />
            <input
                type="text"
                placeholder="GPT Search..."
                class="w-full bg-transparent text-lg leading-none text-white outline-none" />
            <button
                class="group absolute bottom-[2px] right-[0px] top-[2px] z-10 flex w-[90px] items-center justify-center">
                <MasksMaskOctagon class="absolute inset-0 z-0 h-full w-full bg-octagon-gradient" />
                <Icon
                    name="material-symbols:search"
                    color="white"
                    class="relative z-10 group-hover:drop-shadow-icon group-active:drop-shadow-none"
                    size="26" />
            </button>
        </label>
        <button class="group ml-4 h-[54px] w-[54px] flex-shrink-0">
            <masksMaskOctagon class="flex h-full w-full items-center justify-center bg-octagon-gradient">
                <Icon
                    name="carbon:microphone"
                    color="white"
                    class="relative z-10 flex-shrink-0 transition-all group-hover:drop-shadow-icon group-active:drop-shadow-none"
                    size="28"
            /></masksMaskOctagon>
        </button>
        <div
            class="animation-card-hover group relative ml-auto h-[50px] w-[322px] cursor-pointer overflow-hidden bg-gradient-header-secondary py-2 pl-[11px] pr-[70px]  ">
            <p class="font-rollbox text-base leading-none text-white/70">Weekly Leaderboard</p>
            <p class="font-tt-octosquares text-sm leading-tight text-white">#159 of 21.788</p>
            <NuxtImg
                format="webp"
                src="/img/rocket_img.png"
                width="110"
                height="110"
                alt="rocket_img"
                class="absolute right-0 top-0 -translate-y-[25px] translate-x-1/4 transition-all duration-1000 group-hover:drop-shadow-icon" />
        </div>
        <div
            class="animation-card-hover group main-bg relative ml-2 h-[50px] w-[210px] cursor-pointer overflow-hidden py-[11px] pl-[60px]">
            <NuxtImg
                format="webp"
                src="/img/logo.png"
                alt="logo"
                height="46"
                width="46"
                class="absolute left-2 top-1/2 h-[46px] w-[46px] -translate-y-1/2 saturate-0 transition-all duration-1000 group-hover:drop-shadow-icon" />
            <p class="font-rollbox text-base leading-none text-white/70">Your points</p>
            <p class="font-tt-octosquares text-sm leading-tight text-white">22.514</p>
        </div>
        <button class="group ml-4 h-[50px] w-[50px] flex-shrink-0">
            <masksMaskOctagon class="flex h-full w-full items-center justify-center bg-octagon-gradient">
                <Icon
                    name="mdi:bell-outline"
                    color="white"
                    class="relative z-10 flex-shrink-0 transition-transform duration-500 group-hover:scale-125"
                    size="24"
            /></masksMaskOctagon>
        </button>
        <userHeaderRangInfo class="flex-shrink-0 ml-5" />
    </header>
</template>

<script setup lang="ts">
/* inset 0 0 13px 3px #63535347 */
</script>

<style scoped>
.animation-card-hover {
    @apply delay-300 duration-500 hover:delay-0 ring-1 hover:ring-[#38004B] ring-white/5 transition-all;
}
</style>
