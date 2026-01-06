<script setup lang="ts">
defineProps<{
  users: { id: number; name: string }[]
}>()
</script>

<template>
  <ul>
    <li v-for="user in users" :key="user.id">
      <slot name="user" :user="user">
        {{ user.name }}
      </slot>
    </li>
  </ul>
</template>
