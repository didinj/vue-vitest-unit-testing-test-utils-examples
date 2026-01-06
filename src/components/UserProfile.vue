<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { fetchUser } from '../services/api'

const loading = ref(true)
const user = ref<{ name: string } | null>(null)
const error = ref<string | null>(null)

onMounted(async () => {
  try {
    user.value = await fetchUser()
  } catch (e) {
    error.value = 'Failed to load user'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <p v-if="loading">Loading...</p>
  <p v-else-if="error">{{ error }}</p>
  <p v-else>{{ user?.name }}</p>
</template>
