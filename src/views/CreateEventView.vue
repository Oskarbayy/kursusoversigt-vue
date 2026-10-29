<script setup>
import { useRouter } from 'vue-router'
import EventForm from '@/components/EventForm.vue'
import { useEvents } from '@/stores/events'

const router = useRouter()
const { addEvent } = useEvents()

function createEvent(data) {
  const event = addEvent(data)
  router.push(`/events/${event.id}`)
}
</script>

<template>
  <h1 class="mb-6 text-3xl font-bold">Opret arrangement</h1>
  <EventForm @submit="createEvent" />
</template>
