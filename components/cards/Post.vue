<template>
    <div class="w-[300px]">
        <div class="flex w-full items-center">
            <UserAvatar class="h-[55px] w-[55px] flex-shrink-0" />
            <div class="mx-4">
                <p class="font-rollbox text-base font-bold leading-tight text-white">Adilkhan</p>
                <p class="font-tt-octosquares text-sm text-white/90">Rank 1</p>
            </div>
            <UButton color="gray" size="md" variant="solid" label="Following" class="ml-auto font-medium" />
        </div>
        <div class="relative mt-6 w-[300px] cursor-pointer">
            <p class="read_more relative line-clamp-4 font-tt-octosquares text-base leading-normal">
                We call them shit coins but what people don’t understand is that it’s a giant experiment that is
                constantly improving on the financ arrow and javascript so it Html css
            </p>
        </div>
        <div class="mt-4 cursor-pointer">
            <NuxtImg
                format="webp"
                src="/img/long_video.png"
                alt="long_video"
                width="300"
                class="max-h-[300px] w-[300px] object-cover" />
        </div>
        <div class="mt-4 flex justify-between font-tt-octosquares leading-none text-white/50 [&_button:hover]:text-white">
            <div class="flex cursor-pointer items-center gap-2">
                <button class=""><Icon name="material-symbols:thumb-up-outline" size="20" /></button>
                <span>50k</span>
                <button>
                    <Icon name="material-symbols:thumb-down-outline" size="20" class="translate-y-[2px]" />
                </button>
            </div>
            <span class="mx-2 text-sm">1h ago</span>
            <div class="ml-2 flex items-center gap-2">
                <button><Icon name="material-symbols:bookmark-outline" size="22" /></button>
                <button><Icon name="typcn:arrow-forward-outline" size="22" /></button>
            </div>
        </div>
        <div class="mt-2"><UButton color="white" size="sm" variant="link" block label="37 comments" class="ml-auto text-white/70 hover:text-white font-medium !bg-[rgba(17,17,17,0.70)]" /></div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
