const BASE_URL = 'https://jsonplaceholder.typicode.com'

export async function fetchPosts() {
  const response = await fetch(`${BASE_URL}/posts?_limit=12`)
  // error handling on network fail
  if (!response.ok) throw new Error(`HTTP ${response.status}`)
  return response.json()
}
