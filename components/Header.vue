<template>
    <header class="flex h-[82px] items-center bg-header-bg">
        <div class="flex items-center">
            <NuxtImg format="webp" src="/img/logo.png" alt="logo" height="65" width="65" class="h-[65px] w-[65px]" />
            <span class="gradient-text ml-2 font-ethnocentric text-[27px] leading-none">NIMBL</span>
        </div>
        <label class="w-[580px] px-5 py-[14px] relative ml-9">
            <masksMaskBorder class="bg-white/10 w-full h-full absolute inset-0" /> 
            <input type="text" placeholder="GPT Search..." class="bg-transparent outline-none text-white text-lg leading-none" />
            <button class="w-[90px] absolute right-[2px] top-[2px] bottom-[2px] flex items-center justify-center z-10">
                <MasksMaskOctagon class="bg-octagon-gradient w-full h-full absolute inset-0 z-10" />
                <IconsSearch />
            </button>
        </label>
    </header>
</template>
