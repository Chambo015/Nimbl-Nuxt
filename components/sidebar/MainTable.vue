<template>
    <div class="w-full">
        <UTabs :items="items" :default-index="0" class=" ">
            <template #top="{item}">
                <div class="mt-2">
                    <div class="flex">
                        <UTabs :items="itemsTabDateRange" :default-index="0" />
                        <USelectMenu
                            color="gray"
                            v-model="selected"
                            :options="selects"
                            class="ml-3"
                            :ui="{
                                base: '!h-[40px] !ring-0',
                                color: {
                                    gray: {
                                        outline: '!bg-[#111111B2]',
                                    },
                                },
                            }" />
                    </div>
                </div>
            </template>
            <template #trending="{item}">
                <p>{{ item.label }}</p>
            </template>
            <template #rising="{item}">
                <p>{{ item.label }}</p>
            </template>
        </UTabs>
    </div>
</template>

<script setup lang="ts">
const items = [
    {
        key: "top",
        slot: "top",
        label: "Top",
    },
    {
        key: "trending",
        slot: "trending",
        label: "Trending",
    },
    {
        key: "rising",
        slot: "rising",
        label: "Rising",
    },
];

const itemsTabDateRange = [
    {
        key: "1d",
        label: "1d",
    },
    {
        key: "1w",
        label: "1w",
    },
    {
        key: "1m",
        label: "1m",
    },
    {
        key: "3m",
        label: "3m",
    },
];
const selects = ["All Categories", "Arlene Categories", "Webb Categories", "Tom Categories"];
const selected = ref(selects[0]);
</script>

<style scoped></style>
