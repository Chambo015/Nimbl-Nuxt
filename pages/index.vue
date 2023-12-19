<template>
  <div>
      <NuxtLayout name="main">
          <div class="flex h-full pt-[20px] pl-[20px]">
            <div class="w-[500px]">
              <div class="w-[500px] relative" :style="backgroundStyles">
              </div>
              <div class="mt-5 w-[500px]"><SidebarMainTable  /></div>
            </div>
          </div>
      </NuxtLayout>
  </div>
</template>

<script setup>
const img = useImage()
const backgroundStyles = computed(() => {
  const imgUrl = img('/img/cs-go.png', { width: 500, format: 'webp'})
  return { backgroundImage: `url('${imgUrl}')`, aspectRatio: 16/9 }
})
</script>