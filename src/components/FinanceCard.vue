<script setup lang="ts">
import { formatCurrency } from '@/utils/formatCurrency'
defineProps<{ label: string; amount: number }>()
</script>

<template>
  <div class="rounded-2xl bg-zinc-800 p-4 shadow flex items-center justify-between">
    <span class="text-zinc-300">{{ label }}</span>
    <strong class="text-zinc-100">{{ formatCurrency(amount) }}</strong>
  </div>
</template>
