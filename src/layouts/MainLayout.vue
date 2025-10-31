<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-zinc-900 text-zinc-100 flex flex-col">
    <NavBar />
    <div class="flex-1">
      <router-view />
    </div>
    <AppFooter />
  </div>
</template>
