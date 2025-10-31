<!-- src/components/NavBar.vue -->
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n({ useScope: 'global' })
</script>

<template>
  <nav class="bg-zinc-950 text-zinc-100">
    <div class="mx-auto max-w-6xl px-4 py-3 flex items-center gap-6">
      <router-link to="/" class="font-semibold">Vihara Avalokitesvara</router-link>

      <div class="flex gap-4 text-sm">
        <router-link to="/">{{ t('nav.home') }}</router-link>
        <router-link to="/pmv">{{ t('nav.pmv') }}</router-link>
        <router-link to="/gabi">{{ t('nav.gabi') }}</router-link>
        <router-link to="/finance">{{ t('nav.finance') }}</router-link>
      </div>

      <div class="ml-auto flex items-center gap-2">
        <button class="text-xs px-2 py-1 rounded bg-zinc-800" @click="locale = 'id'">ID</button>
        <button class="text-xs px-2 py-1 rounded bg-zinc-800" @click="locale = 'en'">EN</button>
      </div>
    </div>
  </nav>
</template>