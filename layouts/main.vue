<template>
  <div class="flex flex-col h-screen">
    <Header />
    <main class="main-bg flex-grow overflow-hidden">
      <slot />
    </main>
    <Navigation />
  </div>
</template>

<script setup>

</script>