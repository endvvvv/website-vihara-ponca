<!-- MainLayout.vue -->
<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <!-- Main content -->
    <a
      href="#main"
      class="sr-only focus:not-sr-only focus:absolute focus:m-2 focus:rounded-lg focus:bg-zinc-800 focus:px-3 focus:py-2 focus:text-white"
    >
      Lompat ke konten
    </a>

    <NavBar />

    <div class="flex-1">
      <RouterView />
    </div>

    <AppFooter class="mt-auto" />
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.18s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
