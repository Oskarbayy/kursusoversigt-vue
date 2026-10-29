<script setup>
import { CATEGORIES } from '@/stores/events'

defineProps({ search: String, category: String })
const emit = defineEmits(['update:search', 'update:category'])
</script>

<template>
  <div class="mb-6 flex flex-col gap-3 sm:flex-row">
    <input
      type="search"
      placeholder="Søg i titel eller beskrivelse"
      class="input"
      :value="search"
      @input="emit('update:search', $event.target.value)"
    />
    <select
      class="input sm:w-48"
      :value="category"
      @change="emit('update:category', $event.target.value)"
    >
      <option value="">Alle kategorier</option>
      <option v-for="c in CATEGORIES" :key="c">{{ c }}</option>
    </select>
  </div>
</template>
