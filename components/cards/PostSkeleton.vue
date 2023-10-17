<template>
    <div class="w-[300px]">
        <div class="flex w-full items-center">
            <USkeleton class="h-[55px] w-[55px] flex-shrink-0" />
            <div class="mx-4">
                <USkeleton class="h-[20px] w-[100px] flex-shrink-0" />
                <USkeleton class="mt-1 h-[20px] w-[50px] flex-shrink-0" />
            </div>
            <USkeleton class="ml-auto h-[36px] w-[90px] flex-shrink-0" />
        </div>
        <div class="mt-6 flex h-[96px] w-[300px] cursor-pointer flex-col justify-between">
            <USkeleton class="h-[16px] w-[300px]" />
            <USkeleton class="h-[16px] w-[300px]" />
            <USkeleton class="h-[16px] w-[300px]" />
            <USkeleton class="h-[16px] w-[300px]" />
        </div>
        <USkeleton class="mt-4 h-[200px] w-[300px]" />
        <div class="mt-4 flex justify-between">
            <USkeleton class="h-[22px] w-[90px]" />
            <USkeleton class="h-[22px] w-[50px]" />
            <div class="ml-2 flex items-center gap-2">
                <USkeleton class="h-[22px] w-[22px]" />
                <USkeleton class="h-[22px] w-[22px]" />
            </div>
        </div>
        <USkeleton class="mt-2 h-[25px] w-[300px]" />
    </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
