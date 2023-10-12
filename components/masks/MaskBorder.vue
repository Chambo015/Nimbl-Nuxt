<template>
    <div class="border_polygon bg-black"></div>
</template>

<script setup lang="ts"></script>

<style scoped>
.border_polygon {
    --v: 20px;
    --b: 2px;
    clip-path: polygon(
        0% var(--v),
        var(--v) 0%,
        calc(100% - var(--v)) 0%,
        100% var(--v),
        100% calc(100% - var(--v)),
        calc(100% - var(--v)) 100%,
        var(--v) 100%,
        0% calc(100% - var(--v)),
        var(--b) calc(100% - var(--v)),
        calc(var(--v) + var(--b)) calc(100% - var(--b)),
        calc(100% - (var(--v) + var(--b))) calc(100% - var(--b)),
        calc(100% - var(--b)) calc(100% - var(--v)),
        calc(100% - var(--b)) var(--v),
        calc(100% - var(--v)) var(--b),
        var(--v) var(--b),
        var(--b) var(--v),
        var(--b) calc(100% - var(--v)),
        0% calc(100% - var(--v))
    );
}
</style>
