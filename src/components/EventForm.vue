<script setup>
import { reactive, ref } from 'vue'
import { CATEGORIES } from '@/stores/events'

const emit = defineEmits(['submit'])

const form = reactive({ title: '', category: '', date: '', location: '', description: '' })
const errors = ref([])

function handleSubmit() {
  errors.value = []
  if (!form.title.trim()) errors.value.push('Titel skal udfyldes.')
  if (!form.category) errors.value.push('Vælg en kategori.')
  if (!form.date) errors.value.push('Dato skal udfyldes.')

  if (errors.value.length === 0) emit('submit', { ...form, title: form.title.trim() })
}
</script>

<template>
  <form
    class="space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
    @submit.prevent="handleSubmit"
  >
    <ul v-if="errors.length" class="list-inside list-disc rounded-md bg-red-50 p-4 text-sm text-red-700">
      <li v-for="message in errors" :key="message">{{ message }}</li>
    </ul>

    <label class="block">
      <span class="text-sm font-medium">Titel *</span>
      <input v-model="form.title" class="input mt-1" />
    </label>
    <div class="grid gap-4 sm:grid-cols-2">
      <label class="block">
        <span class="text-sm font-medium">Kategori *</span>
        <select v-model="form.category" class="input mt-1">
          <option value="" disabled>Vælg kategori</option>
          <option v-for="c in CATEGORIES" :key="c">{{ c }}</option>
        </select>
      </label>
      <label class="block">
        <span class="text-sm font-medium">Dato *</span>
        <input v-model="form.date" type="date" class="input mt-1" />
      </label>
    </div>
    <label class="block">
      <span class="text-sm font-medium">Sted</span>
      <input v-model="form.location" class="input mt-1" />
    </label>
    <label class="block">
      <span class="text-sm font-medium">Beskrivelse</span>
      <textarea v-model="form.description" rows="4" class="input mt-1"></textarea>
    </label>

    <button type="submit" class="rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
      Opret arrangement
    </button>
  </form>
</template>
