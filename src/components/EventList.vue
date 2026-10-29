<script setup>
import EventCard from './EventCard.vue'

defineProps({ events: { type: Array, required: true } })
</script>

<template>
  <p v-if="events.length === 0" class="text-gray-500">Ingen arrangementer matcher din søgning.</p>
  <div v-else class="space-y-4">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>
