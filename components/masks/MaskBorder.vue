<template>
    <div class="border_polygon">
        <slot />
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.border_polygon {
    --v: 12px;
    --b: 2px;
    --rB: calc(var(--b) / 2);
    clip-path: polygon(
        0% var(--v),
        var(--v) 0%,
        calc(100% - var(--v)) 0%,
        100% var(--v),
        100% calc(100% - var(--v)),
        calc(100% - var(--v)) 100%,
        var(--v) 100%,
        0% calc(100% - var(--v)),
        var(--b) calc(100% - var(--v) - var(--rB)),
        calc(var(--v) + var(--rB)) calc(100% - var(--b)),
        calc(100% - var(--v) - var(--rB)) calc(100% - var(--b)),
        calc(100% - var(--b)) calc(100% - var(--v) - var(--rB)),
        calc(100% - var(--b)) calc(var(--v) + var(--rB)),
        calc(100% - var(--v) - var(--rB)) var(--b),
        calc(var(--v) + var(--rB)) var(--b),
        var(--b) calc(var(--v) + var(--rB)),
        var(--b) calc(100% - var(--v)),
        0% calc(100% - var(--v))
    );
}
</style>
