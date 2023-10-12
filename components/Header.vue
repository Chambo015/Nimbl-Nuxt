<template>
    <header class="flex h-[82px] items-center bg-header-bg px-5">
        <div class="flex items-center">
            <NuxtImg format="webp" src="/img/logo.png" alt="logo" height="65" width="65" class="h-[65px] w-[65px]" />
            <span class="gradient-text ml-2 font-ethnocentric text-[27px] font-extrabold leading-none">NIMBL</span>
        </div>
        <label class="relative ml-9 w-[580px] py-[14px] pl-5 pr-[100px]">
            <masksMaskBorder class="absolute inset-0 h-full w-full bg-white/10" />
            <input
                type="text"
                placeholder="GPT Search..."
                class="w-full bg-transparent text-lg leading-none text-white outline-none" />
            <button class="absolute group bottom-[2px] right-[1px] top-[2px] z-10 flex w-[90px] items-center justify-center">
                <MasksMaskOctagon class="absolute inset-0 z-0 h-full w-full bg-octagon-gradient" />
                <Icon name="material-symbols:search" color="white" class="relative z-10 group-hover:drop-shadow-icon group-active:drop-shadow-none" size="26" />
            </button>
        </label>
        <button class="h-[54px] w-[54px] ml-4 flex-shrink-0 group">
            <masksMaskOctagon class="bg-octagon-gradient w-full h-full flex items-center justify-center">
                <Icon name="carbon:microphone" color="white" class="relative z-10 flex-shrink-0 transition-all group-hover:drop-shadow-icon group-active:drop-shadow-none" size="28"
            /></masksMaskOctagon>
        </button>
        <div class="bg-gradient-header-secondary pr-[70px] pl-[11px] py-2 ml-auto transition-all cursor-pointer hover:ring-1 ring-[#1f1334] relative overflow-hidden group">
            <p class="text-white/70 font-rollbox text-lg leading-none">Weekly Leaderboard</p>
            <p class="font-tt-octosquares text-lg text-white leading-tight">#159 of 21.788</p>
            <NuxtImg format="webp" src="/img/rocket_img.png" width="133" height="133" alt="rocket_img" class="absolute right-0 top-0 -translate-y-[25px] translate-x-1/4 transition-all group-hover:drop-shadow-icon" />
        </div>
    </header>
</template>

<script setup lang="ts">
/* inset 0 0 13px 3px #63535347 */
</script>