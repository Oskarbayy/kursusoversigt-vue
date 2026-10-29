<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useEvents } from '@/stores/events'

const route = useRoute()
const { loading, error, getEvent } = useEvents()

// computed, så siden opdateres, når data er hentet, eller id'et i URL'en skifter
const event = computed(() => getEvent(route.params.id))
</script>

<template>
  <RouterLink to="/" class="text-sm text-blue-600 hover:underline">Tilbage til oversigten</RouterLink>

  <article v-if="event" class="mt-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
    <h1 class="text-2xl font-bold">{{ event.title }}</h1>
    <dl class="my-4 grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 text-sm">
      <dt class="text-gray-500">Kategori</dt>
      <dd>{{ event.category }}</dd>
      <dt class="text-gray-500">Dato</dt>
      <dd>{{ new Date(event.date).toLocaleDateString('da-DK') }}</dd>
      <dt class="text-gray-500">Sted</dt>
      <dd>{{ event.location || 'Ikke angivet' }}</dd>
    </dl>
    <p class="text-gray-700">{{ event.description || 'Ingen beskrivelse.' }}</p>
  </article>
  <p v-else-if="loading" class="mt-4 text-gray-500">Henter arrangement…</p>
  <p v-else-if="error" class="mt-4 rounded-md bg-red-50 p-4 text-red-700">{{ error }}</p>
  <p v-else class="mt-4 text-gray-500">Arrangementet blev ikke fundet.</p>
</template>
