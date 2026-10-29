import { ref } from 'vue'
import { fetchPosts } from '@/api/posts'

export const CATEGORIES = ['Frontend', 'Backend', 'Design', 'Data']
const LOCATIONS = ['Aarhus', 'København', 'Odense', 'Online']

// Ligger uden for useEvents(), så alle komponenter deler de samme data
const events = ref([])
const loading = ref(false)
const error = ref(null)

// JSONPlaceholder har kun title og body, så kategori, dato og sted tilføjes lokalt
function postToEvent(post) {
  return {
    id: post.id,
    title: post.title,
    description: post.body,
    category: CATEGORIES[post.id % CATEGORIES.length],
    date: `2026-11-${String(post.id * 2).padStart(2, '0')}`,
    location: LOCATIONS[post.id % LOCATIONS.length],
  }
}

async function loadEvents() {
  loading.value = true
  error.value = null
  try {
    const posts = await fetchPosts()
    events.value.push(...posts.map(postToEvent))
  } catch {
    error.value = 'Failed to load events'
  } finally {
    loading.value = false
  }
}

function addEvent(data) {
  const event = { ...data, id: Date.now() }
  events.value.unshift(event)
  return event
}

function getEvent(id) {
  return events.value.find((event) => event.id === Number(id))
}

export function useEvents() {
  return { events, loading, error, loadEvents, addEvent, getEvent }
}
