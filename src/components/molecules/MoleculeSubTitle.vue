<template>
    <p>{{ subtitleText }}</p>
</template>

<script setup lang="ts">
defineProps<{
    subtitleText: string
}>()
</script>
