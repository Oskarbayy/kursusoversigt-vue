<script setup>
import { computed } from 'vue'

const props = defineProps({ event: { type: Object, required: true } })

const shortDescription = computed(() => {
  const text = props.event.description
  return text.length > 100 ? text.slice(0, 100) + '…' : text
})
</script>

<template>
  <article class="rounded-lg border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md">
    <div class="mb-2 flex items-center gap-3 text-sm">
      <span class="rounded-full bg-blue-50 px-2.5 py-0.5 font-medium text-blue-700">
        {{ event.category }}
      </span>
      <span class="text-gray-500">{{ new Date(event.date).toLocaleDateString('da-DK') }}</span>
    </div>
    <h2 class="text-lg font-semibold">
      <RouterLink :to="`/events/${event.id}`" class="hover:text-blue-600">
        {{ event.title }}
      </RouterLink>
    </h2>
    <p class="mt-1 text-gray-600">{{ shortDescription }}</p>
  </article>
</template>
