<template>
    <div>
        <div style="width: 800px;">
            <canvas id="acquisitions"></canvas>
        </div>

    </div>
</template>

<script setup lang="ts">
import { Acquisitions } from '@/Acquisitions'
import { onMounted } from 'vue'

onMounted(() => {
    Acquisitions()
})
</script>
