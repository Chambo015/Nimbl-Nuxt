<template>
    <div class="octagon_mask">
        <slot />
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
        var(--rV) 100%,
        var(--v) 100%,
        0% var(--rV)
    );
}
</style>
