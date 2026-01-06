<script setup lang="ts">
const emit = defineEmits<{
  (e: 'confirm'): void
}>()
</script>

<template>
  <div>
    <p>Are you sure?</p>
    <BaseButton @click="emit('confirm')">Confirm</BaseButton>
  </div>
</template>
