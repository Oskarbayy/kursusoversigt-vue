<script setup>
import { computed, ref } from 'vue'
import EventFilters from '@/components/EventFilters.vue'
import EventList from '@/components/EventList.vue'
import { useEvents } from '@/stores/events'

const { events, loading, error, loadEvents } = useEvents()

const search = ref('')
const category = ref('')

// Genberegnes automatisk, når events, search eller category ændres
const filteredEvents = computed(() => {
  const term = search.value.trim().toLowerCase()
  return events.value.filter((event) => {
    const matchesCategory = !category.value || event.category === category.value
    const matchesSearch =
      event.title.toLowerCase().includes(term) || event.description.toLowerCase().includes(term)
    return matchesCategory && matchesSearch
  })
})
</script>

<template>
  <h1 class="mb-6 text-3xl font-bold">Kurser og workshops</h1>
  <EventFilters v-model:search="search" v-model:category="category" />

  <p v-if="loading" class="text-gray-500">Henter arrangementer…</p>
  <p v-else-if="error" class="rounded-md bg-red-50 p-4 text-red-700">
    {{ error }}
    <button class="ml-2 font-medium underline" @click="loadEvents">Prøv igen</button>
  </p>
  <EventList v-else :events="filteredEvents" />
</template>
