<template>
    <div
        @mouseleave="mouseOverBlock"
        class="octagon_mask fixed left-1/2 isolate z-10 flex origin-bottom -translate-x-1/2 scale-75 cursor-pointer items-center justify-center gap-3 px-2 py-2 transition-all delay-300 duration-500 hover:scale-100 hover:delay-0"
        :class="[
            isOpenNav
                ? 'bottom-[10px] pb-2 opacity-100 before:w-[320px]'
                : '-bottom-2 pb-5 opacity-60 before:w-[68px] hover:opacity-100',
        ]">
        <button @click="isOpenNav = true" v-if="!isOpenNav" class="absolute inset-0 z-40"></button>
        <TransitionGroup name="list">
            <button
                @click="handleNavItemClick('marketplace')"
                v-if="isOpenNav || activeNav === 'marketplace'"
                class="h-[50px] w-[50px]">
                <UTooltip text="Marketplace" :open-delay="delayOpenTooltip" :ui="{base: 'font-ethnocentric'}">
                    <iconsNavMarketplace />
                </UTooltip>
            </button>
            <button
                @click="handleNavItemClick('longs')"
                v-if="isOpenNav || activeNav === 'longs'"
                class="h-[50px] w-[50px]">
                <UTooltip text="Longs" :open-delay="delayOpenTooltip" :ui="{base: 'font-ethnocentric'}">
                    <iconsNavLongs />
                </UTooltip>
            </button>
            <a
                @click="handleNavItemClick('main')"
                v-if="isOpenNav || activeNav === 'main'"
                class="h-[55px] w-[55px] flex-shrink-0 ">
                <UTooltip text="Main" :open-delay="delayOpenTooltip" :ui="{base: 'font-ethnocentric'}">
                    <NuxtImg
                        format="webp"
                        src="/img/logo.png"
                        alt="logo"
                        height="55"
                        width="55"
                        class="h-[55px] w-[55px] flex-shrink-0" />
                </UTooltip>
            </a>
            <button
                @click="handleNavItemClick('chat')"
                v-if="isOpenNav || activeNav === 'chat'"
                class="h-[50px] w-[50px] flex-shrink-0">
                <UTooltip text="Chat" :open-delay="delayOpenTooltip" :ui="{base: 'font-ethnocentric'}">
                    <iconsNavChat />
                </UTooltip>
            </button>
            <button
                @click="handleNavItemClick('channel')"
                v-if="isOpenNav || activeNav === 'channel'"
                class="h-[50px] w-[50px]">
                <UTooltip text="My Channel" :open-delay="delayOpenTooltip" :ui="{base: 'font-ethnocentric'}">
                    <IconsNavChannel />
                </UTooltip>
            </button>
        </TransitionGroup>
    </div>
</template>

<script setup lang="ts">
type NavTypes = "main" | "channel" | "chat" | "marketplace" | "longs";
const isOpenNav = ref(false);
const activeNav = ref<NavTypes>("main");
const delayOpenTooltip = 300;

const handleNavItemClick = (nav: NavTypes) => {
    if (!isOpenNav.value) return;
    activeNav.value = nav;
    isOpenNav.value = false;
};

const closeNavMenu = () => {
    isOpenNav.value = false;
};
let timeoutMouseOver: NodeJS.Timeout;
const mouseOverBlock = () => {
    timeoutMouseOver = setTimeout(closeNavMenu, 200);
};
onUnmounted(() => {
    clearTimeout(timeoutMouseOver);
});
</script>

<style scoped>
.octagon_mask::before {
    content: "";
    transition: all 300ms;
    @apply absolute left-1/2 top-1/2 block h-full -translate-x-1/2 -translate-y-1/2 bg-[#150c29] shadow-[0px_2px_5px_rgba(101,41,225,0.35)];
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
button {
    display: block;
}

.list-move {
    transition: all 0.5s ease;
}
.list-enter-active {
    transition: all 0.5s ease;
}
.list-leave-active {
    transition: all 0.5s ease;
}
.list-enter-from {
    opacity: 0;
    transform: translateY(30px);
}
.list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
.list-leave-active {
    position: absolute;
}
</style>
