<script setup>
import { onMounted } from 'vue'
import { useEvents } from '@/stores/events'

const { loadEvents } = useEvents()

// Hentes én gang, når appen starter, så både oversigt og detaljeside har data
onMounted(loadEvents)
</script>

<template>
  <div class="min-h-screen bg-gray-50 text-gray-900">
    <header class="border-b border-gray-200 bg-white">
      <nav class="mx-auto flex max-w-3xl gap-6 px-4 py-4 font-medium">
        <RouterLink to="/" class="hover:text-blue-600" exact-active-class="text-blue-600">
          Oversigt
        </RouterLink>
        <RouterLink to="/create" class="hover:text-blue-600" exact-active-class="text-blue-600">
          Opret arrangement
        </RouterLink>
      </nav>
    </header>
    <main class="mx-auto max-w-3xl px-4 py-8">
      <RouterView />
    </main>
  </div>
</template>
