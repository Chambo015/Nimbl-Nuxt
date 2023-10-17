<template>
    <div class="octagon_mask w-[55px] h-[55px] relative isolate overflow-hidden">
        <div class="octagon_mask  z-10" :class="{'absolute left-1 right-1 top-1 bottom-1': primary}">
          <NuxtImg
              format="webp"
              src="/img/users/user1.png"
              alt="users"
              class="w-full h-full pointer-events-none select-none object-cover " />
        </div>
        <NuxtImg v-if="primary"
            format="webp"
            src="/img/frame-avatar-nimbl.png"
            alt="frame-avatar-nimbl"
            class="pointer-events-none absolute inset-0 z-50 h-full w-full select-none" />
    </div>
</template>

<script setup lang="ts">
defineProps({
    primary: Boolean
})
</script>

<style scoped>
.octagon_mask {
    --v: 30%;
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
