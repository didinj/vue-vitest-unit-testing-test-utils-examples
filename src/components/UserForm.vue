<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  (e: 'submit', payload: { name: string }): void
}>()

const name = ref('')

const submitForm = () => {
  emit('submit', { name: name.value })
}
</script>

<template>
  <form @submit.prevent="submitForm">
    <input v-model="name" placeholder="Enter name" />
    <button type="submit">Submit</button>
  </form>
</template>
