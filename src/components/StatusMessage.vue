<script setup lang="ts">
defineProps<{
  status: 'success' | 'error'
}>()
</script>

<template>
  <p v-if="status === 'success'" class="success">
    Operation completed successfully
  </p>

  <p v-else class="error">
    Something went wrong
  </p>
</template>
