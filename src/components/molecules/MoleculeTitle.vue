<template>
    <h1>
        {{ titleText }}
    </h1>
</template>

<script setup lang="ts">
defineProps<{
    titleText: string
}>()
</script>
