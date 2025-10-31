<script setup lang="ts">
import { ref, onMounted } from 'vue'
import EventCard from '@/components/EventCard.vue'
import { getUpcomingEvents, type EventItem } from '@/services/events'

const events = ref<EventItem[]>([])
onMounted(async () => {
  events.value = await getUpcomingEvents()
})
</script>

<template>
  <main class="mx-auto max-w-6xl p-6 space-y-6">
    <h1 class="text-3xl font-bold">Beranda</h1>

    <section class="grid gap-4 md:grid-cols-2">
      <EventCard
        v-for="e in events"
        :key="e.id"
        :title="e.title"
        :date="e.date"
        :location="e.location"
        :description="e.description"
      />
    </section>
  </main>
</template>
