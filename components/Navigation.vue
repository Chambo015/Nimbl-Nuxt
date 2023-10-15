<template>
    <div class="fixed bottom-0 left-1/2 h-[58px] w-[58px] -translate-x-1/2 bg-[#150c29] octagon_mask flex items-center justify-center cursor-pointer pt-[5px] shadow-[0px_2px_5px_rgba(101,41,225,0.35)]">
        <div >
            <IconsMarketplace />
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>

.octagon_mask {
    --v: 12px;
    --rV: calc(100% - var(--v));
    clip-path: polygon(
        0% var(--v),
        var(--v) 0%,
        var(--rV) 0%,
        100% var(--v),
        100% var(--rV),
        100% 100%,
        0 100%,
        0% var(--rV)
    );
}</style>
