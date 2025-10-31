<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import FinanceCard from '@/components/FinanceCard.vue'
import { getLatestFinance, type FinanceRow } from '@/services/finance'

// state
const rows = ref<FinanceRow[]>([])

// load data saat mount
onMounted(async () => {
  rows.value = await getLatestFinance()
})

// ringkasan
const totalIn = computed(() =>
  rows.value.filter(r => r.type === 'income').reduce((a, b) => a + b.amount, 0)
)
const totalOut = computed(() =>
  rows.value.filter(r => r.type === 'expense').reduce((a, b) => a + b.amount, 0)
)
</script>

<template>
  <main class="mx-auto max-w-6xl p-6 space-y-6">
    <header>
      <h1 class="text-2xl font-semibold">Laporan Keuangan</h1>
      <p class="mt-2">Transparansi pemasukan &amp; pengeluaran ditampilkan di sini.</p>
    </header>

    <section class="grid gap-4 md:grid-cols-2">
      <FinanceCard label="Total Pemasukan (sample)" :amount="totalIn" />
      <FinanceCard label="Total Pengeluaran (sample)" :amount="totalOut" />
    </section>

    <section>
      <h2 class="font-semibold mb-2">Transaksi terbaru</h2>
      <ul class="space-y-2 text-sm text-zinc-200">
        <li v-for="r in rows" :key="r.id">
          <span class="inline-block w-24 font-medium">{{ r.type }}</span>
          <span class="inline-block w-36">{{ r.date }}</span>
          <span class="inline-block">{{ r.note }}</span>
        </li>
      </ul>
    </section>
  </main>
</template>
