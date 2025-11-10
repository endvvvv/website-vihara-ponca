<script setup lang="ts">
import { ref, onMounted } from 'vue'
import HeroSection from '@/components/HeroSection.vue'
import EventCard from '@/components/EventCard.vue'
import SkeletonCard from '@/components/SkeletonCard.vue'
import { getUpcomingEvents, type EventItem } from '@/services/events'

const events = ref<EventItem[] | null>(null)
const errorMsg = ref<string | null>(null)

onMounted(async () => {
  try {
    events.value = await getUpcomingEvents()
  } catch {
    errorMsg.value = 'Gagal memuat data acara. Silakan coba muat ulang.'
    events.value = []
  }
})
</script>

<template>
  <main id="main" tabindex="-1" class="mx-auto max-w-6xl space-y-6 p-6">
    <HeroSection />

    <!-- Error -->
    <div
      v-if="errorMsg"
      role="alert"
      aria-live="polite"
      class="rounded-xl border border-red-700/40 bg-red-900/20 p-4 text-red-200"
    >
      {{ errorMsg }}
    </div>

    <!-- Loading -->
    <section v-else-if="events === null" class="grid gap-4 md:grid-cols-2">
      <SkeletonCard /><SkeletonCard />
    </section>

    <!-- Empty -->
    <section v-else-if="events.length === 0" class="text-zinc-300">
      Belum ada kegiatan terjadwal.
    </section>

    <!-- Data -->
    <section v-else class="grid gap-4 md:grid-cols-2">
      <EventCard
        v-for="e in events"
        :key="e.id ?? `${e.title}-${e.date}`"
        :title="e.title"
        :date="e.date"
        :location="e.location"
        :description="e.description"
      />
    </section>
  </main>
</template>
